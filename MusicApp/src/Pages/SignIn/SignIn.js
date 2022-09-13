import React, {useState} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import LoginForm from '../../Components/LoginForm/LoginForm'
import styles from './SignIn.style'

const SignIn = ({navigation}) => {
	const [userEmail, setUserEmail] = useState(null);
	const [userPassword, setUserPassword] = useState(null);
	const [userName, setUserName] = useState(null);
  const signUpButton = () => {
    navigation.navigate("SignUp")
  }
  return (
    <SafeAreaView style={styles.container} >
      <LoginForm
        holder1="E-mail"
        holder2="Password"
        holder4="User name"
        name1="Sign In"
        name2="Sign Up"
        value1={userEmail}
        value2={userPassword}
        value4={userName}
        emailFormTask={value => setUserEmail(value)}
        passwordFormTask={value => setUserPassword(value)}
        userNameFormTask={value => setUserName(value)}
        task2={signUpButton}
        visibilityFalse={false}
        visibilityTrue={true}
        // password input
      />
    </SafeAreaView>
	)
};

export default SignIn;
