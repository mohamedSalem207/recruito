"use client";

import { useState } from "react";

type TodoProps = {
  id: string;
  label: string;
};

export default function Todo({ id, label }: TodoProps) {
  const [check, setCheck] = useState(false);

  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer select-none items-center gap-3 lg:gap-5"
    >
      <input
        id={id}
        type="checkbox"
        className="size-[20px] cursor-pointer select-none"
        value=""
        onChange={() => setCheck((prev) => !prev)}
      />

      <h5
        className={`flex-grow cursor-pointer rounded-[10px] border border-second-border p-3 ${check ? "text-border line-through" : "text-title"}`}
      >
        {label}
      </h5>
    </label>
  );
}
