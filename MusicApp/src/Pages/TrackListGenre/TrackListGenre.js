import React, {useEffect} from "react";
import {SafeAreaView, View, FlatList} from "react-native";
import styles from './TrackListGenre.style';
import PlayListUnit from "../../Components/PlayListUnit";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from "react-redux";
import PlayListTop from "../../Components/PlayListTop";
import useFetch from "../../Hooks/useFetch";
import {setGenreList} from "../../Management/Features/SongList/songListSlice";

const TrackListGenre = ({route, navigation}) => {
    const songIcon = <Icon name="music-note-eighth" size={40} 
    color="darkgray" />
    const {item} = route.params;
    const dispatch = useDispatch();

      const {response} = useFetch({
        url: `https://api.napster.com/v2.2/genres/${item.id}/tracks/top?apikey=NjgyZGQzNzUtZWU5Mi00ZGU1LWE4ZGItYjZmMWRiYjcwY2Jm&limit=15`
      });
    
    useEffect(() => {
      if (response !== null) {
        dispatch(setGenreList(response.tracks))
      }
      }, [response]);

    
    const songList = useSelector(state => state.songList.GenreList)
    return (
        <SafeAreaView>
            <PlayListTop
            name={item.name} />
            <View style={styles.songListView} >
            <FlatList
            data={songList}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>
             <PlayListUnit
             icon={songIcon}
             trackName={item.name}
             artistName={item.artistName}
             id={item.id} />}
            />
            </View>
        </SafeAreaView> 
    )
}

export default TrackListGenre;