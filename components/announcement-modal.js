import { Button } from "@mui/material";
import styles from "./announcement-modal.module.css";
const AnnouncementModal = ({ onClose }) => {
  return (
    <div className={styles.announcementModal} onClick={onClose}>
      <b className={styles.announcementDetails}>Announcement Details</b>
      <div className={styles.wifiMaintenanceNotificationParent}>
        <b className={styles.wifiMaintenanceNotification}>
          WiFi Maintenance Notification
        </b>
        <div className={styles.labelParent}>
          <div className={styles.label}>
            <div className={styles.announcementDetails}>Mr. Jason Yu</div>
          </div>
          <div className={styles.div}>|</div>
          <div className={styles.announcementDetails}>Jan 1, 2023</div>
          <div className={styles.div}>|</div>
          <div className={styles.frame}>
            <div className={styles.announcementDetails}>10:00</div>
            <div className={styles.announcementDetails}>am</div>
          </div>
        </div>
        <img
          className={styles.networkMaintenanceDPersonTIcon}
          alt=""
          src="/undefined51.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.bookingIdLabelWrapper}>
            <div className={styles.bookingIdLabelContainer}>
              <p className={styles.dearStudents}>Dear Students,</p>
              <p className={styles.dearStudents}>&nbsp;</p>
              <p className={styles.dearStudents}>
                I hope this message finds you well. We want to inform you about
                an upcoming maintenance activity that will temporarily affect
                the campus Wi-Fi network.
              </p>
              <p className={styles.dearStudents}>&nbsp;</p>
              <p
                className={styles.dearStudents}
              >{`Maintenance Date: Thursday, 20 September 2023 `}</p>
              <p className={styles.dearStudents}>
                Maintenance Time: 10:00 AM to 3:00 PM
              </p>
              <p className={styles.dearStudents}>&nbsp;</p>
              <p className={styles.dearStudents}>
                During this period, the Wi-Fi network on campus will be
                undergoing necessary maintenance and upgrades to ensure optimal
                performance. As a result, you may experience intermittent
                connectivity issues or complete network unavailability.
              </p>
              <p className={styles.dearStudents}>&nbsp;</p>
              <p className={styles.dearStudents}>
                We understand that this may cause inconvenience, especially for
                those who rely on the Wi-Fi for their academic activities. To
                minimize disruption, we recommend taking the following steps:
              </p>
              <ul className={styles.planAheadIfPossibleSched}>
                <li className={styles.planAheadIf}>
                  Plan Ahead: If possible, schedule your online coursework,
                  research, or other Wi-Fi-dependent tasks outside of the
                  maintenance window.
                </li>
                <li className={styles.planAheadIf}>
                  Use Alternative Networks: If you have access to mobile data or
                  other internet sources, consider using them during this
                  period.
                </li>
                <li className={styles.planAheadIf}>
                  Offline Study: Utilize offline resources and materials for
                  your studies to continue your academic progress during the
                  maintenance window.
                </li>
              </ul>
              <p className={styles.dearStudents}>&nbsp;</p>
              <p className={styles.dearStudents}>
                Our IT team will be working diligently to complete the
                maintenance as quickly as possible and restore regular Wi-Fi
                service. We apologize for any inconvenience this may cause and
                appreciate your understanding as we strive to improve our
                network infrastructure.
              </p>
              <p className={styles.dearStudents}>&nbsp;</p>
              <p className={styles.dearStudents}>
                If you have any urgent concerns or require assistance during the
                maintenance window, please feel free to contact our IT support
                team at [IT Support Contact Information].
              </p>
              <p className={styles.dearStudents}>&nbsp;</p>
              <p className={styles.dearStudents}>
                Thank you for your cooperation, and we look forward to providing
                you with an even more reliable Wi-Fi experience once the
                maintenance is completed.
              </p>
              <p className={styles.dearStudents}>&nbsp;</p>
              <p className={styles.dearStudents}>Sincerely,</p>
              <p className={styles.dearStudents}>&nbsp;</p>
              <p className={styles.dearStudents}>Mr. Jason</p>
              <p className={styles.dearStudents}>Tech Department</p>
              <p className={styles.dearStudents}>jason@mail.apu.edu.my</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper} onClick={onClose}>
        <Button color="primary" size="medium" variant="contained">
          Close
        </Button>
      </div>
    </div>
  );
};

export default AnnouncementModal;
