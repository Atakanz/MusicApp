import {StyleSheet} from "react-native";

export default StyleSheet.create({
    coverImage: {
        width: 180,
        height: 150,
        resizeMode: 'contain',
        borderBottomLeftRadius: 25,
    },
    coverImageView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        borderColor: '#20b2aa',
        borderWidth: 4,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#20b2aa',
        minHeight: 140,
    },
    headerText: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
        marginVertical: 5,
        maxWidth: 210,
    },
    descriptionText: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
        marginVertical: 5,
        textAlign: 'justify',
        maxWidth: 210,
    },
})