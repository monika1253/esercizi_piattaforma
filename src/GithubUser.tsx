/*Data Fetching con fetch e useEffect

-Crea un componente GithubUser che riceve una prop username e recupera i dati dell'utente corrispondente dalla Github API. 
Il componente dovrebbe renderizzare il nome dell'utente, il login e l'avatar.
-Crea un componente GithubUsers che recupera una lista di utenti dalla Github API e renderizza la lista dei nomi utente come un elenco. 
Quando un nome utente viene cliccato, il componente GithubUser dovrebbe essere renderizzato, passando il nome utente come prop.
 */

import { useEffect, useState } from "react";

interface GithubUserProps {
  username: string;
}
interface GithubUserData {
  name: string | null;
  login: string;
  avatar_url: string;
}

function GithubUser({ username }: GithubUserProps) {
  const [user, setUser] = useState<GithubUserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p>Loading user...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return null;

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}
    >
      <img src={user.avatar_url} alt={`${user.login} avatar`} width={100} />
    </div>
  );
}

export default GithubUser;
