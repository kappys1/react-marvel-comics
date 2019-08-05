import { useState, useEffect, useRef } from 'react';

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);
  const [ref, setRef] = useState(false);

  useEffect(() => {
    if (ref) {
      ref.current.addEventListener('scroll', handleScroll);
      return () => ref.current.removeEventListener('scroll', handleScroll);
    }
  }, [ref]);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function handleScroll() {
    console.log(
      'Scroll',
      ref.current.offsetHeight + ref.current.scrollTop,
      ref.current.scrollHeight
    );
    if (ref.current.offsetHeight + ref.current.scrollTop !== ref.current.scrollHeight || isFetching)
      return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching, setRef];
};

export default useInfiniteScroll;
