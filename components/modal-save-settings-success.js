import { Button } from "@mui/material";
import styles from "./modal-save-settings-success.module.css";
const ModalSaveSettingsSuccess = ({ onClose }) => {
  return (
    <div className={styles.modalsaveSettingssuccess}>
      <div className={styles.content}>
        <img className={styles.checkcircleIcon} alt="" src="/undefined52.png" />
        <div className={styles.right}>
          <div className={styles.title}>Settings saved successfully!</div>
          <div className={styles.content1} />
        </div>
      </div>
      <Button
        className={styles.button}
        color="primary"
        size="medium"
        variant="contained"
        onClick={onClose}
      >
        Done
      </Button>
    </div>
  );
};

export default ModalSaveSettingsSuccess;
