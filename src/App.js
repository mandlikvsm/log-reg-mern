
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
//import Login from './components/Login';
import Register from './components/Register';
import { Box,VStack } from '@chakra-ui/react';
import Demo from './components/Demo';


function App() {
  
    return (

      <Box  w='100%' p={4} color='white'>
        <VStack>

        <Router>
        
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/login' element={}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/demo' element={}></Route>

        </Routes>
      
    </Router>

        </VStack>
 
 
</Box>
     
    );
  }


export default App;