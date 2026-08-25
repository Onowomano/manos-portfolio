import { useState } from "react";
import CodeInput from "./CodeInput";
import CopyEmailButton from "./CopyEmailButton";
import { siteLinks } from "../data/links";

const SHAKE_DURATION_MS = 400;

const GENERIC_CODES = [
  "00000", "11111", "22222", "33333", "44444",
  "55555", "66666", "77777", "88888", "99999",
  "12345",
];

function pickRevealedCode(excludeCode) {
  const options = GENERIC_CODES.filter((code) => code !== excludeCode);
  return options[Math.floor(Math.random() * options.length)];
}

function unlockKey(slug) {
  return `case-study-unlocked:${slug}`;
}

export function isCaseStudyUnlocked(slug) {
  return sessionStorage.getItem(unlockKey(slug)) === "true";
}

function unlockCaseStudy(slug) {
  sessionStorage.setItem(unlockKey(slug), "true");
}

async function sha256Hex(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export default function CaseStudyCodeGate({ slug, codeHashes, codeLength = 5, onUnlock }) {
  const [status, setStatus] = useState("idle");
  const [attempt, setAttempt] = useState(0);
  const [messageMode, setMessageMode] = useState("idle"); // "idle" | "teasing" | "final"
  const [revealedCode, setRevealedCode] = useState(null);
  const email = siteLinks.email.replace(/^mailto:/, "");

  async function handleComplete(code) {
    const hash = await sha256Hex(code);
    if (codeHashes.includes(hash)) {
      unlockCaseStudy(slug);
      onUnlock();
      return;
    }

    if (GENERIC_CODES.includes(code)) {
      if (messageMode === "idle") {
        setRevealedCode(pickRevealedCode(code));
        setMessageMode("teasing");
      } else {
        setMessageMode("final");
      }
    }

    setStatus("error");
    setTimeout(() => {
      setStatus("idle");
      setAttempt((prev) => prev + 1);
    }, SHAKE_DURATION_MS);
  }

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {messageMode === "idle" && (
        <p className="text-[14px] leading-[22px] tracking-[-0.28px] text-text-primary">
          Enter code to continue.
        </p>
      )}

      {messageMode === "teasing" && (
        <>
          <div>
            <p className="text-[14px] leading-[22px] tracking-[-0.28px] text-text-primary">
              Lol, nice try, I wouldn&rsquo;t use something that simple as the code.
            </p>
            <p className="text-[14px] leading-[22px] tracking-[-0.28px] text-text-primary">
              However, because of your determination, you can try this code.
            </p>
          </div>
          <div className="flex items-center py-[16px]">
            <p className="font-display-lg text-[32px] font-medium leading-[40px] tracking-[-1.28px] text-text-primary">
              {revealedCode}
            </p>
          </div>
        </>
      )}

      {messageMode === "final" && (
        <div>
          <p className="text-[14px] leading-[22px] tracking-[-0.28px] text-text-primary">
            Oh wait! I can&rsquo;t believe you actually tried it, lol.
          </p>
          <p className="text-[14px] leading-[22px] tracking-[-0.28px] text-text-primary">
            Please send me an email to get a code.
          </p>
        </div>
      )}

      <CodeInput
        key={attempt}
        length={codeLength}
        status={status}
        onComplete={handleComplete}
      />
      <div className="flex items-center gap-[3px]">
        <p className="text-[14px] leading-[22px] tracking-[-0.28px]">
          <span className="text-text-secondary">Don&rsquo;t have a code?</span>{" "}
          <span className="text-text-primary">Email </span>
          <a
            href={siteLinks.email}
            className="link-underline text-text-primary"
          >
            {email}
          </a>
        </p>
        <CopyEmailButton email={email} />
      </div>
    </div>
  );
}
