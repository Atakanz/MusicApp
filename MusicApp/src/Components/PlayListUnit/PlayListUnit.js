import React from "react";
import {SafeAreaView, View, Text} from "react-native";
import styles from './PlayListUnit.style'
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {useDispatch} from "react-redux";
import {setLikedSong} from "../../Management/Features/SongList/songListSlice";
import { useState } from "react";

const PlayListUnit = ({icon, albumName, trackName, artistName}) => {
  const dispatch = useDispatch();
  const [likedSituation, setLikedSituation] = useState(false);
  const likeSong = () => {
  // dispatch(setLikedSong({albumName: albumName, trackName: trackName, artistName: artistName}));
  setLikedSituation(true);
  }
  
  const heart = <Icon.Button style={styles.heartIcon} name="heart-outline" size={25} color="black" onPress={likeSong} /> 
  const heartLiked = <Icon.Button style={styles.heartIconLiked} name="heart-outline" size={25} color="#20b2aa" /> 
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.rowDirection}>
            <View style={styles.iconView}>
              {icon}
            </View>
            <View>
            {albumName && <View>
                  <Text style={styles.textAlbum}>{albumName}</Text>
                </View> } 
            {trackName && <View>
                  <Text style={styles.textAlbum}>{trackName}</Text>
                </View> }   
                <View>
                   <Text style={styles.textAlbum}>{artistName}</Text>
                </View>
            </View>
            {!likedSituation ? <View style={styles.heartButton}>{heart}</View> : <View style={styles.heartButton}>{heartLiked}</View>}
            </View>
        </SafeAreaView>
    )
}

export default PlayListUnit;