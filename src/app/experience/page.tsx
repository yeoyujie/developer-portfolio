"use client";

import { useEffect } from "react";
import FlexHoverSlider from "@/components/FlexHoverSlider";
import { experiences, hackathons, courses } from "@/data";
import "./module.css";

export default function Experience() {
  useEffect(() => {
    // Check if the window object is available before calling the splitScroll function.
    // This is necessary because the ScrollMagic library is a client-side library that relies on the window object,
    // which is not available during server-side rendering or prerendering.
    const splitScroll = async () => {
      if (typeof window !== undefined) {
        const ScrollMagic = (await import("scrollmagic")).default;
        const controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
          duration: "500%",
          triggerElement: ".left",
          triggerHook: 0,
        })
          .setPin(".left")
          .addTo(controller);

        new ScrollMagic.Scene({
          duration: "100%",
          triggerElement: ".left",
          triggerHook: 1,
        })
          .setClassToggle(".left", `course-0`)
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
      }
    };
    splitScroll();
  }, []);

  return (
    <>
      <header>
        <h1>Experience</h1>
      </header>
      <section className="work-experience">
        {experiences.map((experience) => (
          <div key={experience.title} className="">
            <h1>{experience.title}</h1>
            <h3>{experience.company}</h3>
            <p className="work-description">{experience.description}</p>
          </div>
        ))}
      </section>
      <FlexHoverSlider items={hackathons} />
      <header>
        <div className="module-header">
          <h1>Courses Taken</h1>
          <p>
            Here are some of the courses I took and the skills I learned from
            them.
          </p>
        </div>
      </header>
      <section className="module-section">
        <div className="left">
          {courses.map((course, index) => (
            <h1 className={`course-name course-${index}`}>{course.name}</h1>
          ))}
        </div>
        <div className="right">
          {courses.map((course) => (
            <div key={course.code} className="title">
              <h1>{course.code}</h1>
              <p className="course-description">{course.description}</p>
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
