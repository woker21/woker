import Image from "next/image";
import { Spotlight } from "./components/ui/Spotlight";
import { cn } from "./utils/cn";




export default function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />


      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Woker Here. <br /> Front-end Programmer
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          I am a web programmer with experience in multiple technologies
          front-end (ReactJS, Angular)
          I am passionate about creating engaging user experiences
          and intuitive online, and I am committed to the
          development of high-quality websites that satisfy
          the needs of our clients. With an attention
          meticulous detail and a focus on code efficiency,
          I am always looking for new ways to improve
          quality and speed of our development.
        </p>
      </div>
    </div>
  );
}