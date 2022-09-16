import React from "react";
import {SafeAreaView, FlatList} from "react-native";
import PlayListUnit from "../PlayListUnit";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
const FilterSong = ({data}) => {
    const songIcon = <Icon name="music-note-eighth" size={40} 
    color="darkgray" />
    return (
        <SafeAreaView>
            <FlatList 
            data={data}
            renderItem={({item}) => 
            <PlayListUnit
             icon={songIcon}
             trackName={item.name}
             artistName={item.artistName} /> }
             />
        </SafeAreaView>
    )
}

export default FilterSong;