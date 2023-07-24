import { Hackathon } from "@/types";
import lifeHackImg from "@/assets/hackathons/lifehack.jpg";
import greyHatsCtfImg from "@/assets/hackathons/greyhatsctf.jpeg";
import brainHackImg from "@/assets/hackathons/brainhack.jpg";
import cddcImg from "@/assets/hackathons/cddc.jpg";

export const hackathons: Hackathon[] = [
  {
    name: "Lifehack 2023 - Finalist",
    backgroundImg: lifeHackImg,
    description: [
      `Built RaceSG, a race-meets-geocaching app that unlocks the hidden wonders of Singapore for locals and tourists alike, in response to the theme of “Re-defining the Post-Pandemic Traveling Landscape”.`,
      `Utilised React, Next.js, Firebase, Tailwind CSS, and SGID and Leaflet APIs to create a user-friendly and interactive app that showcases the cultural gems, breathtaking sights, and captivating stories of Singapore.`,
      `Led the backend development and database management using Firebase, and implemented authentication using SGID API. Also contributed to the ideation, documentation, tech architecture, and UI/UX design of the app.`,
      `Received positive feedback from the judges on the app’s value proposition, functionality, and design. Suggested areas of improvement include expanding the target user base and optimizing the app’s performance.`,
    ],
  },
  {
    name: "NUS Greyhats CTF 2023",
    backgroundImg: greyHatsCtfImg,
    description: [
      `Ranked among the top 20% of the teams out of hundreds of participants from different countries and backgrounds, demonstrating a high level of competence and perseverance in the field of cybersecurity.`,
      `Acquired valuable insights into the latest trends and techniques in information security, such as buffer overflow, format string vulnerability, RSA encryption, and steganography, by applying the knowledge I gained from CS2107 Introduction to Information Security course. Also developed a keen interest in exploring this field further and enhancing my knowledge and skills.`,
    ],
  },
  {
    name: "DSTA Brainhack CODE_EXP 2021 - Finalist",
    backgroundImg: brainHackImg,
    description: [
      `Built a mobile app using React Native, Firebase, and other technologies, as part of a team of four, in response to the theme of “Reimagining the Future of Singapore”.`,
      `Responsible for the frontend development and UI/UX design of the app, using React Native and Material UI.`,
      `Utilized Firebase, Google Cloud, Singapore Tourism Board and YouTube APIs to create a user-friendly and interactive app that showcases the cultural gems, breathtaking sights, and captivating stories of Singapore. Also contributed to the ideation, documentation, and presentation of the app.`,
      `Appreciated the constructive feedback from the judges on the app’s relevance, functionality, and design. Learned from the suggested areas of improvement, such as incorporating elements of AR/VR to enhance the user experience. Gained valuable insights on how to tackle hackathons better in the future and focus on the key points.`,
    ],
  },
  {
    name: "DSTA Brainhack CDDC 2021",
    backgroundImg: cddcImg,
    description: [
      `Took part in a Capture The Flag (CTF) competition organized by DSTA, as part of BrainHack 2021.`,
      `I attempted various tasks involving web, pwn, crypto, reverse engineering, and forensics domains and gained valuable insights into the field of cybersecurity. I also learned various Unix skills/commands that enhanced my proficiency in shell scripting and complemented my internship experience back then.`,
      `Although I did not make it to the finals, it served as my first CTF experience and motivated me to explore this field further and improve my knowledge and skills.`,
    ],
  },
];
