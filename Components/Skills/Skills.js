import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import SkillIconCard from "./SkillIconCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiChakraui,
  SiFramer,
  SiGit,
} from "react-icons/si";
import { FaBootstrap, FaReact } from "react-icons/fa";
import {
  DiHtml5,
  DiCss3,
  DiMaterializecss,
  DiJavascript1,
} from "react-icons/di";
import AnimateHeading from "../AnimateHeading";
import skillstyles from "./Skills.module.css";

const mySkils = [
  DiHtml5,
  DiCss3,
  FaBootstrap,
  SiTailwindcss,
  DiMaterializecss,
  DiJavascript1,
  FaReact,
  SiNextdotjs,
  SiChakraui,
  SiFramer,
  SiGit,
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const Skills = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("show");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const bg = useColorModeValue("secondary.800", "gray.50");
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
        <AnimateHeading title="My Skills" textPosition="center" />
        <motion.div
          className={skillstyles.skillcards}
          ref={ref}
          variants={container}
          initial="hidden"
          animate={control}
        >
          {mySkils.map((skill) => (
            <motion.div key={skill} variants={item}>
              <SkillIconCard name={skill} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
