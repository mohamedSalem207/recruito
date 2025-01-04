"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Portal({ children }: { children: React.ReactNode }) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let element = document.getElementById("portal-root");

    if (element) setPortalRoot(element);
    else {
      const div = document.createElement("div");
      div.id = "portal-root";
      document.body.appendChild(div);

      setPortalRoot(div);
    }

    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  if (!portalRoot) return null;

  return ReactDOM.createPortal(children, portalRoot!);
}
