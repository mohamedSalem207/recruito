"use client";

import { ToastContainer, toast } from "react-toastify";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer position="top-center" theme="colored" />

      {children}
    </>
  );
}
