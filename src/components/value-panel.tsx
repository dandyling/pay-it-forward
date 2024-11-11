import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { YYYY_MM_DD } from "./values-panel";
import { format } from "date-fns";

export function ValuePanel({
  values,
  setValues,
  index,
  value,
  date,
}: {
  values: string[];
  setValues: (values: string[]) => void;
  index: number;
  value: string;
  date: Date;
}) {
  const save = (values: string[]) => {
    localStorage.setItem(
      `${format(date, YYYY_MM_DD)}-values`,
      JSON.stringify(values)
    );
  };

  return (
    <div className="relative">
      <Button
        size="icon"
        className="absolute right-1 top-1 rounded-full w-4 h-4 p-0"
        onClick={() => {
          const newValues = [...values];
          newValues.splice(index, 1);
          setValues(newValues);
          save(newValues);
        }}
      >
        <X />
      </Button>
      <Textarea
        key={index}
        value={value}
        onChange={(e) => {
          const newValues = [...values];
          newValues[index] = e.target.value;
          setValues(newValues);
        }}
        onBlur={() => {
          save(values);
        }}
      />
    </div>
  );
}
