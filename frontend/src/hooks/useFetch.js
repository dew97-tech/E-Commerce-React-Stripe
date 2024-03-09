import { useEffect, useState } from "react";

const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            setLoading(true);
            const res = await fetch(import.meta.env.VITE_STRAPI_API_URL + url, {
               headers: {
                  Authorization: "bearer" + import.meta.env.VITE_STRAPI_KEY,
               },
            });
            const { data } = await res.json();
            setData(data);
         } catch (error) {
            setLoading(false);
            setError(error);
         }
         setLoading(false);
      };
      fetchData();
   }, [url]);
   return { data, loading, error };
};
export default useFetch;
