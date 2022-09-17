import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, Image, Button} from 'react-native';
import styles from './Settings.style';
import Buttons from '../../Components/Buttons';
import {useSelector} from 'react-redux';
import {firebase} from '../../../config';
import {logOut} from '../../Management/Features/User/userSlice'
import {useDispatch} from 'react-redux';

const Settings = ({navigation}) => {
  const userInfo = useSelector(state => state.user.user);
  const theme = useSelector(state => state.theme.theme);

    const [name, setName] = useState('')
    // useEffect(()=> {
    //     firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then((snapshot) => {
    //         if (snapshot.exists) {
    //             setName(snapshot.data())
    //         } else {
    //             console.log('user does not exist')
    //         }
    //     })
    // },[])
    const dispatch = useDispatch();
	const logout = () => {
		dispatch(logOut(null));
	}

  return (
    <SafeAreaView 
	style={[styles.container, styles[`container${theme}`]]}>
      <View>
        <View style={styles.profilePhotoView}>
          <Image
            source={require('../../Assets/atakan.jpg')}
            style={styles.profilePhoto}
          />
          <View style={styles.profileInfoCard}>
            <Text style={[styles.profileName, styles[`text${theme}`]]}>
			{/* {name.newUserName} */}
            </Text>

            <Text style={[styles.profileName, styles[`text${theme}`]]}>
			{userInfo?.mail} 
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <Buttons
            name="Theme Settings"
            task={() => navigation.navigate('ThemeSettings')}
          />
          <Buttons
            name="Edit Profile"
            task={() => navigation.navigate('EditProfile')}
          />
		  <View style={styles.logOutButton}>
          <Buttons
            name="Log out"
            task={logout}
          />
		  </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
