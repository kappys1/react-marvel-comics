/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);
  const [ref, setRef] = useState(false);

  useEffect(() => {
    if (ref) {
      const current = ref.current;
      current.addEventListener('scroll', handleScroll);
      return () => current.removeEventListener('scroll', handleScroll);
    }
  }, [ref]);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function handleScroll() {
    if (ref.current.offsetHeight + ref.current.scrollTop !== ref.current.scrollHeight || isFetching)
      return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching, setRef];
};

export default useInfiniteScroll;
