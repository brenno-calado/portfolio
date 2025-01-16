import Image from "next/image";
import { Permanent_Marker } from "next/font/google";
import { FormattedMessage } from "react-intl";

const geo = Permanent_Marker({ 
  weight: '400',
  subsets: ['latin']
});

export function Welcome() {
  const FIRST_YEAR_EXPERIENCE = '2021-01-02';
  const yearsOfExperience = new Date().getFullYear() - new Date(FIRST_YEAR_EXPERIENCE).getFullYear();

  return (
    <section className="flex md:justify-between gap-10 md:gap-20 flex-col md:flex-row md:h-screen h-auto items-end p-8">
      <div className="m-auto md:m-0">
        <h1 className="text-3xl"><FormattedMessage id="hello" /><span className={`${geo.className}`}><FormattedMessage id="name" /></span></h1>
        <span>
          <FormattedMessage id="sub-headline" values={{ years: yearsOfExperience }} />
        </span>
      </div>
      <div className="w-auto">
        <Image className="rounded-full" alt="profile image" src="/profile.jpg" width={800} height={800}/>
      </div>
    </section>
  );
}
