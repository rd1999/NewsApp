import React, { useState, useEffect } from "react";
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from "react-native";
import newsApi from "../api/newsApi";
import ResultsList from "../components/ResultsList"

const politicsScreen = () => {

    const [results, setResults] = useState([]);

    const getResult = async () => {
        const response = await newsApi.get("/top-headlines", {
            params: {
                apiKey: "61f1c4f65253481a987862a6e8160793",
                country: "in",
                category: "politics"
            }
        })
        setResults(response.data.articles);
    }

    useEffect(() => {
        getResult();
    }, [])

    

    return(
        <View>
            <Text style={styles.heading}>Politics - </Text>
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

export default politicsScreen;