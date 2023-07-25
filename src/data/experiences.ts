import { Experience } from "@/types";
import cyberGirlImg from "@/assets/gif/cybergirl.gif";
import cyberPunkImg from "@/assets/gif/cyberpunk.gif";
import sciFiImg from "@/assets/gif/scifi.gif";

export const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "JTC",
    description: [
      `Developed an interactive website using React, GSAP, and Magic Scroll, featuring a first-person POV video that plays as the user scrolls, creating an immersive and engaging experience. Implemented the website using web development best practices such as responsive design, accessibility, performance optimization, and security.`,
      `Abstracted the first-person POV website into a reusable template for internal use, allowing other departments to leverage it for educational, inspection, or other purposes.`,
      `Designed and implemented an asset management software using React, Firebase, and other APIs to track the department’s physical stock as a side project, which was well-received by the department and is currently being used to manage the department’s assets.`,
      `Automated data analysis and processing through the development of scripts using Python, Pandas, and VBA.`,
      `Developed a custom form using Google Apps Script, HTML, CSS, and JavaScript, with server-side form processing and integration with Google Sheets. Implemented custom error handling and advanced validation rules to check against a list of allowed inputs.`,
    ],
    backgroundImg: cyberGirlImg,
  },
  {
    title: "DevSecOps Intern",
    company: "DSTA",
    description: [
      `Developed an automated container using Docker that verified and signed images to authenticate them, enabling secure and reliable downloads in an air-gapped environment with no internet connection.`,
      `Acquired proficiency in RHEL, Docker and batch scripting for creating and deploying containerised applications in a high-security setting.`,
      `Designed and implemented the backend logic and APIs for an offline image repository using Java Spring Boot, following best practices and standards for security and performance.`,
      `Coordinated effectively with the frontend team to ensure seamless integration and compatibility of the user interface and the backend functionality and optimised overall workflow efficiency.`,
    ],
    backgroundImg: sciFiImg,
  },
];
