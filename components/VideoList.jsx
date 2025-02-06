import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    return (
        <View style={ styles.list }>
            <FlatList
                data={ videos }
                keyExtractor={ (video) => video.id.videoId }
                renderItem={ ({ item }) => <VideoItem video={ item } onVideoSelect={ onVideoSelect } /> }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 10,
    },
});

export default VideoList;