import { useEffect, useRef, useState } from "react";

interface CounterProps {
  initialValue: number;
}

function Counter2({ initialValue }: CounterProps) {
  const [count, setCount] = useState(initialValue);
  const directionRef = useRef<"up" | "down" | "null">(null);
  const prevDirectionRef = useRef<"up" | "down" | "null">(null);

  useEffect(() => {
    if (count > initialValue) {
      directionRef.current = "up";
    } else if (count < initialValue) {
      directionRef.current = "down";
    } else {
      directionRef.current = null;
    }

    if (directionRef.current !== prevDirectionRef.current) {
      console.log("Direction changed to:", directionRef.current);
      prevDirectionRef.current = directionRef.current;
    }
  }, [count, initialValue]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

export default Counter2;
