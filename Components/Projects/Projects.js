import IndividualProject from "./IndividualProject";
import { Box, Container, Flex } from "@chakra-ui/react";
import projectStyles from "./Project.module.css";
import { ProjectData } from "./ProjectsData";
import "aos/dist/aos.css";

const Projects = () => {
  return (
    <Box
      className={projectStyles.projects}
      bg="secondary.900"
      minH="80vh"
      px="4"
      as="section"
      display="flex"
      alignItems="center"
      py={20}
    >
      <Container maxW="5xl">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h2>My Projects</h2>
        </div>
        <Flex flexDir="column" gap={20}>
          {ProjectData.map((data) => {
            const { img, title, icons, info, sitelink, direction } = data;
            return (
              <IndividualProject
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
