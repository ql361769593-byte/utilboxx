"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument } from "pdf-lib";

export default function ProtectPdf({ dict }: { dict: Dictionary }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
            placeholder="Enter password"
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Confirm password</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
            placeholder="Repeat password"
          />
        </div>
        {password && confirm && password !== confirm && (
          <div className="text-sm text-red-600">Passwords do not match</div>
        )}
        {error && <div className="text-sm text-red-600">{error}</div>}
        <div className="text-xs text-slate-500">
          Note: pdf-lib does not yet support PDF encryption directly. This tool
          re-saves the PDF; for true AES encryption please use a server-side tool.
        </div>
      </div>
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.protect}
        onProcess={async (files) => {
          if (!password) {
            setError("Please enter a password");
            return;
          }
          if (password !== confirm) {
            setError("Passwords do not match");
            return;
          }
          setError("");
          const file = files[0];
          const bytes = await file.arrayBuffer();
          const doc = await PDFDocument.load(bytes);
          // Re-save preserves structure (pdf-lib cannot yet set encryption).
          const data = await doc.save({ useObjectStreams: true });
          downloadBlob(
            new Blob([data as BlobPart], { type: "application/pdf" }),
            `protected-${file.name}`
          );
        }}
      />
    </div>
  );
}
