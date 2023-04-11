import { useState } from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Container,
  IconButton,
  Button,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsCodeSlash } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import navStyles from "./NavBar.module.css";

const items = ["Home", "About", "Skills", "Projects", "Contact"];
const NavBar = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <Box
      className={navStyles.navbar}
      as="nav"
      w="100%"
      zIndex={2}
      position="fixed"
      bg="secondary.900"
      color="primary.100"
      p="4"
    >
      <Container maxW={["5xl", "5xl"]}>
        <Flex>
          <Flex
            gap={1}
            alignItems="center"
            color="primary.300"
            fontWeight="bold"
            fontSize="2xl"
          >
            <Icon as={BsCodeSlash} />
            <Link to="/">Victor</Link>
          </Flex>
          <Spacer />
          <Box flex="1">
            <Flex
              as="ul"
              justifyContent="space-evenly"
              alignItems="start"
              display={["none", "none", "flex", "flex"]}
            >
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    activeClass={navStyles.active}
                    to={`${item}section`}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                    className={navStyles.menu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </Flex>
          </Box>
          <IconButton
            colorScheme="primary.700"
            aria-label="mobile menu"
            icon={<HamburgerIcon color="primary.100" fontSize="3xl" />}
            onClick={() => changeDisplay("flex")}
            display={["flex", "flex", "none", "none"]}
          />
        </Flex>
        <Flex
          w="100vw"
          display={display}
          bgColor="primary.200"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end">
            <IconButton
              colorScheme="primary.700"
              mt={2}
              mr={5}
              aria-label="Open Menu"
              icon={<CloseIcon fontSize="2xl" color="secondary.500" />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>

          <Flex flexDir="column" align="center">
            {items.map((item) => (
              <Link
                activeClass="active"
                to={`${item}section`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={navStyles.menu}
                key={item}
              >
                <Button
                  color="secondary.500"
                  colorScheme="transparent"
                  onClick={() => changeDisplay("none")}
                  aria-label={item}
                  my={5}
                  w="100%"
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
