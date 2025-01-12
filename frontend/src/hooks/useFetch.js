import React,{useEffect,useState} from "react";
function useFetch(url){
    const [data,setData]=useState({});
    const [isLoading,setisLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        setisLoading(true);
        fetch(url).then(
            (res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            }
        ).then(
            (res) => {
                setData(res);
            }
        ).catch((err) => {
            setError(err);
        }).finally(() => setisLoading(false))
    },[url]);
    return {
        data,isLoading,error
    }
}
export default useFetch