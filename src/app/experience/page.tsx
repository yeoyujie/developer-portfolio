"use client";

import { Box, List, ListItem, Typography } from "@mui/material";
import WelcomeSection from "@/components/WelcomeSection";
import "./module.css";
import Head from "next/head";

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <WelcomeSection />
      <Box className="exp-section">
        <h2>My Experiences</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
        <List>
          <ListItem>
            <Typography variant="h3">Apple</Typography>
            <Typography variant="body1">
              - Developed and maintained several websites for clients using
              WordPress, Bootstrap, jQuery and PHP. <br />
              - Implemented responsive design, SEO best practices, accessibility
              features and performance optimization. <br />
            </Typography>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
