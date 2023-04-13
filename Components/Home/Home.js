import {
  Box,
  Container,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxVariant2 } from "../Variants";
import TypingAnimator from "react-typing-animator";

const HomePage = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const textArray = [
    "FrontEnd Developer",
    "Designer",
    "Dental Technologist",
    "Teacher",
  ];
  const bg = useColorModeValue("secondary.800", "gray.50");
  const color = useColorModeValue("primary.300", "primary.900");
  return (
    <Box
      display="flex"
      alignItems="center"
      as="section"
      bg={bg}
      minH="100vh"
      px="4"
    >
      <Container maxW="5xl" color={color} ref={ref}>
        <motion.div variants={boxVariant2} initial="hidden" animate={control}>
          <Text fontSize="2xl">Hello! 👋 My name is</Text>
          <Text
            as="h2"
            fontSize={{ base: "5xl", md: "7xl" }}
            fontWeight="extrabold"
            color={useColorModeValue("#fff", "primary.700")}
          >
            Victor Uzoma
          </Text>
          <TypingAnimator
            textArray={textArray}
            cursorColor="#000"
            textColor={useColorModeValue("rgba(215, 162, 116)", "#000")}
            fontSize="1.5rem"
            typingSpeed={60}
            delaySpeed={1000}
            height={"40px"}
            backspace
          />
          <Text as="p" mt={4} animate={{ x: 100 }}>
            I design and build websites that looks good and work well
          </Text>
          <Button
            mt={7}
            rightIcon={<DownloadIcon />}
            colorScheme="secondary"
            as="a"
            download="Victor_Uzoma's_CV"
            target="_blank"
            href="/workCV.pdf"
            size="lg"
          >
            Resume
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HomePage;
