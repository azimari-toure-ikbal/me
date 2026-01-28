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

    document.body.appendChild(script);
  }, []);

  return null;
}
