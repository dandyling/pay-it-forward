import { useState } from "react";
import "./App.css";
import { PayItForward } from "./components/pay-it-forward";
import { Button } from "./components/ui/button";
import { Plus } from "lucide-react";
import { add, format } from "date-fns";
import { DatePanel } from "./components/date-panel";
import { useLocalStorage } from "./assets/use-local-storage";

export const YYYY_MM_DD = "yyyy-MM-dd";
const MIN_COUNT = 3;
function App() {
  const dateToday = new Date();
  const [date, setDate] = useState(dateToday);
  const [count, setCount] = useState(3);
  const key = format(date, YYYY_MM_DD);
  const { setLocalStorage } = useLocalStorage(
    `${key}-count`,
    (value) => {
      setCount(parseInt(value));
    },
    String(MIN_COUNT)
  );

  return (
    <main className="flex flex-col gap-8 items-center py-8 overflow-y-auto">
      <h1 className="text-4xl font-bold">Pay it forward</h1>
      <div className="flex flex-col gap-8 w-full px-4">
        <DatePanel
          date={date}
          dateToday={dateToday}
          onPrevious={() => setDate(add(date, { days: -1 }))}
          onNext={() => setDate(add(date, { days: 1 }))}
        />
        <span>
          {count > MIN_COUNT ? count : MIN_COUNT} act of kindliness you have
          done for others
        </span>
        <div className="flex flex-col gap-4 w-full px-4">
          {Array.from({ length: count }).map((_, index) => {
            const id = `${key}-p${index + 1}`;
            return <PayItForward id={id} key={id} />;
          })}
        </div>
      </div>
      <Button
        className="rounded-full w-12 h-12 p-0"
        size="icon"
        onClick={() => {
          setCount(count + 1);
          setLocalStorage(String(count + 1));
        }}
      >
        <Plus />
      </Button>
    </main>
  );
}

export default App;
