import { useState } from "react";
import "./App.css";
import { DatePanel } from "./components/date-panel";
import { ValuesPanel } from "./components/values-panel";

function App() {
  const dateToday = new Date();
  const [date, setDate] = useState(dateToday);
  return (
    <main className="flex flex-col gap-8 items-center py-8 overflow-y-auto w-full max-w-2xl">
      <h1 className="text-4xl font-bold">Pay it forward</h1>
      <div className="flex flex-col gap-8 w-full px-4">
        <DatePanel
          date={date}
          dateToday={dateToday}
          setDate={(date) => {
            if (date) {
              setDate(date);
            }
          }}
        />
        <ValuesPanel date={date} />
      </div>
    </main>
  );
}

export default App;
