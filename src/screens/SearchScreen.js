import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import SearchBar from "../components/SearchBar";
import newsApi from "../api/newsApi";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [SearchApi, results] = useResults();

    return(
        <View style={{flex: 1}}>
            {/* <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => SearchApi(term)}/> */}
            <StatusBar backgroundColor="#3a9ad3" barStyle="light-content" />
            <Text style={styles.heading}>Top Headlines - </Text>
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

export default SearchScreen;