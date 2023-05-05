import { Inter } from "next/font/google";
import { FormattedMessage } from "react-intl";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <h1>Brenno Calado Vieira de Melo Nascimento</h1>
      <span>
        <FormattedMessage id="welcome" />
      </span>
      <h2>
        <FormattedMessage id="background" />
      </h2>
      <h2>
        <FormattedMessage id="skills" />
      </h2>
      <h2>
        <FormattedMessage id="experience" />
      </h2>
      <h2>
        <FormattedMessage id="contact" />
      </h2>
    </main>
  );
}
