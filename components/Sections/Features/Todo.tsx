"use client";

import { useState } from "react";

type TodoProps = {
  id: string;
  label: string;
  number: number;
};

export default function Todo({ id, label, number }: TodoProps) {
  const [check, setCheck] = useState(number !== 4 ? true : false);

  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer select-none items-center gap-3 lg:gap-5"
    >
      <input
        id={id}
        type="checkbox"
        className="size-4 cursor-pointer select-none lg:size-5"
        defaultChecked={check}
        onChange={() => setCheck((prev) => !prev)}
      />

      <h5
        className={`flex-grow cursor-pointer rounded-[10px] border border-second-border p-3 text-sm lg:text-base ${check ? "text-border line-through" : "text-title"}`}
      >
        {label}
      </h5>
    </label>
  );
}
