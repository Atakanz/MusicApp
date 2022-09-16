import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import PlayListUnit from '../../Components/PlayListUnit';
import {useSelector} from 'react-redux';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './LikedSongs.style';

const LikedSongs = () => {
	const likedSongs = useSelector(state=>state.songList.LikedSong)
	const songIcon = <Icon name="music-note-eighth" size={40} color="darkgray" />


	return (
	<SafeAreaView>
		<Text style={styles.headerText}>Your playlist</Text>
		<FlatList 
		data = {likedSongs}
		renderItem = {({item}) =>
		 <PlayListUnit
		 icon={songIcon}
         artistName={item.artist}
         trackName={item.track}
		 id={item.idValue} /> } />
	</SafeAreaView>
	)
};

export default LikedSongs;
