"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { useState } from "react";
import Menu from "./Menu";
import Btn from "../Globals/Button";
import Portal from "../Globals/Portal";

export default function NavbarContent() {
  const [menuModal, setMenuModal] = useState(true);

  return (
    <>
      {/* {menuModal && ( */}
      <Portal>
        <div className="fixed start-0 top-0 z-50 h-screen w-full bg-white"></div>
      </Portal>
      {/* )} */}

      <div className="hidden lg:block">
        <Menu />
      </div>

      <div className="hidden lg:block">
        <Btn text="Contact US" />
      </div>

      <div className="inline lg:hidden" onClick={() => setMenuModal(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </>
  );
}
