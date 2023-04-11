import { Icon, Flex, Box } from "@chakra-ui/react";

const SkillIconCard = ({ name }) => {
  return (
    <Box bg="secondary.600" borderRadius="2xl" p={[4, 6, 8]}>
      <Flex alignItems="center" justifyContent="center">
        <Icon
          color="primary.300"
          fontSize={["5xl", "5xl", "7xl"]}
          as={name}
        ></Icon>
      </Flex>
    </Box>
  );
};

export default SkillIconCard;
