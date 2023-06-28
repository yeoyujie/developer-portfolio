"use client";

import { Box, List, ListItem, Typography } from "@mui/material";
import WelcomeSection from "@/components/WelcomeSection";
import "./module.css";

export default function Experience() {
  return (
    <>
      <WelcomeSection />
      <Box className="exp-section">
        <h2>My Experiences</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
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
