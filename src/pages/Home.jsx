import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../context/auth-context";

const Home = () => {
  const { currentUser } = useContext(authContext);

  console.log({ currentUser });
  return (
    <div>
      Home Page
      <Link to="/about">About</Link>
      <Link to="/notes">Notes App</Link>
    </div>
  );
};

export default Home;
