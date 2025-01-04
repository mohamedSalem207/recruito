"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
};

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed start-0 top-0 z-50 h-screen w-full bg-white p-5"
        >
          <div className="mb-3.5 flex items-center justify-end">
            <button type="button" onClick={onClose} className="text-xl">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
