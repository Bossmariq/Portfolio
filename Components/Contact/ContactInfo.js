import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";

const ContactInfo = ({ title, icon }) => {
  return (
    <Flex>
      <Flex alignItems="center" fontSize={{ base: "xl", md: "2xl" }} gap={2}>
        <Icon
          color={useColorModeValue("primary.300", "primary.700")}
          as={icon}
        />
        <Text color={useColorModeValue("gray.100", "primary.8s00")}>
          {title}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ContactInfo;
