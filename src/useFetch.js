import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useFetch(name) {
  const { data, error, mutate } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher
  );
  return {
    data: data,
    error: error,
    loading: !data && !error,
    mutate: mutate,
  };
}
