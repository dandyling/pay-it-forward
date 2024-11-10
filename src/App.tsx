import { useState } from "react";
import "./App.css";
import { PayItForward } from "./components/pay-it-forward";
import { Button } from "./components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, Plus } from "lucide-react";
import { add, format } from "date-fns";

const YYYY_MM_DD = "yyyy-MM-dd";
function App() {
  const dateToday = new Date();
  const [date, setDate] = useState(dateToday);
  const [count, setCount] = useState(3);
  const key = format(date, YYYY_MM_DD);
  const isToday = format(date, YYYY_MM_DD) === format(dateToday, YYYY_MM_DD);
  return (
    <main className="min-h-dvh min-w-screen flex flex-col gap-8 items-center">
      <h1 className="text-4xl font-bold">Pay it forward</h1>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <Button
            size="icon"
            className="rounded-full"
            onClick={() => {
              setDate(add(date, { days: -1 }));
            }}
          >
            <ChevronLeftIcon />
          </Button>
          <span className="font-medium text-sm">
            {isToday ? "Today" : format(date, "dd MMM yyyy")}
          </span>
          <Button
            size="icon"
            className="rounded-full"
            onClick={() => {
              setDate(add(date, { days: 1 }));
            }}
          >
            <ChevronRightIcon />
          </Button>
        </div>
        <span>
          {count > 3 ? count : 3} act of kindliness you have done for others
        </span>
        <div className="flex flex-col gap-4 w-full">
          {Array.from({ length: count }).map((_, index) => {
            const id = `${key}-p${index + 1}`;
            return <PayItForward id={id} key={id} />;
          })}
        </div>
      </div>
      <Button
        className="rounded-full w-12 h-12 p-0"
        size="icon"
        onClick={() => setCount(count + 1)}
      >
        <Plus />
      </Button>
    </main>
  );
}

export default App;
