import React, {useEffect, useState} from "react";
import {SafeAreaView, View, Text, FlatList, Image} from "react-native";
import styles from './PlayList.style';
import PlayListUnit from "../../Components/PlayListUnit";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from "react-redux";
import PlayListTop from "../../Components/PlayListTop";
import {setSongList} from "../../Management/Features/SongList/songListSlice";
import axios from "axios";

const PlayList = ({route, navigation}) => {
    const songIcon = <Icon name="music-note-eighth" size={40} 
    color="darkgray" />
    const {id, name, images, description} = route.params;
    const [songsInPlayList, setSongsInPlayList] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
         axios.get(
        `https://api.napster.com/v2.2/playlists/${id}/tracks?apikey=NjgyZGQzNzUtZWU5Mi00ZGU1LWE4ZGItYjZmMWRiYjcwY2Jm&limit=25`
          )
          .then(response => {
            setSongsInPlayList(response.data.tracks);
          });
      }, []);

    
    // console.log(url);
    const songList = useSelector(state => state.songList.songList)
    return (
        <SafeAreaView>
            <PlayListTop
            imageUrl={images[0].url}
            name={name}
            description={description} />
            <View style={styles.songListView} >
            <FlatList
            data={songsInPlayList}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>
             <PlayListUnit
             icon={songIcon}
             trackName={item.name}
             artistName={item.artistName} />}
            />
            </View>
        </SafeAreaView> 
    )
}

export default PlayList;