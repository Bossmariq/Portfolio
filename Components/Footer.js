import { Box, Container, Text, Icon } from "@chakra-ui/react";
import { BsCodeSlash } from "react-icons/bs";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <Box
      bg="secondary.900"
      minH="15vh"
      px="4"
      as="section"
      display="flex"
      alignItems="center"
    >
      <Container maxW="5xl" color="secondary.200">
        <Icon color="primary.300" as={BsCodeSlash} />
        <Text>&#169; {year} - Made with love by Victor Uzoma</Text>
      </Container>
    </Box>
  );
};

export default Footer;
