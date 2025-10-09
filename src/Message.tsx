type MessageProps = {
  age: number;
};

export function Message({ age }: MessageProps) {
  return <p>{age > 18 ? "You are an adult!" : "You are very young!"}</p>;
}
