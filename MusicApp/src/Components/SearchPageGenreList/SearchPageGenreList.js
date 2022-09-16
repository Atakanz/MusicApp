import React, {useState, useEffect} from "react";
import {SafeAreaView, FlatList, Text} from "react-native";
import useFetch from "../Hooks/useFetch";
import PlayListCard from "../PlayListCard/PlayListCard";
import styles from './SearchPageGenreList.style';


const GenreNamesList = ({navigation}) => {
    const [genreList, setGenreList] = useState([]);
    const {response} = useFetch({
        url:'https://api.napster.com/v2.2/genres?apikey=NjgyZGQzNzUtZWU5Mi00ZGU1LWE4ZGItYjZmMWRiYjcwY2Jm'
      });
      useEffect(() => {
        if (response !== null) {
        setGenreList(response.genres);}
      }, [response]);

    return (
      <SafeAreaView>
      <Text style={styles.headerText}>Genres</Text>
      <FlatList 
        numColumns={2}
        scrollEnabled={false}
        data={genreList}
        renderItem={({item}) => (
        <PlayListCard
        genreName={item.name}
        task={() => 
		navigation.navigate("TrackListGenre", {item})} />)}
        /> 
        </SafeAreaView>
    )
};

export default GenreNamesList;

