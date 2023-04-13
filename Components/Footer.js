import {
  Box,
  Container,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsCodeSlash } from "react-icons/bs";

const year = new Date().getFullYear();

const Footer = () => {
  const bg = useColorModeValue("secondary.900", "gray.200");
  return (
    <Box
      bg={bg}
      minH="15vh"
      px="4"
      as="section"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="5xl"
        color={useColorModeValue("secondary.200", "secondary.500")}
      >
        <Icon
          color={useColorModeValue("primary.300", "primary.700")}
          as={BsCodeSlash}
        />
        <Text>&#169; {year} - Made with love by Victor Uzoma</Text>
      </Container>
    </Box>
  );
};

export default Footer;
