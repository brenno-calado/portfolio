import Link from "next/link";
import { FormattedMessage } from "react-intl";

export function Contact() {
  return (
    <section>
      <h2 className="font-bold text-2xl mt-4 mb-2">
        <FormattedMessage id="contact" />
      </h2>
      <Link href="mailto:brenno.calado@gmail.com">Email</Link>
      <Link href="https://www.linkedin.com/in/brenno-calado/" className="block">Linkedin</Link>
      <Link href="https://wa.me/5581992437721">Whatsapp</Link>
    </section>
  );
}
