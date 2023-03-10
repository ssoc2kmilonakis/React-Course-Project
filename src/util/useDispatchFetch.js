import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store';

const useDispatchFetch = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return { data, isLoading, error };
};

export default useDispatchFetch;
