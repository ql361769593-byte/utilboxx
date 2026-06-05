"use client";
import { useMemo, useState } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

function formatXML(input: string): string {
  if (!input.trim()) return "";
  // Quick balance check
  const openTags = (input.match(/<[A-Za-z][^>!\/?]*[^/]>/g) || []).length;
  const closeTags = (input.match(/<\/[A-Za-z][^>]*>/g) || []).length;
  const selfClose = (input.match(/<[A-Za-z][^>]*\/>/g) || []).length;
  if (openTags !== closeTags) {
    throw new Error(`Mismatched tags: ${openTags} opening vs ${closeTags} closing (${selfClose} self-closing)`);
  }
  // Add newlines after closing > and before opening <
  let s = input.trim();
  s = s.replace(/>\s*</g, ">\n<");
  const lines = s.split("\n");
  let depth = 0;
  const out: string[] = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (/^<\/.+>/.test(line)) {
      depth = Math.max(0, depth - 1);
      out.push("  ".repeat(depth) + line);
    } else if (/^<[^>]+\/>$/.test(line)) {
      out.push("  ".repeat(depth) + line);
    } else if (/^<[^>]+>$/.test(line) && !/^<\?/.test(line) && !/^<!--/.test(line)) {
      out.push("  ".repeat(depth) + line);
      depth++;
    } else {
      out.push("  ".repeat(depth) + line);
    }
  }
  return out.join("\n");
}

export default function Xml({ dict }: { dict: Dictionary }) {
  const [input, setInput] = useState("<root><item id='1'><name>Apple</name><price>1.20</price></item><item id='2'><name>Pear</name><price>0.80</price></item></root>");
  const { output, error } = useMemo(() => {
    try { return { output: formatXML(input), error: "" }; }
    catch (e: any) { return { output: "", error: e.message }; }
  }, [input]);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-2">XML Input</label>
        <TextArea value={input} onChange={setInput} rows={8} />
      </div>
      {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">⚠️ {error}</p>}
      {output && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Formatted XML</label>
            <CopyButton text={output} dict={dict} />
          </div>
          <textarea readOnly value={output} rows={12} className="w-full px-3 py-2 border border-slate-300 rounded font-mono text-sm bg-slate-50" />
        </div>
      )}
    </div>
  );
}
