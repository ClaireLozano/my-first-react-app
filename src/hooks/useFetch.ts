import { useEffect, useState } from 'react';

export function useFetch(url: string): {
  loading: boolean;
  data: any;
  error: string;
} {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch(url, {
      headers: {
        Accept: 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((myData) => {
        setData(myData);
      })
      .catch((e) => {
        setError(`Erreur lors de la récupération des données: ${e}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, data, error };
}
