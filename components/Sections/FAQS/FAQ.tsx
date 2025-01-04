"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FAQProps = {
  first?: boolean;
  data: {
    question: string;
    answer: string;
  };
};

export default function FAQ({ data: { question, answer }, first }: FAQProps) {
  return (
    <Disclosure
      as="div"
      className="border-b border-b-second-border last-of-type:border-b-0"
      defaultOpen={first}
    >
      {({ open }) => (
        <>
          <DisclosureButton className="flex w-full items-center justify-between p-4 text-title">
            <h5 className="font-medium lg:text-lg lg:font-semibold">
              {question}
            </h5>

            <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} />
          </DisclosureButton>

          <DisclosurePanel
            className="p-4 pt-1 text-text"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </>
      )}
    </Disclosure>
  );
}
