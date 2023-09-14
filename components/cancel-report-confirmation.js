import { Button } from "@mui/material";
import styles from "./cancel-report-confirmation.module.css";
const CancelReportConfirmation = ({ onClose }) => {
  return (
    <div className={styles.cancelReportConfirmation}>
      <div className={styles.exclamationcircleParent}>
        <img
          className={styles.exclamationcircleIcon}
          alt=""
          src="/undefined.png"
        />
        <div className={styles.confirmBookingCancelation}>
          Confirm Report Cancelation?
        </div>
      </div>
      <div className={styles.buttonParent}>
        <Button
          className={styles.button}
          color="primary"
          size="medium"
          variant="contained"
          onClick={onClose}
        >
          Confirm
        </Button>
        <Button
          className={styles.button}
          color="primary"
          size="medium"
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CancelReportConfirmation;
