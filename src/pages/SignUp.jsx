import React from "react";
import styles from "../styles/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/auth-context";

const SignUp = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(authContext);
  const [error, setError] = React.useState("");
  const [form, setForm] = React.useState({
    name: "sandeep",
    username: "sandeep",
    password: "hola",
    confirm_password: "hola",
  });

  const handleInput = (e) => {
    const eleName = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [eleName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.username || !form.password || !form.confirm_password) {
      setError("Please fill all the fields");
      return;
    }

    if (form.password !== form.confirm_password) {
      setError("Password does not match!");
      return;
    }

    const userExists = users.find((u) => u.username === form.username);
    if (userExists) {
      setError("User already exists!");
      return;
    }

    setUsers([...users, form]);
    setForm({
      name: "",
      username: "",
      password: "",
      confirm_password: "",
    });

    navigate("/signin");
  };

  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_form}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleInput} />
          <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleInput} />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleInput} />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={form.confirm_password}
            onChange={handleInput}
          />
          <button>Sign Up</button>
          {error && <span className={styles.error_msg}>{error}</span>}
        </form>
        <p>
          Already have an account <Link to="/signin">SignIn</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
