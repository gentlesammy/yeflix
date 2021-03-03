import {useEffect, useState} from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res)=>{
                    return res.json()
                })
                .then(data => {
                    setData(data.records.profiles);
                    setLoading(false)
                    setError(null)
                })
                .catch((error) => {
                    setData(null);
                    setLoading(false)
                    setError(error.message)
                })
        }, 1000);
    }, [url])
    return {data, loading, err}
}

export default useFetch