import { useQuery } from "@tanstack/react-query";
import Card from "./Components/Card";
import { useId } from "react";

const URL = "https://api.thecatapi.com/v1/images/search";

const fetchCat = async (): Promise<{ url: string }> => {
  const response = await fetch(URL);
  const data = await response.json();
  return data[0];
};

export default function Cat() {
  const id = useId();
  //const [cat, error, reLoading, reload] = useFetch<{ url: string }>(URL);
  const query = useQuery({ queryKey: ['cats', id], queryFn: fetchCat });

  // C
  if (query.error) {
    return (
      <Card>
        <div className="text-xl text-red-400">Something wrong happend!</div>
      </Card>
    );
  }

  // D State
  if (query.isRefetching) {
    return <Card>Re loading...</Card>;
  }

  // A State
  if (query.isLoading) {
    return <Card>Loading...</Card>;
  }

  // B State
  return (
    <Card>
      <img onClick={() => query.refetch()} className="w-full" src={query.data?.url} />
    </Card>
  );
}
