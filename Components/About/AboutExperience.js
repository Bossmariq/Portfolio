import CountUp, { useCountUp } from "react-countup";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import styles from "./About.module.css";

const AboutExperience = () => {
  return (
    <Flex gap={["1", "10", "20"]} mt="8">
      <div>
        <Box
          color={useColorModeValue("primary.300", "primary.700")}
          className={styles.count}
        >
          <CountUp
            end={3}
            enableScrollSpy
            duration="10"
            scrollSpyDelay="1000"
          />
          +
        </Box>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <div>
        <Box
          color={useColorModeValue("primary.300", "primary.700")}
          className={styles.count}
        >
          <CountUp
            end={23}
            enableScrollSpy
            duration="20"
            scrollSpyDelay="1000"
          />
          +
        </Box>
        <p>PROJECTS DONE</p>
      </div>
    </Flex>
  );
};

export default AboutExperience;
