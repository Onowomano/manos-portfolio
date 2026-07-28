import { useState } from "react";
import { Copy2Line, CheckLine } from "@mingcute/react";
import CodeInput from "./CodeInput";
import { siteLinks } from "../data/links";

const SHAKE_DURATION_MS = 400;
const COPY_RESET_MS = 800;

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

function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), COPY_RESET_MS);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy email address"
      className={`flex size-[16px] shrink-0 items-center justify-center ${
        copied ? "text-icon-accent-green" : "text-text-tertiary"
      }`}
    >
      {copied ? (
        <CheckLine className="size-[16px]" />
      ) : (
        <Copy2Line className="size-[16px]" />
      )}
    </button>
  );
}

export default function CaseStudyCodeGate({ slug, codeHashes, codeLength = 5, onUnlock }) {
  const [status, setStatus] = useState("idle");
  const [attempt, setAttempt] = useState(0);
  const email = siteLinks.email.replace(/^mailto:/, "");

  async function handleComplete(code) {
    const hash = await sha256Hex(code);
    if (codeHashes.includes(hash)) {
      unlockCaseStudy(slug);
      onUnlock();
      return;
    }

    setStatus("error");
    setTimeout(() => {
      setStatus("idle");
      setAttempt((prev) => prev + 1);
    }, SHAKE_DURATION_MS);
  }

  return (
    <div className="flex flex-col gap-[16px] w-full">
      <p className="text-[14px] leading-[22px] tracking-[-0.28px] text-text-primary">
        Enter code to continue.
      </p>
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
