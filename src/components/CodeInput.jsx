import { useEffect, useRef, useState } from "react";

const DIGIT_PATTERN = /^[0-9]$/;

export default function CodeInput({ length, status = "idle", onComplete }) {
  const [digits, setDigits] = useState(() => Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (digits.every((digit) => digit !== "")) {
      onComplete(digits.join(""));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [digits]);

  function setDigitAt(index, value) {
    setDigits((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }

  function handleChange(index, event) {
    const value = event.target.value.slice(-1);
    if (value && !DIGIT_PATTERN.test(value)) return;

    setDigitAt(index, value);
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index, event) {
    if (event.key === "Backspace" && digits[index] === "" && index > 0) {
      setDigitAt(index - 1, "");
      inputRefs.current[index - 1]?.focus();
    }
  }

  const isError = status === "error";
  const focusBorderClass = isError
    ? "focus-within:border-border-accent-red-default"
    : "focus-within:border-border-accent-violet";
  const bgClass = isError ? "bg-bg-accent-red-light" : "bg-bg-primary";

  return (
    <div
      className={`flex items-start ${isError ? "animate-[shake_400ms_ease-in-out]" : ""}`}
    >
      {digits.map((digit, index) => (
        <div
          key={index}
          className={`flex items-center rounded-[999px] border border-transparent p-[4px] ${focusBorderClass}`}
        >
          <div className={`flex size-[40px] items-center justify-center rounded-[999px] ${bgClass}`}>
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(event) => handleChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              aria-label={`Digit ${index + 1} of ${length}`}
              className="size-full bg-transparent text-center text-[18px] leading-[24px] tracking-[-0.36px] text-text-primary outline-none"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
