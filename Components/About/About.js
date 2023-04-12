import AboutInfo from "./AboutInfo";
import AnimateHeading from "../AnimateHeading";
import { Box, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";
import profilePic from "@/public/profile-pic.jpeg";
import styles from "./About.module.css";

const AboutPage = () => {
  return (
    <Box
      className={styles.aboutmepage}
      bg="secondary.800"
      minH="100vh"
      px="4"
      as="section"
      display="flex"
      alignItems="center"
    >
      <Container maxW="5xl" color="secondary.200">
        <AnimateHeading title="About Me" textPosition="left" />
        <Flex gap={20} flexDir={["column-reverse", "column-reverse", "row"]}>
          <AboutInfo />
          <div>
            <Image
              priority
              alt="my pics"
              width={900}
              height={900}
              src={profilePic}
            />
          </div>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutPage;
