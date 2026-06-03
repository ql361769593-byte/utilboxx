"use client";
import { useState, useRef, ReactNode } from "react";
import { Upload, Loader2 } from "lucide-react";
import type { Dictionary } from "@/i18n/types";

export function FileTool({
  onProcess,
  accept = "*",
  multiple = false,
  processButtonText,
  dict,
  children,
}: {
  onProcess: (files: File[]) => Promise<void> | void;
  accept?: string;
  multiple?: boolean;
  processButtonText?: string;
  dict: Dictionary;
  children?: ReactNode;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (fs: FileList | null) => {
    if (!fs) return;
    setFiles(Array.from(fs));
  };

  const handleProcess = async () => {
    if (files.length === 0) return;
    setProcessing(true);
    try {
      await onProcess(files);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-4">
      <div
        onClick={() => inputRef.current?.click()}
        onDrop={(e) => {
          e.preventDefault();
          handleFiles(e.dataTransfer.files);
        }}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/30 transition"
      >
        <Upload className="w-10 h-10 text-slate-400 mx-auto mb-3" />
        <p className="text-slate-700 font-medium">{dict.ui.choose_file}</p>
        <p className="text-sm text-slate-500 mt-1">{dict.ui.drop_file_here}</p>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((f, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-slate-50 rounded px-3 py-2 text-sm"
            >
              <span className="truncate">{f.name}</span>
              <span className="text-slate-500 text-xs ml-2">
                {(f.size / 1024).toFixed(1)} KB
              </span>
            </div>
          ))}
        </div>
      )}

      {children}

      <button
        onClick={handleProcess}
        disabled={files.length === 0 || processing}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
      >
        {processing ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {dict.common.loading}
          </>
        ) : (
          <>{processButtonText || dict.common.process}</>
        )}
      </button>
    </div>
  );
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
