import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    if (TRACKING_ID && process.env.NODE_ENV === "production") {
      ReactGA.initialize(TRACKING_ID);
      console.log("GA Initialized"); // Optional for debugging
    }
  }, []);

  useEffect(() => {
    if (TRACKING_ID && process.env.NODE_ENV === "production") {
      const handleRouteChange = (url: string) => {
        ReactGA.send({ hitType: "pageview", page: url });
      };

      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);
};
