export function Message() {
  return <p>What a beautiful day!</p>;
}

export function Hello() {
  return (
    <div>
      <h2>Hello, World!</h2>
      <Message />
    </div>
  );
}
