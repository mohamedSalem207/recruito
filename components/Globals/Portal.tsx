"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Portal({ children }: { children: React.ReactNode }) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    const element = document.getElementById("portal-root");

    if (element) setPortalRoot(element);

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return ReactDOM.createPortal(children, portalRoot!);
}
