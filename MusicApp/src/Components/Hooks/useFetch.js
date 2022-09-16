import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetch({url}) {
   const [response, setResponse] = useState(null);
   const [response2, setResponse2] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
          await axios.get(url)
               .then((response) => {
                  setResponse(response.data);
                  setResponse2(response.data);
               })
      };

      fetchData();
   }, []);

   return {response, response2};
}
