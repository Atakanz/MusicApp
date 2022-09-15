import React from "react";
import {SafeAreaView, TouchableOpacity, View, Text} from "react-native";
import styles from './PlayListCard.style';

const PlayListCard = props => {
    return (
       <SafeAreaView style={styles.container}>
            <TouchableOpacity 
            style={styles.playListButton}
            onPress={props.task}>
                <Text style={styles.genreText}>{props.genreName}</Text>
            </TouchableOpacity>
       </SafeAreaView>
    )
}

export default PlayListCard;