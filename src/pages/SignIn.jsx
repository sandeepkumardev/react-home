import React, { useContext } from "react";
import styles from "../styles/auth.module.css";
import { Link } from "react-router-dom";
import { authContext } from "../context/auth-context";

const SignIn = () => {
  const { users, setCurrentUser } = useContext(authContext);

  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_form}>
        <h1>Sign In</h1>
        <form>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
        <p>
          Don't have an account <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
