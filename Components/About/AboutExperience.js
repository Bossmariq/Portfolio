import CountUp, { useCountUp } from "react-countup";
import { Flex } from "@chakra-ui/react";
import styles from "./About.module.css";

const AboutExperience = () => {
  return (
    <Flex gap={["1", "10", "20"]} mt="8">
      <div>
        <p className={styles.count}>
          <CountUp
            end={3}
            enableScrollSpy
            duration="10"
            scrollSpyDelay="1000"
          />
          +
        </p>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <div>
        <p className={styles.count}>
          <CountUp
            end={23}
            enableScrollSpy
            duration="20"
            scrollSpyDelay="1000"
          />
          +
        </p>
        <p>PROJECTS DONE</p>
      </div>
    </Flex>
  );
};

export default AboutExperience;
