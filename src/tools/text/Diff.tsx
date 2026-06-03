"use client";
import { useState, useMemo } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function TextDiff({ dict }: { dict: Dictionary }) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const diff = useMemo(() => {
    const aLines = a.split("\n");
    const bLines = b.split("\n");
    const max = Math.max(aLines.length, bLines.length);
    const rows = [];
    for (let i = 0; i < max; i++) {
      const al = aLines[i] ?? "";
      const bl = bLines[i] ?? "";
      let type: "same" | "add" | "del" | "change" = "same";
      if (al === bl) type = "same";
      else if (!al) type = "add";
      else if (!bl) type = "del";
      else type = "change";
      rows.push({ a: al, b: bl, type });
    }
    return rows;
  }, [a, b]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium block mb-2">{dict.ui.text_a}</label>
          <TextArea value={a} onChange={setA} rows={8} />
        </div>
        <div>
          <label className="text-sm font-medium block mb-2">{dict.ui.text_b}</label>
          <TextArea value={b} onChange={setB} rows={8} />
        </div>
      </div>
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <table className="w-full text-sm font-mono">
          <tbody>
            {diff.map((row, i) => (
              <tr
                key={i}
                className={
                  row.type === "add"
                    ? "bg-green-50"
                    : row.type === "del"
                    ? "bg-red-50"
                    : row.type === "change"
                    ? "bg-yellow-50"
                    : ""
                }
              >
                <td className="px-3 py-1 w-1/2 border-r border-slate-200">
                  {row.type === "add" ? "" : row.a}
                </td>
                <td className="px-3 py-1 w-1/2">
                  {row.type === "del" ? "" : row.b}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
