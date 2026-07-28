import { useState } from "react";
import { Copy2Line, CheckLine } from "@mingcute/react";

const COPY_RESET_MS = 800;

export default function CopyEmailButton({ email }) {
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
