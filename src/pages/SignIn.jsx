import React, { useContext } from "react";
import styles from "../styles/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/auth-context";

const SignIn = () => {
  const navigate = useNavigate();
  const { users, setCurrentUser } = useContext(authContext);
  const [error, setError] = React.useState("");
  const [form, setForm] = React.useState({
    username: "sandeep",
    password: "hola",
  });

  const handleInput = (e) => {
    const eleName = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [eleName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.username === "" || form.password === "") {
      setError("Please fill all the fields");
      return;
    }

    const userExists = users.find((u) => u.username === form.username);
    if (userExists && userExists.password !== form.password) {
      setError("Invalid password");
      return;
    }

    if (userExists) {
      setCurrentUser({
        name: userExists.name,
        username: userExists.username,
      });

      setForm({ username: "", password: "" });
      navigate("/");
      return;
    }

    setError("User does not exist!");
  };

  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_form}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleInput} />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleInput} />
          <button>Sign In</button>
          {error && <span className={styles.error_msg}>{error}</span>}
        </form>
        <p>
          Don't have an account <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
