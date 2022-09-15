import React from "react";
import {SafeAreaView, View, Text, Image} from "react-native";
import styles from './PlayListTop.style'

const PlayListTop = props => {
    return (
         <SafeAreaView style={styles.coverImageView}>
            <Image 
            source={{uri: props.imageUrl}} 
            style={styles.coverImage} />
            <View>
            <Text style={styles.headerText}>{props.name}</Text>
            <Text style={styles.descriptionText}>{props.description}</Text>
            </View>
        </SafeAreaView> 
    )
}

export default PlayListTop;