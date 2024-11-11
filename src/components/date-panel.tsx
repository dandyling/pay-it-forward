import { add, format } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { YYYY_MM_DD } from "./values-panel";

export function DatePanel({
  date,
  setDate,
  dateToday,
}: {
  date: Date;
  setDate: (date: Date | undefined) => void;
  dateToday: Date;
}) {
  const isToday = format(date, YYYY_MM_DD) === format(dateToday, YYYY_MM_DD);
  return (
    <div className="flex items-center gap-2 w-full">
      <Button
        size="icon"
        className="rounded-lg"
        onClick={() => {
          setDate(add(date, { days: -1 }));
        }}
      >
        <ChevronLeftIcon />
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "w-full text-center font-normal",
              !date && "text-muted-foreground"
            )}
          >
            {!isToday ? format(date, "PPP") : <span>Today</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
        <Button
          size="icon"
          className="rounded-lg"
          onClick={() => {
            setDate(add(date, { days: 1 }));
          }}
        >
          <ChevronRightIcon />
        </Button>
      </Popover>
    </div>
  );
}
