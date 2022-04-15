import { Link } from 'react-router-dom';
import React from 'react';
import { Box, Button, VStack, Flex, Avatar, Heading ,FormControl,InputGroup,InputLeftElement,Input,InputRightElement,FormHelperText} from '@chakra-ui/react';
//import { FaUserAlt, FaLock } from 'react-icons/fa';



function Register() {

//  const CFaUserAlt as FaUserAlt,
//const CFaLock as FaLock;
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="100%" p={4} color="white">
        <VStack>
          <Link to="/">
            <Button bg="blue">Home </Button>
          </Link>

          <Link to="/login">
            <Button bg="blue">Login </Button>
          </Link>

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
                    children={}
                  />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={}
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
        </VStack>
      </Box>
    </Flex>
  );
}

export default Register;
