import newsApi from "../api/newsApi";
import { useEffect, useState } from "react";

export default () => {

    const [results, setResults] = useState([]);

    const SearchApi = async (searchTerm) => {

        try{
            const response = await newsApi.get("/top-headlines", {
                params: {
                    apiKey: "61f1c4f65253481a987862a6e8160793",
                    country: "in",
                    q: searchTerm
                }
            })
            setResults(response.data.articles);
        }catch(err) {
            console.log(err);
        }
        
    }

    useEffect(() => {
        SearchApi("");
    }, [])

    return [SearchApi, results]; 
}