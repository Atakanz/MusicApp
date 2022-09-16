import React from "react";
import {SafeAreaView, View, Text, Image} from "react-native";
import styles from './PlayListTop.style'

const PlayListTop = ({imageUrl, name, description})=> {
    return (
         <SafeAreaView style={styles.coverImageView}>
            {imageUrl &&  <View>
             <Image 
            source={{uri: imageUrl}} 
            style={styles.coverImage} /> 
            </View> }
            <View>
            <View>
            <Text style={styles.headerText}>{name}</Text>
            </View>
            {description && <View>
            <Text style={styles.descriptionText}>{description}</Text>
            </View> }
            </View>
        </SafeAreaView> 
    )
}

export default PlayListTop;