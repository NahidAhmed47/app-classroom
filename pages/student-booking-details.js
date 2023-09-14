import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import CancelBookingConfirmation from "/";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./student-booking-details.module.css";
const StudentBookingDetails = () => {
  const [isCancelBookingConfirmationOpen, setCancelBookingConfirmationOpen] =
    useState(false);
  const router = useRouter();

  const onAPClassroomLogoContainerClick = useCallback(() => {
    router.push("/student-dashboard");
  }, [router]);

  const onDashboardContainerClick = useCallback(() => {
    router.push("/student-dashboard");
  }, [router]);

  const onMenuItemClick = useCallback(() => {
    router.push("/student-available-class");
  }, [router]);

  const onMenuItem1Click = useCallback(() => {
    router.push("/student-report-issue");
  }, [router]);

  const onMenuItem2Click = useCallback(() => {
    router.push("/student-request-resources");
  }, [router]);

  const onMenuItem3Click = useCallback(() => {
    router.push("/student-view-bookings");
  }, [router]);

  const onMenuItem4Click = useCallback(() => {
    router.push("/student-settings");
  }, [router]);

  const onDashboardContainer2Click = useCallback(() => {
    // Please sync "Student Support" to the project
  }, []);

  const onDashboardContainer3Click = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/student-view-bookings");
  }, [router]);

  const openCancelBookingConfirmation = useCallback(() => {
    setCancelBookingConfirmationOpen(true);
  }, []);

  const closeCancelBookingConfirmation = useCallback(() => {
    setCancelBookingConfirmationOpen(false);
  }, []);

  return (
    <>
      <div className={styles.studentBookingDetails}>
        <div className={styles.sideBar}>
          <div className={styles.logo}>
            <div
              className={styles.apclassroomLogo}
              onClick={onAPClassroomLogoContainerClick}
            >
              <img
                className={styles.apclassroomLogoIcon}
                alt=""
                src="/undefined60.png"
              />
              <div className={styles.apclassroom}>APClassroom</div>
            </div>
          </div>
          <div className={styles.sideMenu}>
            <div className={styles.sideNavigationBarUserProfi}>
              <img
                className={styles.sideNavigationBarUserProfiChild}
                alt=""
                src="/undefined41.png"
              />
              <div className={styles.roleLabel}>
                <b className={styles.student}>Student</b>
              </div>
              <div className={styles.jasonYuParent}>
                <div className={styles.apclassroom}>Jason Yu</div>
                <div className={styles.janesmithgmailcom}>
                  tp067024@mail.apu.edu.my
                </div>
              </div>
            </div>
            <div className={styles.centerMenuItems}>
              <ul className={styles.navItems}>
                <div className={styles.alignTop}>
                  <div
                    className={styles.dashboard}
                    onClick={onDashboardContainerClick}
                  >
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined54.png"
                    />
                    <div className={styles.apclassroom}>Dashboard</div>
                  </div>
                  <a className={styles.menuItem} onClick={onMenuItemClick}>
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined43.png"
                    />
                    <div className={styles.apclassroom}>Available Classes</div>
                  </a>
                  <div className={styles.dashboard3}>
                    <img
                      className={styles.bookingsIcon}
                      alt=""
                      src="/undefined55.png"
                    />
                    <div className={styles.apclassroom}>Book Classroom</div>
                  </div>
                  <a className={styles.menuItem} onClick={onMenuItem1Click}>
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined45.png"
                    />
                    <div className={styles.apclassroom}>Report Issues</div>
                  </a>
                  <a className={styles.menuItem} onClick={onMenuItem2Click}>
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined56.png"
                    />
                    <div className={styles.apclassroom}>Request Resources</div>
                  </a>
                  <a className={styles.menuItem} onClick={onMenuItem3Click}>
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined47.png"
                    />
                    <div className={styles.apclassroom}>View Bookings</div>
                  </a>
                  <a className={styles.menuItem} onClick={onMenuItem4Click}>
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined57.png"
                    />
                    <div className={styles.apclassroom}>Settings</div>
                  </a>
                  <div
                    className={styles.dashboard8}
                    onClick={onDashboardContainer2Click}
                  >
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined49.png"
                    />
                    <div className={styles.apclassroom}>Support</div>
                  </div>
                </div>
                <div className={styles.alignBottom}>
                  <div
                    className={styles.dashboard10}
                    onClick={onDashboardContainer3Click}
                  >
                    <img
                      className={styles.tablerlogout2Icon}
                      alt=""
                      src="/undefined50.png"
                    />
                    <div className={styles.apclassroom}>Log out</div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.mainPanel}>
            <div className={styles.currentClassroomAvailability}>
              <b className={styles.student}>Booking Details</b>
              <div className={styles.currentClassroomAvailabilityInner}>
                <div className={styles.labelParent}>
                  <div className={styles.label}>
                    <div className={styles.bookingIdLabel}>ID:</div>
                    <div className={styles.student}>j3dhal8</div>
                  </div>
                  <div className={styles.label1}>
                    <div className={styles.bookingIdLabel}>Classroom:</div>
                    <div className={styles.student}>B-03-08</div>
                  </div>
                  <div className={styles.label2}>
                    <div className={styles.bookingIdLabel}>Date:</div>
                    <div className={styles.student}>Jan 1, 2023</div>
                  </div>
                  <div className={styles.frame}>
                    <div className={styles.bookingIdLabel}>Time:</div>
                    <div className={styles.student}>10:00</div>
                    <div className={styles.student}>am</div>
                    <div className={styles.student}>-</div>
                    <div className={styles.student}>12:00</div>
                    <div className={styles.student}>pm</div>
                  </div>
                  <div className={styles.label4}>
                    <div className={styles.bookingIdLabel}>Purpose:</div>
                    <div className={styles.student}>Group Study</div>
                  </div>
                  <div className={styles.label5}>
                    <div className={styles.bookingIdLabel}>Classroom Type:</div>
                    <div className={styles.student}>Lab</div>
                  </div>
                  <div className={styles.label6}>
                    <div className={styles.bookingIdLabel}>Classroom Size:</div>
                    <div className={styles.student}>20-30 people</div>
                  </div>
                </div>
              </div>
              <div className={styles.buttonParent}>
                <Button
                  className={styles.button}
                  color="primary"
                  size="medium"
                  variant="contained"
                  onClick={onButtonClick}
                >
                  Back
                </Button>
                <Button
                  className={styles.button}
                  color="primary"
                  size="medium"
                  variant="outlined"
                  onClick={openCancelBookingConfirmation}
                >
                  Cancel Booking
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.sidePanel} />
        </div>
      </div>
      {isCancelBookingConfirmationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCancelBookingConfirmation}
        >
          <CancelBookingConfirmation onClose={closeCancelBookingConfirmation} />
        </PortalPopup>
      )}
    </>
  );
};

export default StudentBookingDetails;
