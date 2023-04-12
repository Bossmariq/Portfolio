import { Box, Container, Text, Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import TypingAnimator from "react-typing-animator";

const HomePage = () => {
  const textArray = [
    "FrontEnd Developer",
    "Designer",
    "Aspiring FullStack Developer",
    "Dental Technologist",
    "Teacher",
  ];
  return (
    <Box
      display="flex"
      alignItems="center"
      as="section"
      bg="secondary.800"
      minH="100vh"
      px="4"
    >
      <Container maxW="5xl" color="primary.300">
        <Text fontSize="2xl">Hello! 👋 My name is</Text>
        <Text
          as="h2"
          fontSize={{ base: "5xl", md: "7xl" }}
          fontWeight="extrabold"
          color="#fff"
        >
          Victor Uzoma
        </Text>
        <TypingAnimator
          textArray={textArray}
          cursorColor="#333"
          textColor="rgba(215, 162, 116)"
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
          download="My_Resume"
          target="_blank"
          href="@/public/workCV.pdf"
          size="lg"
        >
          Resume
        </Button>
      </Container>
    </Box>
  );
};

export default HomePage;
