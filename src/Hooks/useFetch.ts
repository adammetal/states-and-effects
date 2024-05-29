import { useCallback, useEffect, useState } from "react";

const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(false);
  const [reLoading, setReLoading] = useState(false);

  useEffect(() => {
    let valid = true;

    setData(null);
    setReLoading(false);
    setError(false);

    const effect = async () => {
      try {
        const data = await fetchUrl(url);

        if (valid === true) {
          setData(data[0]);
          setReLoading(false);
          setError(false);
        }
      } catch (e) {
        if (valid === true) {
          setError(true);
          setData(null);
          setReLoading(false);
        }
      }
    };

    effect();

    return () => {
      valid = false;
    };
  }, [url]);

  const reload = useCallback(async function() {
    setData(null);
    setError(false);
    setReLoading(true);

    try {
      const data = await fetchUrl(url);
      setData(data[0]); // B
      setReLoading(false);
    } catch (e) {
      setError(true);
      setReLoading(false);
      setData(null);
    }
  }, [url]);

  return [data, error, reLoading, reload] as const;
}