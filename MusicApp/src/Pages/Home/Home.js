import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PlayListUnit from '../../Components/PlayListUnit';
import PlayListCard from '../../Components/PlayListCard/PlayListCard';
import styles from './Home.style';
import axios from 'axios';
import {setSongList} from '../../Management/Features/SongList/songListSlice';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
	const dispatch=useDispatch();
	const [playListInfo, setPlayListInfo] = useState([]);
  // this will be the data of flat list
  useEffect(() => {
    // getSongList;
     axios.get(
      "https://api.napster.com/v2.2/albums/new?apikey=NjgyZGQzNzUtZWU5Mi00ZGU1LWE4ZGItYjZmMWRiYjcwY2Jm",
      )
      .then(response => {
        dispatch(setSongList(response.data.albums));
      });
     axios.get(
        'https://api.napster.com/v2.2/playlists?apikey=NjgyZGQzNzUtZWU5Mi00ZGU1LWE4ZGItYjZmMWRiYjcwY2Jm',
      )
      .then(response => {  
        setPlayListInfo(response.data.playlists);
      });
  }, []);

  // const getSongList = () => {
  //   getData("/v2.2/genres/g.397/albums/new", "albums");
  // }

  const songList = useSelector(state=>state.songList.songList)

	const album = <Icon name="album" size={40} color="darkgray" />

 
	return (
	<SafeAreaView>
    <Text style={styles.headerText}>Playlists</Text>
    <FlatList 
    style={styles.playlistButtons}
    numColumns={2}
    scrollEnabled={false}
    data={playListInfo}
    renderItem={({item}) => (
    <PlayListCard
    genreName={item.name}
    task={() => navigation.navigate("Songs", {id: item.id, name: item.name, images: item.images, description: item.description})} /> ) } 
    />
    <FlatList
    ListHeaderComponent={
    <Text style={styles.headerText}>New Releases</Text>
    }
    data={songList}
    renderItem={
      ({item}) =>
       <PlayListUnit
       icon={album}
       artistName={item.artistName}
       albumName={item.name} />
       } 
       />
	</SafeAreaView>
	)
};

export default Home;
