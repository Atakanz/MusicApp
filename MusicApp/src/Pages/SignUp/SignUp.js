import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './SignUp.style';
import LoginForm from '../../Components/LoginForm/LoginForm';
import {firebase} from '../../../config'
import { useSelector } from 'react-redux';

const SignUp = ({navigation}) => {
	
	const [newUserEmail, setNewUserEmail] = useState('');
	const [newUserPassword, setNewUserPassword] = useState('');
	const [newUserRePassword, setNewUserRePassword] = useState('');
	const [newUserName, setNewUserName] = useState('');
	const [newUserSurname, setNewUserSurname] = useState('');

	registerUser = async (email, password, firstName, lastName) => {
		await firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPassword)
		.then(()=> {firebase.firestore().collection('users')
		.doc(firebase.auth().currentUser.uid)
		.set({newUserName, newUserSurname, newUserEmail})}).catch((error)=>{alert(error.message)})
		.catch((error => {alert(error.message)}))}
	const theme = useSelector(state => state.theme.theme)
	
	return (
	<SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
	<LoginForm
	  isLogoExist={require('../../Assets/logo.png')}
	  holder1="E-mail"
	  holder2="Password"
	  holder3="Password again"
	  holder4="Name"
	  holder5="Surname"
	  name1="Sign Up"
	  value1={newUserEmail}
	  value2={newUserPassword}
	  value3={newUserRePassword}
	  value4={newUserName}
	  value5={newUserSurname}
	  emailFormTask={setNewUserEmail}
	  passwordFormTask={setNewUserPassword}
	  repasswordFormTask={setNewUserRePassword}
	  userNameFormTask={setNewUserName}
	  userSurnameFormTask={setNewUserSurname}
	  task1={()=> {registerUser();navigation.navigate("SignIn")}}
	  securityFalse={false}
	  securityTrue={true}
	/>
  </SafeAreaView>
);
}

export default SignUp;
