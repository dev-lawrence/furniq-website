import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../libs/client';

const useFetchData = () => {
  const { data, isLoading, isError } = useQuery(['products'], fetchData);

  return { data, loading: isLoading, error: isError };
};

export default useFetchData;
