import "@/styles/fonts.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { IntlProvider } from "react-intl";

import { useAnalytics } from "@/libs/analytics";
import English from "../content/locales/en.json";
import Spanish from "../content/locales/es.json";
import Portuguese from "../content/locales/pt.json";

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split("-") : ["en"];
  const messages = useMemo(() => {
    switch (shortLocale) {
      case "pt":
        return Portuguese;
      case "en":
        return English;
      case "es":
        return Spanish;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
