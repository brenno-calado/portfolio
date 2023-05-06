import {
  Background,
  Contact,
  Experience,
  Projects,
  Skills,
  Welcome,
} from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Welcome />
      <Background />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
