interface CounterDisplayProps {
  count: number;
}

const CounterDisplay = ({ count }: CounterDisplayProps) => {
  return <h2>{count}</h2>;
};

export default CounterDisplay;
