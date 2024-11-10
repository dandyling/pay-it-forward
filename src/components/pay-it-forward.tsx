import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { useLocalStorage } from "../assets/use-local-storage";

export function PayItForward({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const [value, setValue] = useState("");
  const { setLocalStorage } = useLocalStorage(id, setValue);

  return (
    <Textarea
      className={className}
      value={value}
      onChange={(e) => {
        const currentValue = e.target.value;
        setValue(currentValue);
        setLocalStorage(currentValue);
      }}
    />
  );
}
