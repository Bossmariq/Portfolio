import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import skillstyle from "./Skills/Skills.module.css";
import { Text } from "@chakra-ui/react";
import { boxVariant1 } from "./Variants";

const AnimateHeading = ({ title, textPosition }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className={skillstyle.content} ref={ref}>
      <motion.h2 variants={boxVariant1} initial="hidden" animate={control}>
        <Text textAlign={textPosition}>{title}</Text>
      </motion.h2>
    </div>
  );
};

export default AnimateHeading;
