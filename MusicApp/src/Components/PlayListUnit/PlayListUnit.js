import React from "react";
import {SafeAreaView, View, Text, Pressable} from "react-native";
import styles from './PlayListUnit.style'
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from "react-redux";
import {setLikedSong} from "../../Management/Features/SongList/songListSlice";
import {unlikeSong} from "../../Management/Features/SongList/songListSlice";


const PlayListUnit = ({icon, albumName, trackName, artistName, id}) => {
  const dispatch = useDispatch();
  const heart = <Icon style={styles.heartIcon} name="heart-outline" size={25} color="gray" /> 
  const heartLiked = <Icon style={styles.heartIconLiked} name="heart" size={25} color="#20b2aa" />
  const likedSongList = useSelector(state => state.songList.LikedSong)
  const theme = useSelector(state => state.theme.theme)

  const inLikedSongs = likedSongList.some(item => 
       item.idValue === id);
 
  const likeSong = () => {
  dispatch(setLikedSong({album: albumName, track: trackName, artist: artistName, idValue: id}));
  }
  
  const removeSong = () => {
  dispatch(unlikeSong(id));
  }
    return (
        <SafeAreaView>
            <View style={styles.rowDirection}>
            <View style={styles.iconView}>
              {icon}
            </View>
            <View>
            {albumName && <View>
                  <Text style={[styles.textAlbum, styles[`textAlbum${theme}`]]}>{albumName}</Text>
                </View> }
            {trackName && <View>
                  <Text style={[styles.textAlbum, styles[`textAlbum${theme}`]]}>{trackName}</Text>
                </View> }
                <View>
                   <Text style={[styles.textAlbum, styles[`textAlbum${theme}`]]}>{artistName}</Text>
                </View>
            </View>
            {inLikedSongs ?
            <Pressable onPress={removeSong} 
            style={styles.heartButton}>{heartLiked}</Pressable> :
             <Pressable
             onPress={likeSong}
             style={styles.heartButton}>{heart}</Pressable>}
            </View>
        </SafeAreaView>
    )
}

export default PlayListUnit;