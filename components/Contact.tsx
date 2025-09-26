import { CONSTANTS } from "@/utils/constants";
import Link from "next/link";
import { MouseEvent } from "react";
import ReactGA from "react-ga4";
import { FormattedMessage } from "react-intl";

export function Contact() {
  const handleContactClick = (e: MouseEvent<HTMLAnchorElement>) => {
    ReactGA.event({
      category: "Contact",
      action: `User clicked on contact link: ${e.currentTarget.href}.`,
      label: "Contact Link",
    });
  };

  return (
    <section className="p-8">
      <h2 className="text-2xl mt-4 mb-2">
        <FormattedMessage id="contact" />
      </h2>
      <div className="flex flex-col text-6xl uppercase">
        <Link onClick={handleContactClick} className="hover:text-[#c5221f]" href={`mailto:${CONSTANTS.EMAIL}`}>
          Email
        </Link>
        <Link onClick={handleContactClick} className="hover:text-[#0e76a8]" href={CONSTANTS.LINKEDIN}>
          Linkedin
        </Link>
        <Link onClick={handleContactClick} className="hover:text-[#128c7e]" href={CONSTANTS.WHATSAPP}>
          Whatsapp
        </Link>
      </div>
    </section>
  );
}
