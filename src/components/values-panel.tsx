import { format } from "date-fns";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export const YYYY_MM_DD = "yyyy-MM-dd";

const getStorageId = (date: Date) => `${format(date, YYYY_MM_DD)}-values`;

export function ValuesPanel({ date }: { date: Date }) {
  const id = getStorageId(date);
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    const savedValues = localStorage.getItem(id);
    const defaultValues = savedValues ? JSON.parse(savedValues) : ["", "", ""];
    setValues(defaultValues);
  }, [id]);

  const change = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  const save = () => {
    const filteredValues = values.filter(
      (value, index) => index < 3 || value.trim() !== ""
    );
    localStorage.setItem(id, JSON.stringify(filteredValues));
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <span>{values.length} act of kindliness you have done for others</span>
      <div className="flex flex-col gap-4 w-full px-4">
        {values.map((value, index) => {
          return (
            <Textarea
              key={index}
              value={value}
              onChange={(e) => {
                change(index, e.target.value);
              }}
              onBlur={save}
            />
          );
        })}
      </div>
      <Button
        className="rounded-full w-16 h-16 p-0"
        size="icon"
        onClick={() => {
          change(values.length, "");
        }}
      >
        <Plus style={{ width: 24, height: 24 }} />
      </Button>
    </div>
  );
}
