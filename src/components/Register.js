
import { Link } from 'react-router-dom';
import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';

function Register() {
  return (
    <Box  w='100%' p={4} color='white'>
      <VStack>

        <Link to="/"><Button  bg="blue">
          Home	</Button></Link>



        <Link to="/login"><Button  bg="blue">
          Login	</Button></Link>


      </VStack>


    </Box>

  );
}

export default Register;