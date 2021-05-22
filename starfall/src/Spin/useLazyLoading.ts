import { useEffect, useRef, useState } from 'react';

export const useLazyLoading = (
  loading: boolean | undefined,
  lazy: number | undefined
): boolean | undefined => {
  const [innerLoading, setInnerLoading] = useState<boolean | undefined>(false);

  const timeout = useRef<undefined | NodeJS.Timeout>(undefined);

  useEffect(() => {
    if (!lazy) {
      setInnerLoading(loading);
    } else {
      if (loading) {
        timeout.current = setTimeout(() => {
          console.log(2);
          setInnerLoading(true);
        }, lazy);
      } else {
        if (timeout.current !== undefined) {
          clearTimeout(timeout.current);
        }
        console.log(1);
        setInnerLoading(false);
      }
    }
  }, [loading, lazy]);

  return innerLoading;
};
