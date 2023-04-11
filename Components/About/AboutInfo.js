import { Flex } from "@chakra-ui/react";
import AboutExperience from "./AboutExperience";
import AboutSocials from "./AboutSocials";

const AboutInfo = () => {
  return (
    <Flex flexDirection="column" gap={5} fontSize="lg" letterSpacing="wider">
      <p>
        Hi, I'm Victor Uzoma, a self-taught passionate FrontEnd developer from
        Nigeria
      </p>
      <p>
        I have passion for building sleek and modern web applications using
        React and Next, i also love learning new Technologies. I have a sharp
        eye for UI/UX design, and i can help bring your web projects to life.
      </p>
      <p>
        I first got interested in web development in 2020 and since then, I've
        been able to acquire and improve on my skills by building projects
        learning new and updated technologies.
      </p>
      <p>
        Also a Dental Technician, and while i'm not coding, i enjoy trying new
        meals, as well as seeing new series
      </p>
      <AboutSocials />
      <AboutExperience />
    </Flex>
  );
};

export default AboutInfo;
