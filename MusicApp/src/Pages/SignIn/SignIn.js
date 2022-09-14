import React, {useState} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import LoginForm from '../../Components/LoginForm/LoginForm'
import styles from './SignIn.style'
import {firebase} from '../../../config'

const SignIn = ({navigation}) => {
	const [userEmail, setUserEmail] = useState(null);
	const [userPassword, setUserPassword] = useState(null);
  
  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    } catch (error){
      alert(error.message)
    }
  }
  const navigateSignUp = () => {
    navigation.navigate("SignUp")
  }
  
  return (
    <SafeAreaView style={styles.container} >
      <LoginForm
        holder1="E-mail"
        holder2="Password"
        name1="Sign In"
        name2="Sign Up"
        value1={userEmail}
        value2={userPassword}
        emailFormTask={value => setUserEmail(value)}
        passwordFormTask={value => setUserPassword(value)}
        task1={()=>{loginUser();navigation.navigate("BottomTab")}}
        task2={navigateSignUp}
        visibilityFalse={false}
        visibilityTrue={true}
        // password input
      />
    </SafeAreaView>
	)
};

export default SignIn;
