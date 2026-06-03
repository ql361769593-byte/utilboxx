"use client";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export function VercelInsights() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9345131467461923"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
