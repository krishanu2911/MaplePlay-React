import axios from "axios";
import { useState, useEffect } from "react";
function useAxios(apipath) {
  const [apiResponse, setApiResponse] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(apipath);
        setApiResponse(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error + "this error has been occurred");
      }
    })();
  }, []);
  return{apiResponse , loading}
}
export {useAxios};
