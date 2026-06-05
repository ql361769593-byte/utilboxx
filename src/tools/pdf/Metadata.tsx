"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument } from "pdf-lib";

export default function MetadataPdf({ dict }: { dict: Dictionary }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [keywords, setKeywords] = useState("");
  const [loaded, setLoaded] = useState(false);

  const handleLoad = async (files: File[]) => {
    if (loaded) return;
    const bytes = await files[0].arrayBuffer();
    try {
      const doc = await PDFDocument.load(bytes);
      setTitle(doc.getTitle() || "");
      setAuthor(doc.getAuthor() || "");
      setSubject(doc.getSubject() || "");
      setKeywords((doc.getKeywords() || "").replace(/[\u0000]/g, " "));
      setLoaded(true);
    } catch {
      // ignore; user can still type new values
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Author</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium block mb-1">Subject</label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium block mb-1">Keywords (comma separated)</label>
          <input
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
            placeholder="keyword1, keyword2"
          />
        </div>
      </div>
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.metadata}
        onProcess={async (files) => {
          await handleLoad(files);
          const file = files[0];
          const bytes = await file.arrayBuffer();
          const doc = await PDFDocument.load(bytes);
          doc.setTitle(title);
          doc.setAuthor(author);
          doc.setSubject(subject);
          doc.setKeywords(keywords.split(",").map((k) => k.trim()).filter(Boolean));
          doc.setProducer("UtilBoxx");
          doc.setCreator("UtilBoxx");
          const data = await doc.save();
          downloadBlob(
            new Blob([data as BlobPart], { type: "application/pdf" }),
            `metadata-${file.name}`
          );
        }}
      />
    </div>
  );
}
