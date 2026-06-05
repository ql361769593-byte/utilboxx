"use client";
import { useMemo, useState } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

const KEYWORDS = /\b(SELECT|FROM|WHERE|LEFT JOIN|RIGHT JOIN|INNER JOIN|OUTER JOIN|JOIN|ON|AND|OR|GROUP BY|ORDER BY|LIMIT|OFFSET|HAVING|UNION|INSERT INTO|VALUES|UPDATE|SET|DELETE FROM|CREATE TABLE|ALTER TABLE|DROP TABLE)\b/gi;

function formatSQL(input: string): string {
  if (!input.trim()) return "";
  let s = input.trim().replace(/\s+/g, " ");
  // Put keywords on their own lines
  s = s.replace(/\s*,\s*/g, ", ");
  s = s.replace(KEYWORDS, "\n$1");
  // Indent WHERE / AND / OR / ON
  const lines = s.split("\n").map((l) => l.trim()).filter((l) => l);
  const out: string[] = [];
  let depth = 0;
  for (const line of lines) {
    const kw = line.match(/^([A-Z ]+)/i)?.[1].toUpperCase().trim() || "";
    if (/^(SELECT|INSERT INTO|UPDATE|DELETE FROM)$/i.test(kw)) { depth = 0; out.push(line); }
    else if (/^(FROM|GROUP BY|ORDER BY|LIMIT|HAVING|UNION)$/i.test(kw)) { depth = 0; out.push("\n" + line); }
    else if (/^(WHERE)$/i.test(kw)) { depth = 1; out.push("\n" + line); }
    else if (/^(AND|OR|ON)$/i.test(kw)) { out.push(" ".repeat(depth * 2) + line); }
    else if (/JOIN$/i.test(kw)) { depth = 1; out.push("\n" + line); }
    else { out.push(" ".repeat(depth * 2) + line); }
  }
  return out.join("\n").replace(/\n{2,}/g, "\n").trim();
}

export default function Sql({ dict }: { dict: Dictionary }) {
  const [input, setInput] = useState("select id, name, email from users where active = 1 and age > 18 order by created_at desc");
  const output = useMemo(() => formatSQL(input), [input]);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-2">SQL Input</label>
        <TextArea value={input} onChange={setInput} rows={8} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Formatted SQL</label>
          {output && <CopyButton text={output} dict={dict} />}
        </div>
        <textarea readOnly value={output} rows={12} className="w-full px-3 py-2 border border-slate-300 rounded font-mono text-sm bg-slate-50" />
      </div>
    </div>
  );
}
