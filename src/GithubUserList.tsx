import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface GithubUser {
  id: number;
  login: string;
}

export default function GithubUserList() {
  const [users, setUsers] = useState<GithubUser[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data: GithubUser[]) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={user.login}>{user.login}</Link>
        </li>
      ))}
    </ul>
  );
}
