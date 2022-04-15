import { Link } from 'react-router-dom';
import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';

function Home() {
	return (


		<Box  w='100%' p={4} color='white'>
			<VStack>

				
				<Link to="/login"><Button  bg="blue">
					Login	</Button></Link>

				<Link to="/register"><Button  bg="blue">
					Register	</Button></Link>

					<Link to="/demo"><Button  bg="blue">
					Demo	</Button></Link>


			</VStack>


		</Box>


	);
}

export default Home;
