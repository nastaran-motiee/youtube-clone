import React from "react";
import { ActivityIndicator, Image, Platform, StyleSheet, Text, View } from "react-native";
import { WebView } from 'react-native-webview';

const VideoDetails = ({ video }) => {
    if (!video) {
        return (
            <View style={ styles.loadingContainer }>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        );
    } else {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <View >
                <View >
                    { Platform.OS === 'web' ? (
                        <iframe

                            src={ videoSrc }
                            style={ styles.videoContainer }
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <WebView source={ { uri: videoSrc } } style={ styles.video } />
                    ) }
                </View>
                <View style={ styles.detailsContainer }>
                    <Image source={ { uri: video.snippet.thumbnails.medium.url } } style={ styles.thumbnail } />
                    <Text style={ styles.title }>{ video.snippet.title }</Text>
                    <Text style={ styles.description }>{ video.snippet.description }</Text>
                </View>
            </View >
        );
    }
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    videoContainer: {

        height: 300,
        width: '100%'
    },
    video: {
        flex: 1,
    },
    detailsContainer: {
        marginTop: 10,
    },
    thumbnail: {
        width: 20,
        height: 20,
        borderRadius: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        marginTop: 10,
        fontSize: 16,
    },
});

export default VideoDetails;