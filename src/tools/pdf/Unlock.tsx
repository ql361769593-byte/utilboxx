"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument } from "pdf-lib";

export default function UnlockPdf({ dict }: { dict: Dictionary }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium block mb-1">Password (if any)</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
            placeholder="Leave empty if no password"
          />
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <div className="text-xs text-slate-500">
          Re-saves the PDF without restrictions. Note: pdf-lib cannot read
          password-encrypted PDFs — if the file is encrypted, open it in a
          desktop viewer first and re-export.
        </div>
      </div>
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.unlock}
        onProcess={async (files) => {
          setError("");
          const file = files[0];
          try {
            const bytes = await file.arrayBuffer();
            const opts: any = { ignoreEncryption: true };
            if (password) opts.password = password;
            const doc = await PDFDocument.load(bytes, opts);
            const data = await doc.save({ useObjectStreams: true });
            downloadBlob(
              new Blob([data as BlobPart], { type: "application/pdf" }),
              `unlocked-${file.name}`
            );
          } catch (e: any) {
            setError(e?.message || "Failed to open PDF. Wrong password?");
          }
        }}
      />
    </div>
  );
}
