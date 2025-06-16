import React from "react";
import styles from "../styles/profile.module.css";
import { X } from "lucide-react";

const SettingsDialog = ({ open, onClose }) => {
  const handleSave = (e) => {
    e.preventDefault();

    console.log("Settings saved");
    onClose();
  };
  return (
    <div className={`${styles.dialog} ${open ? styles.open : ""}`}>
      <div className={styles.dialogContent}>
        <div className={styles.dialogHeader}>
          <h3>Settings</h3>
          <X onClick={onClose} size={18} />
        </div>
        <form onSubmit={handleSave}>
          <div className={styles.formGroup}>
            <label htmlFor="theme">Theme</label>
            <select id="theme" name="theme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <button type="submit">Save Settings</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsDialog;
