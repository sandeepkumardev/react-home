import React from "react";
import styles from "../styles/profile.module.css";
import profileImg from "../assets/profile.jpg";
import { SettingsIcon } from "lucide-react";
import SettingsDialog from "../dialogs/Settings";

const Profile = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Profile Page</h1>
        <SettingsIcon className={styles.settingsIcon} size={24} onClick={() => setOpenDialog(true)} />
      </div>

      <div className={styles.profileCard}>
        <div className={styles.img}>
          <img src={profileImg} alt="Profile" width="100%" height="100%" />
        </div>

        <div className={styles.info}>
          <h2 className={styles.name}>John Doe</h2>
          <code className={styles.username}>johndoe</code>
          <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <SettingsDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </div>
  );
};

export default Profile;
