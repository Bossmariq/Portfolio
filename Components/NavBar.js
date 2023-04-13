import { useState } from "react";
import {
  Flex,
  Spacer,
  Box,
  Container,
  IconButton,
  Button,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { BsCodeSlash } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import navStyles from "./NavBar.module.css";

const items = ["Home", "About", "Skills", "Projects", "Contact"];
const NavBar = () => {
  const [display, changeDisplay] = useState("none");
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("secondary.900", "gray.50");
  const color = useColorModeValue("primary.100", "primary.900");
  return (
    <Box
      className={navStyles.navbar}
      boxShadow="xl"
      as="nav"
      w="100%"
      zIndex={2}
      position="fixed"
      bg={bg}
      color={color}
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
              alignItems="center"
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
              <IconButton
                icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
                colorScheme="primary.300"
                fontSize="xl"
                onClick={toggleColorMode}
              ></IconButton>
            </Flex>
          </Box>
          <IconButton
            colorScheme={useColorModeValue("primary.700", "secondary.900")}
            aria-label="mobile menu"
            icon={
              <HamburgerIcon
                color={useColorModeValue("primary.100", "secondary.900")}
                fontSize="3xl"
              />
            }
            onClick={() => changeDisplay("flex")}
            display={["flex", "flex", "none", "none"]}
          />
          <IconButton
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            colorScheme="primary.300"
            fontSize="xl"
            onClick={toggleColorMode}
            display={["flex", "flex", "none", "none"]}
          ></IconButton>
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
