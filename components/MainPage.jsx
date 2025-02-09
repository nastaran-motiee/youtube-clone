import youtube from "@/api/youtube";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
const MainPage = () => {
    const [ videos, setVideos ] = useState([]);
    const [ selectedVideo, setSelectedVideo ] = useState(null);

    const onFormSubmit = async (userInput) => {
        try {
            const response = await youtube.get("/search", {
                params: {
                    q: userInput
                }
            });
            setVideos(response.data.items);
            setSelectedVideo(response.data.items[ 0 ]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        onFormSubmit("crazy frog");
    }, []);

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <View style={ styles.container }>
            <SearchBar onFormSubmit={ onFormSubmit } />
            <View style={ styles.videoSection }>
                <VideoDetails video={ selectedVideo } />

                <VideoList videos={ videos } onVideoSelect={ onVideoSelect } />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    videoSection: {
        flex: 1,
    },
});

export default MainPage;