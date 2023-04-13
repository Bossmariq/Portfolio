import Image from "next/image";
import {
  Box,
  Flex,
  Text,
  Icon,
  Divider,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const IndividualProject = ({
  img,
  title,
  icons,
  info,
  sitelink,
  direction,
}) => {
  const bg = useColorModeValue("secondary.700", "gray.200");
  const bgTextColor = useColorModeValue("gray.100", "gray.800");
  const iconsColor = useColorModeValue("primary.300", "primary.700");
  const infoColor = useColorModeValue("gray.300", "gray.700");
  return (
    <Box width="full" bg={bg} borderRadius={15} p={4}>
      <Flex gap={5} flexDir={direction}>
        <Box flex={3}>
          <Image alt={title} style={{ borderRadius: "15px" }} src={img} />
        </Box>
        <Box flex={2} py={2}>
          <Text color={bgTextColor} fontWeight="bold" fontSize="3xl">
            {title}
          </Text>
          <Divider bg="#000" my={4} />
          <Flex gap={3}>
            {icons.map((icon) => (
              <Icon
                key={icon}
                color={iconsColor}
                fontSize={["2xl", "3xl", "2xl"]}
                as={icon}
              />
            ))}
          </Flex>
          <Text color={infoColor} fontSize="md" my={5}>
            {info}
          </Text>
          <motion.button
            whileHover={{
              translateY: "-5px",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              as="a"
              href={sitelink}
              target="_blank"
              colorScheme="secondary"
              size="md"
              color={useColorModeValue("primary.300", "primary.700")}
            >
              <Icon mr={1} as={FiExternalLink} />
              Live
            </Button>
          </motion.button>
        </Box>
      </Flex>
    </Box>
  );
};

export default IndividualProject;
