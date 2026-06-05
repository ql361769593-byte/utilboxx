"use client";
import { useState, useMemo } from "react";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

const PARAGRAPHS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
  "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.",
  "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Hanc ego cum teneam sententiam, quid est cur verear ne ad eam non possim accommodare nostros quos tu paulo ante.",
  "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Ut enim ad minima veniam, quis nostrum exercitationem.",
  "Nam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit.",
];

export default function Lorem({ dict }: { dict: Dictionary }) {
  const [count, setCount] = useState(3);

  const text = useMemo(() => {
    const out: string[] = [];
    for (let i = 0; i < count; i++) out.push(PARAGRAPHS[i % PARAGRAPHS.length]);
    return out.join("\n\n");
  }, [count]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <div className="space-y-2">
          <label className="text-sm font-medium block">{dict.ui.count}</label>
          <input
            type="number"
            min={1}
            max={20}
            value={count}
            onChange={(e) => {
              const n = Math.max(1, Math.min(20, parseInt(e.target.value) || 1));
              setCount(n);
            }}
            className="w-32 border border-slate-300 rounded px-3 py-2"
          />
        </div>
        <button
          onClick={() => setCount(3)}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded text-sm"
        >
          {dict.common.reset}
        </button>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium block">{dict.common.output}</label>
          <CopyButton text={text} dict={dict} />
        </div>
        <pre className="w-full min-h-[300px] px-4 py-3 border border-slate-300 rounded-lg bg-slate-50 font-serif text-sm whitespace-pre-wrap">
{text}
        </pre>
      </div>
    </div>
  );
}
