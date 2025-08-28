import { timeToGradient } from "@/utils/sky";
import { Permanent_Marker } from "next/font/google";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

const geo = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

export function Welcome() {
  const FIRST_YEAR_EXPERIENCE = "2021-01-02";
  const yearsOfExperience = new Date().getFullYear() - new Date(FIRST_YEAR_EXPERIENCE).getFullYear();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  const timestamp = Date.now();

  return (
    <section
      className="flex md:justify-between gap-10 md:gap-20 flex-col md:flex-row md:h-screen h-auto items-end p-8"
      style={{
        backgroundImage: timeToGradient(timestamp).gradient,
      }}
    >
      <div className="m-auto md:m-0">
        <h1 className="text-3xl">
          <FormattedMessage id="hello" />
          <span className={`${geo.className} block`}>
            <FormattedMessage id="name" />
          </span>
        </h1>
        <span>
          <FormattedMessage id="sub-headline" values={{ years: yearsOfExperience }} />
        </span>
      </div>
      <div className="flex flex-col w-auto">
        <time>
          {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds} {timezone}
        </time>
        <Image className="rounded-full" alt="profile image" src="/profile.jpg" width={600} height={600} />
      </div>
    </section>
  );
}
