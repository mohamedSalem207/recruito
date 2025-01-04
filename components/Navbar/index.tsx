import Image from "next/image";
import NavbarContent from "./Content";

export default function Navbar() {
  return (
    <nav className="absolute start-0 top-[30px] z-40 w-full">
      <div className="container">
        <div className="flex items-center justify-between gap-5 rounded-[40px] border-2 border-white bg-gradient-to-r from-[#FFFFFF80] to-white p-3 lg:p-5">
          <Image
            src="/logo.svg"
            width={150}
            height={30}
            alt="logo"
            draggable={false}
          />

          <NavbarContent />
        </div>
      </div>
    </nav>
  );
}
