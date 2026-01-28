"use client";

import { useEffect } from "react";

export default function Chatwoot() {
  useEffect(() => {
    const BASE_URL = "https://chatwoot-production-de78.up.railway.app";

    // Avoid loading the script multiple times
    if ((window as any).chatwootSDK) return;

    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      (window as any).chatwootSDK.run({
        websiteToken: "NHonoRUgX7JxrJmRiXdTmq6T",
        baseUrl: BASE_URL,
      });
    };

    window.addEventListener("chatwoot:ready", () => {
      // 1. Get the website token you already have in the component
      const websiteToken = "NHonoRUgX7JxrJmRiXdTmq6T";

      // 2. Save it to a cookie that your proxy can read
      // Use a domain-level cookie if your proxy is a subdomain
      document.cookie = `last_chatwoot_inbox=${websiteToken}; path=/; domain=.yourdomain.com; max-age=3600`;
    });

    document.body.appendChild(script);
  }, []);

  return null;
}
