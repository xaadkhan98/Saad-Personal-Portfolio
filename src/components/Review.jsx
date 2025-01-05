import React from "react";

//Node Modules
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

//Register gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

//Components
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    imgSrc: "/images/people-1.jpg",
    company: "PixelForge",
  },
  {
    content:
      "Saad is an exceptional ReactJS developer! He built a sleek, responsive frontend for our product with remarkable attention to detail and functionality. Highly recommended!",
    name: "Henry Zhou",
    imgSrc: "/images/people-3.png",
    company: "Mech Solutions Ltd.",
  },
  {
    content:
      "Working with Saad was a fantastic experience! He developed the frontend for our Data Science Merchandising product with precision and creativity, delivering outstanding results.",
    name: "Usman Afridi",
    imgSrc: "/images/people-2.png",
    company: "JMM Technologies",
  },
  {
    content:
      "Saad's skills as a junior front-end developer are incredible! He designed and implemented engaging landing pages that were both visually appealing and highly functional.",
    name: "Hassan Amin",
    imgSrc: "/images/people-4.png",
    company: "BrightWeb",
  },
  {
    content:
      "Saad transformed my e-commerce portfolio website into a stunning, user-friendly platform. His expertise in ReactJS and frontend design is truly commendable!",
    name: "Abdullah Khan",
    imgSrc: "/images/people-5.jpg",
    company: "Bluebanana Creative Agency",
  },

  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Jonathan",
    imgSrc: "/images/people-6.jpg",
    company: "Skyline Digital",
  },
];
const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-1000",
    });
  });

  return (
    <section id="reviews" className="section overflow-hidden ">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What our Customers Say</h2>
        <div className="flex items-stretch gap-3  w-fit scrub-slide">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
