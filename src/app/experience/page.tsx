"use client";

import WelcomeSection from "@/components/WelcomeSection";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { courses } from "@/data/courses";
import "./module.css";

export default function Experience() {
  // useEffect(() => {
  //   const splitScroll = () => {
  //     const controller = new ScrollMagic.Controller();

  //     new ScrollMagic.Scene({
  //       duration: "200%",
  //       triggerElement: ".left",
  //       triggerHook: 0,
  //     })
  //       .setPin(".left")
  //       .addTo(controller);
  //   };
  //   splitScroll();
  // }, []);

  useEffect(() => {
    const splitScroll = () => {
      const controller = new ScrollMagic.Controller();

      new ScrollMagic.Scene({
        duration: "500%",
        triggerElement: ".left",
        triggerHook: 0,
      })
        .setPin(".left")
        .addTo(controller);

      courses.forEach((course, index) => {
        new ScrollMagic.Scene({
          duration: "100%",
          triggerElement: ".right",
          triggerHook: 0,
          offset: index * window.innerHeight,
        })
          .setClassToggle(".left", `course-${index}`)
          .addTo(controller);
      });
    };
    splitScroll();
  }, []);

  return (
    <>
      <WelcomeSection />
      <section className="module-section">
        {/* <div className="left">Courses Taken</div> */}
        <div className="left">
          {courses.map((course, index) => (
            <h1 className={`course-name course-${index}`}>{course.name}</h1>
          ))}
        </div>
        <div className="right">
          {courses.map((course) => (
            <div key={course.code} className="title">
              <h1>{course.code}</h1>
              <p className="description">{course.description}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="course-footer">
        <p>
          Taking these modules was a rewarding experience for me, and they
          helped me develop a lot of skills and knowledge in web development. I
          also did well in them and got good grades. If you want to learn more
          about these modules or need some help with them, I’m always ready to
          help. You can reach out to me anytime and I’ll be glad to assist you.{" "}
        </p>
      </footer>
    </>
  );
}
