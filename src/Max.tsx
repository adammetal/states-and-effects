import { useState } from "react";
import Input from "./Components/Input";
import Card from "./Components/Card";

export default function Max() {
  const [value, setValue] = useState("");
  //const [maximum, setMaximum] = useState(0);

  /*setMaximum(
    value
      .split(",")
      .filter(Boolean)
      .map(Number)
      .reduce((max, curr) => (curr > max ? curr : max), 0)
  );*/

  // Warning!!!
  // Not the best solution in the current
  // era of react development
  /*useEffect(() => {
    setMaximum(
      value
        .split(",")
        .filter(Boolean)
        .map(Number)
        .reduce((max, curr) => (curr > max ? curr : max), 0)
    );
  }, [value, setMaximum]);*/

  // Best!!!
  const maximum = value
    .split(",")
    .filter(Boolean)
    .map(Number)
    .reduce((max, curr) => (curr > max ? curr : max), 0);

  // Currently semi best
  /*const memoMax = useMemo(
    () =>
      value
        .split(",")
        .filter(Boolean)
        .map(Number)
        .reduce((max, curr) => (curr > max ? curr : max), 0),
    [value]
  );*/

  return (
    <Card>
      <h1 className="text-xl">Maximum value</h1>
      <div className="flex flex-1 text-4xl justify-center items-center">
        {maximum}
      </div>
      <Input
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        value={value}
      />
    </Card>
  );
}
