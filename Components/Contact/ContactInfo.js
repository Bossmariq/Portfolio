import { Flex, Icon, Text } from "@chakra-ui/react";

const ContactInfo = ({ title, icon }) => {
  return (
    <Flex>
      <Flex alignItems="center" fontSize="2xl" gap={2}>
        <Icon color="primary.300" as={icon} />
        <Text color="gray.100">{title}</Text>
      </Flex>
    </Flex>
  );
};

export default ContactInfo;
