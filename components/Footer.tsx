import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#848EA00D] py-5 font-medium text-text lg:py-7">
      <div className="container">
        <div className="mb-5 flex items-center justify-between lg:mb-7">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={150}
              height={30}
              alt="logo"
              draggable={false}
            />
          </Link>

          <div className="flex items-center gap-3 lg:gap-5">
            <a
              href="#"
              target="_blank"
              className="duration-300 hover:text-secondary"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>

            <a
              href="#"
              target="_blank"
              className="duration-300 hover:text-secondary"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="#"
              target="_blank"
              className="duration-300 hover:text-secondary"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="#"
              target="_blank"
              className="duration-300 hover:text-secondary"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs lg:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Recruito AI . All rights reserved
          </p>

          <div className="flex items-center gap-3 lg:gap-5">
            <Link href="/terms">Terms</Link>

            <Link href="/Privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
