import { useState } from "react";
import "./App.css";
import { PayItForward } from "./components/pay-it-forward";
import { Button } from "./components/ui/button";
import { Plus } from "lucide-react";

function App() {
  const [count, setCount] = useState(3);
  return (
    <main className="min-h-dvh min-w-screen flex flex-col gap-8 items-center">
      <h1 className="text-4xl font-bold">Pay it forward</h1>
      <div className="flex flex-col gap-8">
        <span>
          {count > 3 ? count : 3} act of kindliness you have done for others
          today
        </span>
        <div className="flex flex-col gap-4 w-full">
          {Array.from({ length: count }).map((_, index) => (
            <PayItForward id={`${index + 1}`} />
          ))}
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
