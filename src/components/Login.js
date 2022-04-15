import { Link } from 'react-router-dom';
import React from 'react';
import {
  Box,
  Button,
  VStack,
  Heading,
  Input,
  Flex,
  Avatar,
  FormControl,
  InputGroup,
  InputLeftElement,
  chakra,
  InputRightElement,
  FormHelperText,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
function Login() {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Link to="/">
          <Button bg="blue">Home </Button>
        </Link>
      </Box>
      <Avatar bg="orange" />
      <Heading color="black">Login Page</Heading>
      <Box minW={{ base: '90%', md: '468px' }}>
        <form>
          <VStack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <Box>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input type="password" placeholder="password" />
                  <InputRightElement width="4.5rem">
                    <Button bg="gray.300">Show</Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
            </Box>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export default Login;
