import React, {useEffect, useState} from "react";
import {SafeAreaView, View, Text, FlatList, Image} from "react-native";
import styles from './TrackListPlayList.style';
import PlayListUnit from "../../Components/PlayListUnit";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from "react-redux";
import PlayListTop from "../../Components/PlayListTop";
import useFetch from "../../Components/Hooks/useFetch";
import {setPlayList} from "../../Management/Features/SongList/songListSlice";
import axios from "axios";

const TrackListPlaylist = ({route, navigation}) => {
    const songIcon = <Icon name="music-note-eighth" size={40} 
    color="darkgray" />
    const {item} = route.params;
    const dispatch = useDispatch();


      const {response} = useFetch({
        url: `https://api.napster.com/v2.2/playlists/${item.id}/tracks?apikey=NjgyZGQzNzUtZWU5Mi00ZGU1LWE4ZGItYjZmMWRiYjcwY2Jm&limit=15`
      });

    
    useEffect(() => {
      if (response !== null) {
       dispatch(setPlayList(response.tracks))
      }
      }, [response]);
    const {images} = item;
    const songList = useSelector(state => state.songList.PlayList)
    return (
        <SafeAreaView>
            <PlayListTop
            imageUrl={images[0].url}
            name={item.name}
            description={item.description} />
            <View style={styles.songListView} >
            <FlatList
            style={styles.songList}
            data={songList}
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

export default TrackListPlaylist;