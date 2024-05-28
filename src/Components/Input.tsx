import { ChangeEvent } from "react";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
  type?: string;
};

export default function Input({
  onChange,
  value,
  defaultValue,
  type = "text",
}: Props) {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      defaultValue={defaultValue}
      className="input-perfect"
    />
  );
}
