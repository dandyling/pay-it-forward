import debounce from "lodash/debounce";
import { useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";

export function PayItForward({ id }: { id: string }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const savedValue = localStorage.getItem(id);
    if (savedValue) {
      setValue(savedValue);
    }
  }, [id]);

  const debouncedSave = debounce((value: string) => {
    localStorage.setItem(id, value);
  }, 1000);

  return (
    <Textarea
      value={value}
      onChange={(e) => {
        const currentValue = e.target.value;
        setValue(currentValue);
        debouncedSave(currentValue);
      }}
    />
  );
}
