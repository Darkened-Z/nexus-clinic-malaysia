"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtmLoaded?: boolean;
  }
}

export default function GTM() {
  useEffect(() => {
    const loadGTM = () => {
      if (window.gtmLoaded) return;
      window.gtmLoaded = true;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });

      const script = document.createElement("script");
      script.src =
        "https://www.googletagmanager.com/gtm.js?id=GTM-PRRSXZ2";
      script.async = true;

      document.body.appendChild(script);
    };

    // Load GTM only after user interaction
    window.addEventListener("scroll", loadGTM, { once: true });
    window.addEventListener("click", loadGTM, { once: true });
    window.addEventListener("touchstart", loadGTM, { once: true });
  }, []);

  return null;
}
