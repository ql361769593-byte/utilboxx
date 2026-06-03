"use client";
import { useState } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function CaseConvert({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("");

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const toTitle = () =>
    setText(
      text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
    );
  const toSentence = () =>
    setText(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase()));
  const toToggle = () =>
    setText(
      text
        .split("")
        .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
        .join("")
    );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button onClick={toUpper} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">UPPERCASE</button>
        <button onClick={toLower} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">lowercase</button>
        <button onClick={toTitle} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Title Case</button>
        <button onClick={toSentence} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Sentence case</button>
        <button onClick={toToggle} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">tOGGLE</button>
      </div>
      <TextArea value={text} onChange={setText} rows={12} />
      {text && (
        <div className="flex justify-end">
          <CopyButton text={text} dict={dict} />
        </div>
      )}
    </div>
  );
}
