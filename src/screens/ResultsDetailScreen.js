import React from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";

const ResultsDetailScreen = ({navigation}) => {

    const result = navigation.getParam("result");

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{result.title}</Text>
            <Image style={styles.image} source={{uri: result.urlToImage}} />
            <Text style={styles.publishedAt}>{result.publishedAt}</Text>
            <Text style={styles.description}>{result.content}</Text>
            <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL(`${result.url}`)}>
                Read more
            </Text>
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
        margin: 15
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10
    },
    description: {
        fontSize: 18,
    },
    publishedAt: {
        marginBottom: 10
    }
});

export default ResultsDetailScreen;