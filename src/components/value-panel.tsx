import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export function ValuePanel({
  value,
  onChange,
  onDelete,
  onSave,
}: {
  value: string;
  onChange: (value: string) => void;
  onDelete: () => void;
  onSave: () => void;
}) {
  return (
    <div className="relative">
      <Button
        size="icon"
        className="absolute right-1 top-1 rounded-full w-4 h-4 p-0"
        onClick={() => {
          onDelete();
        }}
      >
        <X />
      </Button>
      <Textarea
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onBlur={() => {
          onSave();
        }}
      />
    </div>
  );
}
