import { Icon, Flex, Box, useColorModeValue } from "@chakra-ui/react";

const SkillIconCard = ({ name }) => {
  return (
    <Box
      bg={useColorModeValue("secondary.600", "gray.100")}
      boxShadow="lg"
      borderRadius="2xl"
      p={[4, 6, 8]}
    >
      <Flex alignItems="center" justifyContent="center">
        <Icon
          color={useColorModeValue("primary.300", "primary.700")}
          fontSize={["5xl", "5xl", "7xl"]}
          as={name}
        ></Icon>
      </Flex>
    </Box>
  );
};

export default SkillIconCard;
