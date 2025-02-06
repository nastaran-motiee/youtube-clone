import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

class SearchBar extends React.Component {
    state = { userInput: "" };

    onInputChange = (text) => {
        this.setState({ userInput: text });
    };

    onFormSubmit = () => {
        this.props.onFormSubmit(this.state.userInput);
    };

    render() {
        return (
            <View style={ styles.searchBar }>
                <View style={ styles.inputContainer }>
                    <TextInput
                        style={ styles.input }
                        placeholder="Search Video..."
                        value={ this.state.userInput }
                        onChangeText={ this.onInputChange }
                    />
                    <Button title="Search" onPress={ this.onFormSubmit } />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBar: {
        padding: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginRight: 10,
    },
});

export default SearchBar;