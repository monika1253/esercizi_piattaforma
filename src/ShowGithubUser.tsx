import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser";

function ShowGithubUser() {
  const { username } = useParams<{ username: string }>();
  if (!username) return <p>Username non trovato</p>;

  return <GithubUser username={username} />;
}

export default ShowGithubUser;
