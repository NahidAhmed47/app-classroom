import { Button } from "@mui/material";
import styles from "./modal-report-issue-success.module.css";
const ModalReportIssueSuccess = ({ onClose }) => {
  return (
    <div className={styles.modalreportIssuesuccess}>
      <div className={styles.content}>
        <img className={styles.checkcircleIcon} alt="" src="/undefined3.png" />
        <div className={styles.right}>
          <div className={styles.title}>Issue successfully reported!</div>
          <div className={styles.content1}>report id: d89fh32</div>
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

export default ModalReportIssueSuccess;
