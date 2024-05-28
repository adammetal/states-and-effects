import { useEffect, useState } from "react";
import Card from "./Components/Card";

const URL = "https://api.thecatapi.com/v1/images/search";

export default function Cat() {
  const [cat, setCat] = useState<{ url: string } | null>(null);

  useEffect(() => {
    let valid = true;

    (async () => {
      const response = await fetch(URL);
      const data = await response.json();

      if (valid === true) {
        setCat(data[0]);
      }
    })();

    return () => {
      valid = false;
    }
  }, []);

  return (
    <Card>
      <img className="w-full" src={cat?.url ?? ""} />
    </Card>
  );
}
