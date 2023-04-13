import IndividualProject from "./IndividualProject";
import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { ProjectData } from "./ProjectsData";
import AnimateHeading from "../AnimateHeading";

const Projects = () => {
  const bg = useColorModeValue("secondary.900", "#fff");
  return (
    <Box
      bg={bg}
      minH="80vh"
      px="4"
      as="section"
      display="flex"
      alignItems="center"
      py={20}
    >
      <Container maxW="5xl">
        <AnimateHeading title="My Projects" textPosition="left" />
        <Flex flexDir="column" gap={20}>
          {ProjectData.map((data) => {
            const { img, title, icons, info, sitelink, direction } = data;
            return (
              <IndividualProject
                key={title}
                img={img}
                title={title}
                icons={icons}
                info={info}
                sitelink={sitelink}
                direction={direction}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
};

export default Projects;
