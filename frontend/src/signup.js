import './styles/SignUp.css';
import bg from './assets/SignUpBG.png';
import React, {useState} from 'react'
import NavBar from './components/NavBar';

import {Link} from 'react-router-dom';

import { FormControl, VStack, Text, FormLabel, Button, Input, Image, Flex } from '@chakra-ui/react';



function SignUp(props) {
  const [isSignUp, swapSignUpOption] = useState(true);
  const userData = useState( {
    email:"",
    password:"",
    passwordConfirm:""
  })

  return (
    <VStack className="SignUp">
      <Flex w="100vw" h="100vh">
        <Image className="signup-bg" src={bg}></Image>
        <Flex className="content-container">
          <Flex className="text-container">
            <Text> {isSignUp ? "SIGN UP" : "LOG IN"} </Text>
            <Text className="heading"> {isSignUp ? "Reclaim trust\nin your health." : "Welcome Back!"} </Text>
            <Text> Take control of your medical resources today. </Text>
          </Flex>
          <Flex className="input-container">
            {/* <FormControl> */}
              <Text fontSize="12px" className="input-label">EMAIL</Text>
              <Input fontFamily="Poppins"  w="300px" mb="10px" borderRadius="100px" className="input-field" name="email" type="text" value={userData.email} placeholder="Enter email address..."></Input>

              <Text fontSize="12px" className="input-label">PASSWORD</Text>
              <Input fontFamily="Poppins" w="300px"borderRadius="100px" mb="10px" className="input-field" name="email" type="text" value={userData.password} placeholder="Enter password..."></Input>

              {isSignUp && (
                <Flex flexDir="column" justifyContent="center" alignItems="center">
                  <Text fontSize="12px" className="input-label">RE-ENTER PASSWORD</Text>
                  <Input fontFamily="Poppins" w="300px" mb="10px" borderRadius="100px" className="input-field" name="email" type="text" value={userData.passwordConfirm} placeholder="Re-enter password..."></Input>
                </Flex>
              )}

              <Flex fontSize="12px" fontFamily="Poppins">
                {isSignUp ? "Already a member?" : "Don't have an account?"}&nbsp;
                <Text as="button" color="#3B9F88" fontWeight="700" onClick={()=>swapSignUpOption(!isSignUp)}> {isSignUp ? "Log In" : "Sign Up"}</Text></Flex>

              <Link to="/dashboard">
              <Button fontFamily="Poppins" borderRadius="100px" mt="20px" w="300px" colorScheme="teal" textAlign="center" bgColor="3B9F88">SUBMIT</Button>
              </Link>
            {/* </FormControl> */}
          </Flex>
        </Flex>
      </Flex>
    </VStack>
  );
}

export default SignUp;
