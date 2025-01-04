import React from "react";
import Typical from "react-typical";
import { TypeAnimation } from "react-type-animation";
//Components
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.png"
                width={40}
                height={40}
                alt="Saad Khan portrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for Work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Saad Khan | <br />
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                " Front-End ", // initially rendered starting point
                1000,
                " React ",
                1000,
              ]}
              speed={20}
              style={{ overflowx: "hidden" }}
              repeat={Infinity}
            />
            <br />
            Developer
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />
            <ButtonOutline
              label="Scroll down"
              href="#about"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt="Henry Clark"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
