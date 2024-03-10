import React from "react";
import { Box, Button, Center, Container, Divider, Heading, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGoogle, FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="lg" py={{ base: "12", md: "24" }} px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Center>
            <Heading fontSize="3xl">Sign in to your account</Heading>
          </Center>
          <Box rounded={{ md: "lg" }} bg={useColorModeValue("white", "gray.700")} boxShadow={{ md: "base" }} p={{ base: "4", md: "8" }}>
            <Stack spacing="6">
              <Stack spacing="5">
                <Input placeholder="Enter your email" />
              </Stack>
              <Button variant="solid" colorScheme="blue">
                Sign in with Email
              </Button>
              <Center>
                <Divider />
                <Text px="3" color={useColorModeValue("gray.600", "gray.400")}>
                  or continue with
                </Text>
                <Divider />
              </Center>
              <Stack spacing="4">
                <Button leftIcon={<FaGoogle />} variant="outline" colorScheme="red">
                  Sign in with Google
                </Button>
                <Button leftIcon={<FaApple />} variant="outline" colorScheme="blackAlpha">
                  Sign in with Apple
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
