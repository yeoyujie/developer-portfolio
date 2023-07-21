"use client";

import { Box, List, ListItem, Typography } from "@mui/material";
import WelcomeSection from "@/components/WelcomeSection";
import "./module.css";
import Head from "next/head";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { courses } from "@/data/courses";

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      {/* <WelcomeSection /> */}
      <section className="module-section">
        <div className="left">Courses Taken</div>
        <div className="right">
          {courses.map((course) => (
            <div key={course.code} className="title">
              <h1>
                {course.code}
                {/* <br />
                {course.name} */}
              </h1>
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
