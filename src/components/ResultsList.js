import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation"

const ResultsList = ({result, navigation}) => {

    if(!result) {
        return null
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("ResultsDetail", {result})}>
                <Text style={styles.title}>{result.title}</Text>
                <Image style={styles.image} source={{uri: result.urlToImage}} />
                <Text style={styles.publishedAt}>{result.publishedAt}</Text>
                <Text style={styles.description}>{result.description}</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 360,
        alignSelf: "center"
    },
    container: {
        margin: 15,
        borderBottomColor: "#dbdbdb",
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10
    },
    description: {
        fontSize: 18,
        marginBottom: 40,
    },
    publishedAt: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);