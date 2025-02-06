import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <TouchableOpacity style={ styles.videoItem } onPress={ () => onVideoSelect(video) }>
            <Image style={ styles.image } source={ { uri: video.snippet.thumbnails.medium.url } } />
            <View style={ styles.content }>
                <Text style={ styles.header }>{ video.snippet.title }</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    videoItem: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    image: {
        width: 120,
        height: 90,
        marginRight: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default VideoItem;