"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { useState } from "react";
import Menu from "./Menu";
import Btn from "../Globals/Button";
import Portal from "../Globals/Portal";
import Modal from "../Globals/Modal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavbarContent() {
  const [menuModal, setMenuModal] = useState(false);

  return (
    <>
      {menuModal && (
        <Portal>
          <Modal onClose={() => setMenuModal(false)}>
            <Menu onClose={() => setMenuModal(false)} />

            <Btn text="Contact US" classes="mt-5" />
          </Modal>
        </Portal>
      )}

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
