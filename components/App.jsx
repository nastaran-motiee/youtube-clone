import youtube from "@/api/youtube";
import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onFormSubmit = async (userInput) => {
        try {
            const response = await youtube.get("/search", {
                params: {
                    q: userInput
                }
            });
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[ 0 ]
            });
        } catch (error) {
            console.error(error);
        }
    };
    componentDidMount() {
        this.onFormSubmit("crazy frog");
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <View style={ styles.container }>
                <SearchBar onFormSubmit={ this.onFormSubmit } />
                <View style={ styles.videoSection }>
                    <VideoDetails video={ this.state.selectedVideo } />
                    <VideoList videos={ this.state.videos } onVideoSelect={ this.onVideoSelect } />
                </View>
            </View>
        );
    }
}

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

export default App;