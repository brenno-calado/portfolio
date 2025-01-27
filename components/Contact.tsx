import Link from "next/link";
import { FormattedMessage } from "react-intl";

export function Contact() {
  return (
    <section className="p-8">
      <h2 className="text-2xl mt-4 mb-2">
        <FormattedMessage id="contact" />
      </h2>
      <div className="flex flex-col text-6xl uppercase">
        <Link className="hover:text-[#c5221f]" href="mailto:brenno.calado@gmail.com">Email</Link>
        <Link className="hover:text-[#0e76a8]" href="https://www.linkedin.com/in/brenno-calado/">Linkedin</Link>
        <Link className="hover:text-[#128c7e]" href="https://wa.me/5581992437721">Whatsapp</Link>
      </div>
    </section>
  );
}
