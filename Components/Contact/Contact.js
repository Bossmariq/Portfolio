import {
  Box,
  Container,
  Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import AboutSocials from "../About/AboutSocials";
import AnimateHeading from "../AnimateHeading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  const bg = useColorModeValue("secondary.800", "gray.50");
  const color = useColorModeValue("secondary.200", "secondary.800");
  return (
    <Box
      bg={bg}
      minH="100vh"
      px="4"
      as="section"
      display="flex"
      alignItems="center"
      pb={{ base: "5rem", md: "1px" }}
    >
      <Container maxW="5xl" color={color}>
        <AnimateHeading title="Contact Me" textPosition="center" />
        <Flex flexDir={["column-reverse", "column-reverse", "row"]}>
          <Flex gap={5} flexDir="column" mt={10}>
            <ContactInfo title="Port-Harcourt Nigeria" icon={MdLocationPin} />
            <ContactInfo title="onwuzurikevictorr@gmail.com" icon={MdEmail} />
            <ContactInfo title="(+234)806-958-4952" icon={MdPhone} />
            <AboutSocials />
          </Flex>
          <Spacer />
          <ContactForm flex={1} />
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
