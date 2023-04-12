import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import AboutSocials from "../About/AboutSocials";
import AnimateHeading from "../AnimateHeading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <Box
      bg="secondary.800"
      minH="100vh"
      px="4"
      as="section"
      display="flex"
      alignItems="center"
      pb={{ base: "5rem", md: "1px" }}
    >
      <Container maxW="5xl" color="secondary.200">
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
