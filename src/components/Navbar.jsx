import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { SidebarIcon } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.header_icon}>
        <SidebarIcon onClick={() => setShowSidebar(true)} />
        <Link to={"/"}>
          <h2>React Home</h2>
        </Link>
      </div>

      <Link to="/signin">Sign In</Link>

      <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} />
    </div>
  );
};

export default Navbar;
