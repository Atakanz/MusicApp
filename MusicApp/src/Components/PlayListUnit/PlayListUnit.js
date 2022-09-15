import React from "react";
import {SafeAreaView, View, Text} from "react-native";
import styles from './PlayListUnit.style'


const PlayListUnit = ({icon, albumName, trackName, artistName}) => {
      
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
            </View>
        </SafeAreaView>
    )
}

export default PlayListUnit;