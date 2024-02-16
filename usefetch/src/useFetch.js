import {useEffect, useState} from "react";
export function useFetch(uri){
    const [data,setData] = useState();
    const [error,setError] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch(uri)
        .then(response => response.json())
        .then(setData)
        .then(_=> setLoading(false))
        .catch(setError)
    });

    if (!uri) return;

    return {loading, data, error}
}