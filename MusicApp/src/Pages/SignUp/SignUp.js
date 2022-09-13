import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './SignUp.style';
import LoginForm from '../../Components/LoginForm/LoginForm';

const SignUp = ({navigation}) => {
	const signUpTask = () => {
		navigation.navigate("SignIn")
	}
	const [newUserEmail, setNewUserEmail] = useState('');
	const [newUserPassword, setNewUserPassword] = useState('');
	const [newUserRePassword, setNewUserRePassword] = useState('');
	const [newUserName, setNewUserName] = useState('');
	return (
	<SafeAreaView style={styles.container}>
	<LoginForm
	  // logo is shown only loginpages not editing page
	  holder1="E-mail"
	  holder2="Password"
	  holder3="Password again"
	  holder4="User name"
	  name1="Sign Up"
	  value1={newUserEmail}
	  value2={newUserPassword}
	  value3={newUserRePassword}
	  value4={newUserName}
	  emailFormTask={setNewUserEmail}
	  passwordFormTask={setNewUserPassword}
	  repasswordFormTask={setNewUserRePassword}
	  userNameFormTask={setNewUserName}
	  task1={signUpTask}
	  visibilityFalse={false}
	  visibilityTrue={true}
	/>
  </SafeAreaView>
);
}

export default SignUp;
