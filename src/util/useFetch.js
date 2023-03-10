import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  return data;
};
