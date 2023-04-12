import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import skillstyle from "./Skills/Skills.module.css";
import { Text } from "@chakra-ui/react";

const boxVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      stiffness: 300,
      duration: 1,
      delay: 0,
    },
  },
  hidden: { opacity: 0, x: "-50vw" },
};

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
      <motion.h2 variants={boxVariant} initial="hidden" animate={control}>
        <Text textAlign={textPosition}>{title}</Text>
      </motion.h2>
    </div>
  );
};

export default AnimateHeading;
