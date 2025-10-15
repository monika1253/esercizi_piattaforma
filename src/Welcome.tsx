import { Age } from "./Age";
import { Message } from "./Message";

type WelcomeProps = {
  name: string;
  age?: number;
};

export function Welcome({ name, age }: WelcomeProps) {
  return (
    <div>
      <p className="welcome">
        Welcome, <strong>{name}</strong>!
      </p>
      {age !== undefined && age > 18 && <Age age={age} />}
      {age !== undefined && <Age age={age} />}
      {age !== undefined && age > 18 && age < 65 && <Age age={age} />}
      {age !== undefined && age > 18 && name === "John" && <Age age={age} />}
      {age !== undefined && <Age age={age} />}

      {age !== undefined && <Message age={age} />}
      <h2>Welcome, {name || "guest"}!</h2>
    </div>
  );
}

export const welcome = () => {
  return <div className="welcome">Benvenuto!</div>;
};
