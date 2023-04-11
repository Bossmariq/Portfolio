import { Flex, Icon } from "@chakra-ui/react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";
import styles from "./About.module.css";

const AboutSocials = () => {
  const socials = [
    { icon: BsGithub, link: "https://github.com/Bossmariq" },
    { icon: BsTwitter, link: "https://twitter.com/VictorRaymond_1" },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/victor-onwuzuruike-366832251/",
    },
  ];
  return (
    <Flex gap={5} alignItems="center" mt={10}>
      <div className={styles.iconSibling}></div>
      <Flex gap={4}>
        {socials.map((social, index) => {
          const { icon, link } = social;
          return (
            <motion.div
              key={index}
              whileHover={{
                translateY: "-5px",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className={styles.iconParent}
            >
              <Link as="a" href={link} target="_blank">
                <Icon as={icon} />
              </Link>
            </motion.div>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default AboutSocials;
