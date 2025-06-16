import { User, X } from "lucide-react";
import React from "react";
import styles from "../styles/sidebar.module.css";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Notebook } from "lucide-react";
import { ListTodo } from "lucide-react";
import { User2Icon } from "lucide-react";

const sidebarLinks = [
  {
    label: "Home",
    link: "/",
    Icon: Home,
  },
  {
    label: "About Me",
    link: "/about",
    Icon: User,
  },
  {
    label: "Notes",
    link: "/notes",
    Icon: Notebook,
  },
  {
    label: "Todos",
    link: "/todos",
    Icon: ListTodo,
  },
  {
    label: "Profile",
    link: "/profile",
    Icon: User2Icon,
  },
];

const Sidebar = ({ show, onClose }) => {
  return (
    <div className={`${styles.sidebar} ${show ? styles.visible : ""}`} onClick={onClose}>
      <div className={`${styles.sidebar_content} ${show ? styles.toggle_move : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.sidebar_header}>
          <h4>Hi, User</h4>
          <X onClick={onClose} />
        </div>
        <div className={styles.sidebar_links}>
          {sidebarLinks.map((obj, index) => (
            <Link key={index} to={obj.link} className={styles.sidebar_link} onClick={onClose}>
              {<obj.Icon />} {obj.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
