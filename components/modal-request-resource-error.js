import { Button } from "@mui/material";
import styles from "./modal-request-resource-error.module.css";
const ModalRequestResourceError = ({ onClose }) => {
  return (
    <div className={styles.modalrequestResourceerror}>
      <div className={styles.content}>
        <img className={styles.closecircleIcon} alt="" src="/undefined2.png" />
        <div className={styles.right}>
          <div className={styles.title}>
            There was some issue when requesting...
          </div>
          <div className={styles.content1}>Please try again.</div>
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

export default ModalRequestResourceError;
