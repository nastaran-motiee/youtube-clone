import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({ onFormSubmit }) => {
    const [ userInput, setUserInput ] = useState("");

    const onInputChange = (text) => {
        setUserInput(text);
    };

    const handleFormSubmit = () => {
        onFormSubmit(userInput);
    };

    return (
        <View style={ styles.searchBar }>
            <View style={ styles.inputContainer }>
                <TextInput
                    style={ styles.input }
                    placeholder="Search Video..."
                    value={ userInput }
                    onChangeText={ onInputChange }
                />
                <Button title="Search" onPress={ handleFormSubmit } />
            </View>
        </View>
    );
};

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