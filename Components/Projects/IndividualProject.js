import Image from "next/image";
import { Box, Flex, Text, Icon, Divider, Button } from "@chakra-ui/react";
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
  return (
    <Box width="full" bg="secondary.700" borderRadius={15} p={4}>
      <Flex gap={5} flexDir={direction}>
        <Box flex={3}>
          <Image alt={title} style={{ borderRadius: "15px" }} src={img} />
        </Box>
        <Box flex={2} py={2}>
          <Text color="gray.100" fontWeight="bold" fontSize="3xl">
            {title}
          </Text>
          <Divider my={4} />
          <Flex gap={3}>
            {icons.map((icon) => (
              <Icon
                key={icon}
                color="primary.300"
                fontSize={["2xl", "3xl", "2xl"]}
                as={icon}
              />
            ))}
          </Flex>
          <Text color="gray.300" fontSize="md" my={5}>
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
              color="primary.300"
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
