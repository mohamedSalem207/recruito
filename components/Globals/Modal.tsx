"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed start-0 top-0 z-50 h-screen w-full bg-white p-5">
      <div className="mb-3.5 flex items-center justify-end">
        <button type="button" onClick={onClose} className="text-xl">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      {children}
    </div>
  );
}
