import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { YYYY_MM_DD } from "../App";
import { Button } from "./ui/button";
import { format } from "date-fns";

export function DatePanel({
  date,
  dateToday,
  onPrevious,
  onNext,
}: {
  date: Date;
  dateToday: Date;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const isToday = format(date, YYYY_MM_DD) === format(dateToday, YYYY_MM_DD);
  return (
    <div className="flex items-center justify-between">
      <Button size="icon" className="rounded-full" onClick={onPrevious}>
        <ChevronLeftIcon />
      </Button>
      <span className="font-medium text-sm">
        {isToday ? "Today" : format(date, "dd MMM yyyy")}
      </span>
      <Button size="icon" className="rounded-full" onClick={onNext}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
}
