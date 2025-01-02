"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Features",
    link: "/features",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Resources",
    link: "/resources",
  },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-1 items-center justify-center gap-3 lg:gap-5">
      {items.map((item, i) => (
        <li key={i}>
          <Link
            href={item.link}
            className={`hover:bg-custom-gradient font-medium duration-500 bg-clip-text hover:text-transparent ${pathname === item.link ? "bg-custom-gradient bg-clip-text text-transparent" : "text-title"}`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
