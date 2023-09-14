import { Button } from "@mui/material";
import styles from "./booking-modal.module.css";
const BookingModal = ({ onClose }) => {
  return (
    <div className={styles.bookingModal}>
      <b className={styles.bookingDetails}>Booking Details</b>
      <div className={styles.bookingModalInner}>
        <div className={styles.labelParent}>
          <div className={styles.label}>
            <div className={styles.bookingIdLabel}>ID:</div>
            <div className={styles.bookingDetails}>j3dhal8</div>
          </div>
          <div className={styles.label1}>
            <div className={styles.bookingIdLabel}>Classroom:</div>
            <div className={styles.bookingDetails}>B-03-08</div>
          </div>
          <div className={styles.label2}>
            <div className={styles.bookingIdLabel}>Date:</div>
            <div className={styles.bookingDetails}>Jan 1, 2023</div>
          </div>
          <div className={styles.frame}>
            <div className={styles.bookingIdLabel}>Time:</div>
            <div className={styles.bookingDetails}>10:00</div>
            <div className={styles.bookingDetails}>am</div>
            <div className={styles.bookingDetails}>-</div>
            <div className={styles.bookingDetails}>12:00</div>
            <div className={styles.bookingDetails}>pm</div>
          </div>
          <div className={styles.label4}>
            <div className={styles.bookingIdLabel}>Purpose:</div>
            <div className={styles.bookingDetails}>Group Study</div>
          </div>
          <div className={styles.label5}>
            <div className={styles.bookingIdLabel}>Classroom Type:</div>
            <div className={styles.bookingDetails}>Lab</div>
          </div>
          <div className={styles.label6}>
            <div className={styles.bookingIdLabel}>Classroom Size:</div>
            <div className={styles.bookingDetails}>20-30 people</div>
          </div>
        </div>
      </div>
      <Button
        className={styles.button}
        color="primary"
        size="medium"
        variant="contained"
        onClick={onClose}
      >
        Close
      </Button>
    </div>
  );
};

export default BookingModal;
