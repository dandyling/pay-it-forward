import { format } from "date-fns";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ValuePanel } from "./value-panel";

export const YYYY_MM_DD = "yyyy-MM-dd";

export function ValuesPanel({ date }: { date: Date }) {
  const key = `${format(date, YYYY_MM_DD)}-values`;
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    const savedValues = localStorage.getItem(key);
    const defaultValues = savedValues ? JSON.parse(savedValues) : ["", "", ""];
    setValues(defaultValues);
  }, [key]);

  const save = (values: string[]) => {
    localStorage.setItem(key, JSON.stringify(values));
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <span>{values.length} act of kindliness you have done for others</span>
      <div className="flex flex-col gap-4 w-full px-4">
        {values.map((value, index) => {
          return (
            <ValuePanel
              key={index}
              value={value}
              onSave={() => {
                save(values);
              }}
              onChange={(value) => {
                const newValues = [...values];
                newValues[index] = value;
                setValues(newValues);
              }}
              onDelete={() => {
                const newValues = [...values];
                newValues.splice(index, 1);
                setValues(newValues);
                save(newValues);
              }}
            />
          );
        })}
      </div>
      <Button
        className="rounded-full w-12 h-12 p-0"
        size="icon"
        onClick={() => {
          const newValues = [...values];
          newValues.push("");
          setValues(newValues);
          save(newValues);
        }}
      >
        <Plus />
      </Button>
    </div>
  );
}
