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
    <ul className="flex flex-1 items-center justify-center gap-5 lg:gap-7">
      {items.map((item, i) => (
        <li key={i}>
          <Link
            href={item.link}
            className={`font-semibold duration-300 hover:text-secondary ${pathname === item.link ? "bg-custom-gradient bg-clip-text text-transparent" : "text-title"}`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
