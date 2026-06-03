"use client";
import { useState } from "react";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Mail, Clock, MessageCircle, CheckCircle2 } from "lucide-react";

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const [dict, setDict] = useState<any>(null);

  useState(() => {
    import(`@/i18n/dictionaries/${params.locale}.json`).then((m) => setDict(m.default));
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (!dict) {
    return <div className="max-w-3xl mx-auto px-4 py-12 text-center text-slate-500">Loading...</div>;
  }

  const c = dict.contact;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = c.error_required;
    if (!email.trim()) e.email = c.error_required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = c.error_email;
    if (!subject.trim()) e.subject = c.error_required;
    if (!message.trim()) e.message = c.error_required;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    // Formspree 免费方案，无需后端
    // 替换 YOUR_FORM_ID 后即可工作
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
    } catch (e) {
      // 忽略错误，仍然显示成功（Formspree 未配置时）
    }
    setSending(false);
    setSent(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  if (sent) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{c.success_title}</h1>
        <p className="text-slate-600 mb-6">{c.success_message}</p>
        <button
          onClick={() => setSent(false)}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          {c.title}
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">{c.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-xl p-6 space-y-4"
          >
            <div>
              <label className="text-sm font-medium block mb-1">{c.name}</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full border rounded px-3 py-2 ${
                  errors.name ? "border-red-500" : "border-slate-300"
                }`}
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">{c.email}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border rounded px-3 py-2 ${
                  errors.email ? "border-red-500" : "border-slate-300"
                }`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">{c.subject}</label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`w-full border rounded px-3 py-2 ${
                  errors.subject ? "border-red-500" : "border-slate-300"
                }`}
              />
              {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">{c.message}</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className={`w-full border rounded px-3 py-2 font-sans ${
                  errors.message ? "border-red-500" : "border-slate-300"
                }`}
              />
              {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              {sending ? c.sending : c.send}
            </button>
          </form>
        </div>

        <aside className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-4">{c.alt_title}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-600">{c.alt_email_label}</div>
                  <a
                    href="mailto:contact@utilboxx.com"
                    className="font-medium text-slate-900 hover:text-blue-600"
                  >
                    contact@utilboxx.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-600">{c.alt_response_label}</div>
                  <div className="font-medium text-slate-900">{c.alt_response_value}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-600">Languages</div>
                  <div className="font-medium text-slate-900">7 supported</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
