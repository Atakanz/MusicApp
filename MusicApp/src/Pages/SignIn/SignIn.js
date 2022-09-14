import React, {useState} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import LoginForm from '../../Components/LoginForm/LoginForm'
import styles from './SignIn.style'
import {firebase} from '../../../config'
import {useDispatch, useSelector} from 'react-redux'
import {logIn} from '../../Management/Features/User/userSlice'

const SignIn = ({navigation}) => {
	const [userEmail, setUserEmail] = useState(null);
	const [userPassword, setUserPassword] = useState(null);
  const dispatch = useDispatch();

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    } catch (error){
      alert(error.message)
    }
  }
  const loginUserButton = () => {
    loginUser();
    navigation.navigate("BottomTab");
    dispatch(logIn({userEmail, userPassword}));
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
        task1={loginUserButton}
        task2={navigateSignUp}
        securityFalse={false}
        securityTrue={true}
        // password input
      />
    </SafeAreaView>
	)
};

export default SignIn;
