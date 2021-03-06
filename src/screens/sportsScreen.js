import React, { useState, useEffect } from "react";
import {View, FlatList, StyleSheet, Text} from "react-native";
import newsApi from "../api/newsApi";
import ResultsList from "../components/ResultsList"

const sportsScreen = () => {

    const [results, setResults] = useState([]);

    const getResult = async () => {
        const response = await newsApi.get("/top-headlines", {
            params: {
                apiKey: "61f1c4f65253481a987862a6e8160793",
                country: "in",
                category: "sports"
            }
        })
        setResults(response.data.articles);
    }

    useEffect(() => {
        getResult();
    }, [])

    

    return(
        <View>
            <Text style={styles.heading}>Sports - </Text>
            <FlatList
                data={results}
                keyExtractor={(result) => result.title}
                renderItem={({item}) => {
                    return <ResultsList result={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 15,
        marginVertical: 20
    }
})

export default sportsScreen;