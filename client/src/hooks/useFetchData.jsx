import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = (apiUrl, authToken) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data is already cached
        const cachedData = localStorage.getItem('cachedData');
        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        // Fetch data from the API
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: 'bearer ' + authToken,
          },
        });
        const responseData = response.data.data;

        // Cache the data
        localStorage.setItem('cachedData', JSON.stringify(responseData));

        // Update state
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, authToken]);

  return { data, loading, error };
};

export default useFetchData;

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const useFetchData = (apiUrl, authToken) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(apiUrl, {
//           headers: {
//             Authorization: 'bearer ' + authToken,
//           },
//         });
//         setData(response.data.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [apiUrl, authToken]);

//   return { data, loading, error };
// };

// export default useFetchData;
