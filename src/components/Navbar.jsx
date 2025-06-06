import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { SidebarIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import { authContext } from "../context/auth-context";
import { useContext } from "react";
import { LogOutIcon } from "lucide-react";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(authContext);
  const [showSidebar, setShowSidebar] = React.useState(false);

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.header_icon}>
        <SidebarIcon onClick={() => setShowSidebar(true)} />
        <Link to={"/"}>
          <h2>React Home</h2>
        </Link>
      </div>

      {currentUser ? (
        <div className={styles.profile_box}>
          <p>Hi, {currentUser.name}</p>
          <LogOutIcon onClick={handleLogout} />
        </div>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}

      <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} />
    </div>
  );
};

export default Navbar;
