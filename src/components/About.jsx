import React from "react";

const aboutItems = [
  {
    label: "Freelance Projects done",
    number: 5,
  },
  {
    label: "Months of experience",
    number: 6,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[80ch]">
            Welcome! I'm <b>Saad Khan</b>, a professional Front-End/React.js
            Developer with a passion for building visually stunning and highly
            functional websites. With expertise in HTML, CSS, JavaScript,
            React.js, Next.js, and tools like Figma and Bootstrap, I specialize
            in crafting seamless user experiences and modern web applications
            that combine creativity with cutting-edge technology. <br />
            <br /> From interactive animations using GSAP to responsive designs
            with TailwindCSS, I bring your ideas to life with precision and
            innovation. With 6 months of freelancing experience at BlueBanana
            Dev Agency in Lahore, I've collaborated on projects that blend
            functionality with style, always staying ahead with trending
            frameworks like Redux and Material-UI. <br /> <br />
            Let’s create something amazing together—reach out today, and let’s
            turn your vision into a digital masterpiece!
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/images/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
