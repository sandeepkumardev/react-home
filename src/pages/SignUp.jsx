import React from "react";
import styles from "../styles/auth.module.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
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

    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Sign Up failed");
        return;
      }

      setForm({
        name: "",
        username: "",
        password: "",
        confirm_password: "",
      });

      navigate("/signin");
    } catch (error) {
      console.error("Sign Up error:", error);
      setError("Something went wrong!");
      return;
    }
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
