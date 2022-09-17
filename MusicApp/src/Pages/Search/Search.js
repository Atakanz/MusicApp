import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import TextInputs from '../../Components/TextInputs/TextInputs';
import styles from './Search.style';
import {useSelector, useDispatch} from 'react-redux';
import useFetch from '../../Hooks/useFetch';
import GenreNamesList from '../../Components/SearchPageGenreList/SearchPageGenreList';
import FilterSong from '../../Components/SearchPageFilterSong/SearchPageFilterSongList';
import {setPlayList} from '../../Management/Features/SongList/songListSlice';



const Search = ({navigation}) => {
	const [songInput, setSongInput] = useState(null);
	const [genreNames, setGenreNames] = useState([]);
	const [list, setList] = useState([]);
	const [isFocused, setIsFocused] = useState(false);
	const searchButtonTask = () => {
	setIsFocused(true);
	}
	const theme = useSelector(state => state.theme.theme)
	const {response} = useFetch({
		url:'https://api.napster.com/v2.2/genres?apikey=NjgyZGQzNzUtZWU5Mi00ZGU1LWE4ZGItYjZmMWRiYjcwY2Jm&limit=10'
	  });

	  const {response2} = useFetch({url: "http://api.napster.com/v2.2/tracks/top?apikey=NjgyZGQzNzUtZWU5Mi00ZGU1LWE4ZGItYjZmMWRiYjcwY2Jm&limit=10"})

	useEffect(() => {
		if (response !== null) {
		setGenreNames(response.genres);}
		if (response2 !== null) {
		setPlayList(response2.tracks)
		}
	  }, [response, response2]);
      const trackList = useSelector(state => state.songList.songList)
	  const handleSearch = text => {
        const filteredList = trackList.filter(item => {
          const searchedText = text.toLowerCase();
          const currentTitle = item.name.toLowerCase();
          // on the condition of lower case written, then find the match
          return currentTitle.indexOf(searchedText) > -1;
          // if the match exists,  the result wont be -1
        });
        setList(filteredList);
    };
	
	return (
	<SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
		<View style={styles.searchBar}>
		<TextInputs 
		labelName="Search"
		value={songInput}
		holder="Search a music"
		focusTask={searchButtonTask}
		task={handleSearch}
		security={false}
		/>
		</View>
		{!isFocused ? <GenreNamesList navigation={navigation} /> : <FilterSong data={list} />}
	</SafeAreaView>
    ) 
};

export default Search;
