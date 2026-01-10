"use client";

import { useEffect } from "react";

export default function Chatwoot() {
  useEffect(() => {
    const BASE_URL = "http://utils-chatwoot-359e62-89-116-38-84.traefik.me";

    // Avoid loading the script multiple times
    if ((window as any).chatwootSDK) return;

    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      (window as any).chatwootSDK.run({
        websiteToken: "rY6s6JyCXThSbB54hHbPhHDG",
        baseUrl: BASE_URL,
      });
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
