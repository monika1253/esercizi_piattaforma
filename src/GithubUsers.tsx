import { useEffect, useState } from "react";
import GithubUser from "./GithubUser";
import { Link } from "react-router-dom";

interface User {
  login: string;
  id: number;
}

function GithubUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`} style={{ cursor: "pointer" }}>
              {user.login}
            </Link>
            <button
              onClick={() => setSelectedUser(user.login)}
              style={{ cursor: "pointer" }}
            >
              {" "}
              {user.login}
            </button>
          </li>
        ))}
      </ul>

      {selectedUser && <GithubUser username={selectedUser} />}
    </div>
  );
}

export default GithubUsers;
