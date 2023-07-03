import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchData = (apiUrl, authToken) => {
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: 'bearer ' + authToken,
        },
      });
      return response.data.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const { data, isLoading, isError } = useQuery(['data', apiUrl], fetchData);

  return { data, loading: isLoading, error: isError };
};

export default useFetchData;

// REAL CODE
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
