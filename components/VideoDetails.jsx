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
            <View style={ styles.container }>
                <View style={ styles.videoContainer }>
                    { Platform.OS === 'web' ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src={ videoSrc }
                            frameBorder="0"
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
            </View>
        );
    }
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 10,
    },
    videoContainer: {
        height: 200,
    },
    video: {
        flex: 1,
    },
    detailsContainer: {
        marginTop: 10,
    },
    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: 50,
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