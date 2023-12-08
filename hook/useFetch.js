import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '7834df3bf8msha8562f04d46df5ep157c90jsnc51180d0c3ae',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query},
  };

    

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.request(options);
        
        setData(response.data.data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        alert("There is an error fetching data:");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect (() => {
      fetchData();
    }, []);

    const refetch = () => {
      setIsLoading(true);
      fetchData();
    }

 return { data, isLoading, error, refetch};
};

export default useFetch;
