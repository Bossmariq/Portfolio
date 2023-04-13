import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { send } from "emailjs-com";

const ContactForm = () => {
  const toast = useToast();
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      yourmessage: "",
    },
  });
  const onSubmit = (data) => {
    send("service_s4y43p8", "contact_form", data, "DZpIG77L8e3NnuBN8")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    toast({
      title: "Message Sent.",
      description: "We've sent your message.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    reset();
  };

  const boxShadow = useColorModeValue(
    "0px 0px 8px rgb(255, 255, 255)",
    "0 0 10px 0 rgba(0,0,0,0.45)"
  );
  const color = useColorModeValue("primary.300", "primary.700");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        flexDir="column"
        gap={5}
        w={["100%", "100%", "sm", "lg"]}
        color={color}
      >
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <FormControl w="full">
              <FormLabel>Your Name</FormLabel>
              <Input
                boxShadow={boxShadow}
                outline="none"
                placeholder="Enter name"
                {...field}
                {...register("firstName", {
                  required: "Name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Name is not valid.",
                  },
                })}
              />
              {errors.firstName && (
                <p className="alert" role="alert">
                  {errors.firstName.message}
                </p>
              )}
            </FormControl>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="Enter Email"
                boxShadow={boxShadow}
                {...field}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <p className="alert" role="alert">
                  {errors.email.message}
                </p>
              )}
            </FormControl>
          )}
        />
        <Controller
          name="yourmessage"
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel>Your Message</FormLabel>
              <Textarea
                boxShadow={boxShadow}
                placeholder="Hey there! Send a message"
                {...field}
                {...register("yourmessage", {
                  required: "Type in a message",
                  minLength: {
                    value: 50,
                    message: "Message not long enough",
                  },
                })}
              />
              {errors.yourmessage && (
                <p className="alert" role="alert">
                  {errors.yourmessage.message}
                </p>
              )}
            </FormControl>
          )}
        />
        <motion.button
          style={{ width: "30%", marginLeft: "70%", marginTop: "10px" }}
          whileHover={{
            translateY: "-5px",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          type="submit"
        >
          <Button
            as="a"
            colorScheme="secondary"
            size="md"
            width="100%"
            color={color}
          >
            Submit
          </Button>
        </motion.button>
      </Flex>
    </form>
  );
};

export default ContactForm;
