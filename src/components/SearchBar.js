import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons"

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.container}>
            <Feather style={styles.iconStyle} name="search" />
            <TextInput 
                style={styles.textInputStyle} 
                placeholder="Search Category"
                value={term} 
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#e8e4e1',
        borderRadius: 4,
        margin: 15,
        flexDirection: "row",
    },
    iconStyle: {
        alignSelf: "center",
        fontSize: 35,
        marginHorizontal: 15
    },
    textInputStyle: {
        fontSize: 18,
        flex: 1
    }
})

export default SearchBar;