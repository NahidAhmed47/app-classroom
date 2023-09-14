import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import CancelBookingConfirmation from "/";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./student-view-bookings.module.css";
const StudentViewBookings = () => {
  const [isCancelBookingConfirmationOpen, setCancelBookingConfirmationOpen] =
    useState(false);
  const [isCancelBookingConfirmation1Open, setCancelBookingConfirmation1Open] =
    useState(false);
  const [isCancelBookingConfirmation2Open, setCancelBookingConfirmation2Open] =
    useState(false);
  const [isCancelBookingConfirmation3Open, setCancelBookingConfirmation3Open] =
    useState(false);
  const [isCancelBookingConfirmation4Open, setCancelBookingConfirmation4Open] =
    useState(false);
  const [isCancelBookingConfirmation5Open, setCancelBookingConfirmation5Open] =
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
    router.push("/student-book-classroom");
  }, [router]);

  const onMenuItem2Click = useCallback(() => {
    router.push("/student-report-issue");
  }, [router]);

  const onMenuItem3Click = useCallback(() => {
    router.push("/student-request-resources");
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

  const openCancelBookingConfirmation = useCallback(() => {
    setCancelBookingConfirmationOpen(true);
  }, []);

  const closeCancelBookingConfirmation = useCallback(() => {
    setCancelBookingConfirmationOpen(false);
  }, []);

  const openCancelBookingConfirmation1 = useCallback(() => {
    setCancelBookingConfirmation1Open(true);
  }, []);

  const closeCancelBookingConfirmation1 = useCallback(() => {
    setCancelBookingConfirmation1Open(false);
  }, []);

  const openCancelBookingConfirmation2 = useCallback(() => {
    setCancelBookingConfirmation2Open(true);
  }, []);

  const closeCancelBookingConfirmation2 = useCallback(() => {
    setCancelBookingConfirmation2Open(false);
  }, []);

  const openCancelBookingConfirmation3 = useCallback(() => {
    setCancelBookingConfirmation3Open(true);
  }, []);

  const closeCancelBookingConfirmation3 = useCallback(() => {
    setCancelBookingConfirmation3Open(false);
  }, []);

  const openCancelBookingConfirmation4 = useCallback(() => {
    setCancelBookingConfirmation4Open(true);
  }, []);

  const closeCancelBookingConfirmation4 = useCallback(() => {
    setCancelBookingConfirmation4Open(false);
  }, []);

  const openCancelBookingConfirmation5 = useCallback(() => {
    setCancelBookingConfirmation5Open(true);
  }, []);

  const closeCancelBookingConfirmation5 = useCallback(() => {
    setCancelBookingConfirmation5Open(false);
  }, []);

  return (
    <>
      <div className={styles.studentViewBookings}>
        <div className={styles.sideBar}>
          <div className={styles.logo}>
            <div
              className={styles.apclassroomLogo}
              onClick={onAPClassroomLogoContainerClick}
            >
              <img
                className={styles.apclassroomLogoIcon}
                alt=""
                src="/undefined40.png"
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
                  <a className={styles.menuItem} onClick={onMenuItem1Click}>
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined44.png"
                    />
                    <div className={styles.apclassroom}>Book Classroom</div>
                  </a>
                  <a className={styles.menuItem} onClick={onMenuItem2Click}>
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined45.png"
                    />
                    <div className={styles.apclassroom}>Report Issues</div>
                  </a>
                  <a className={styles.menuItem} onClick={onMenuItem3Click}>
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined56.png"
                    />
                    <div className={styles.apclassroom}>Request Resources</div>
                  </a>
                  <div className={styles.dashboard6}>
                    <img
                      className={styles.bookmarkIcon}
                      alt=""
                      src="/undefined82.png"
                    />
                    <div className={styles.apclassroom}>VIew Bookings</div>
                  </div>
                  <a className={styles.menuItem} onClick={onMenuItem4Click}>
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined48.png"
                    />
                    <div className={styles.apclassroom}>Settings</div>
                  </a>
                  <div
                    className={styles.dashboard9}
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
                    className={styles.dashboard11}
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
            <div className={styles.searchClassForm}>
              <div className={styles.header}>
                <b className={styles.student}>Classroom Bookings</b>
              </div>
              <div className={styles.reportedIssues}>
                <div className={styles.booking}>
                  <div className={styles.bookingStatusIcon}>
                    <img
                      className={styles.tablerlogout2Icon}
                      alt=""
                      src="/undefined10.png"
                    />
                  </div>
                  <div className={styles.b0307Parent}>
                    <div className={styles.b0307}>B-03-07</div>
                    <div className={styles.details}>
                      <div className={styles.date}>Date:</div>
                      <div className={styles.date}>Jan 1, 2023</div>
                      <div className={styles.date}>|</div>
                      <div className={styles.date}>Time:</div>
                      <div className={styles.date}>10:00</div>
                      <div className={styles.date}>am</div>
                      <div className={styles.date}>-</div>
                      <div className={styles.date}>12:00</div>
                      <div className={styles.date}>pm</div>
                    </div>
                    <div className={styles.details1}>
                      <div className={styles.purpose}>Purpose:</div>
                      <div className={styles.purpose}>Group Discussion</div>
                    </div>
                  </div>
                  <div className={styles.buttonParent}>
                    <Button
                      color="primary"
                      name="viewDetailsButton"
                      variant="contained"
                      href="/student-booking-details"
                    >
                      View Details
                    </Button>
                    <Button
                      className={styles.button}
                      color="primary"
                      name="cancelBookingButton"
                      id="cancelBookingButton"
                      variant="outlined"
                      onClick={openCancelBookingConfirmation}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
                <div className={styles.booking}>
                  <div className={styles.bookingStatusIcon1}>
                    <img
                      className={styles.tablerlogout2Icon}
                      alt=""
                      src="/undefined67.png"
                    />
                  </div>
                  <div className={styles.b0307Parent}>
                    <div className={styles.b0307}>B-03-07</div>
                    <div className={styles.details}>
                      <div className={styles.date}>Date:</div>
                      <div className={styles.date}>Jan 1, 2023</div>
                      <div className={styles.date}>|</div>
                      <div className={styles.date}>Time:</div>
                      <div className={styles.date}>10:00</div>
                      <div className={styles.date}>am</div>
                      <div className={styles.date}>-</div>
                      <div className={styles.date}>12:00</div>
                      <div className={styles.date}>pm</div>
                    </div>
                    <div className={styles.details1}>
                      <div className={styles.purpose}>Purpose:</div>
                      <div className={styles.purpose}>Group Discussion</div>
                    </div>
                  </div>
                  <div className={styles.buttonParent}>
                    <Button
                      color="primary"
                      name="viewDetailsButton"
                      variant="contained"
                      href="/student-booking-details"
                    >
                      View Details
                    </Button>
                    <Button
                      className={styles.button}
                      color="primary"
                      name="cancelBookingButton"
                      id="cancelBookingButton"
                      variant="outlined"
                      onClick={openCancelBookingConfirmation1}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
                <div className={styles.booking}>
                  <div className={styles.bookingStatusIcon2}>
                    <img
                      className={styles.tablerlogout2Icon}
                      alt=""
                      src="/undefined68.png"
                    />
                  </div>
                  <div className={styles.b0307Parent}>
                    <div className={styles.b0307}>B-03-07</div>
                    <div className={styles.details}>
                      <div className={styles.date}>Date:</div>
                      <div className={styles.date}>Jan 1, 2023</div>
                      <div className={styles.date}>|</div>
                      <div className={styles.date}>Time:</div>
                      <div className={styles.date}>10:00</div>
                      <div className={styles.date}>am</div>
                      <div className={styles.date}>-</div>
                      <div className={styles.date}>12:00</div>
                      <div className={styles.date}>pm</div>
                    </div>
                    <div className={styles.details1}>
                      <div className={styles.purpose}>Purpose:</div>
                      <div className={styles.purpose}>Group Discussion</div>
                    </div>
                  </div>
                  <div className={styles.buttonParent}>
                    <Button
                      color="primary"
                      name="viewDetailsButton"
                      variant="contained"
                      href="/student-booking-details"
                    >
                      View Details
                    </Button>
                    <Button
                      className={styles.button}
                      color="primary"
                      name="cancelBookingButton"
                      id="cancelBookingButton"
                      variant="outlined"
                      onClick={openCancelBookingConfirmation2}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
                <div className={styles.booking}>
                  <div className={styles.bookingStatusIcon}>
                    <img
                      className={styles.tablerlogout2Icon}
                      alt=""
                      src="/undefined10.png"
                    />
                  </div>
                  <div className={styles.b0307Parent}>
                    <div className={styles.b0307}>B-03-07</div>
                    <div className={styles.details}>
                      <div className={styles.date}>Date:</div>
                      <div className={styles.date}>Jan 1, 2023</div>
                      <div className={styles.date}>|</div>
                      <div className={styles.date}>Time:</div>
                      <div className={styles.date}>10:00</div>
                      <div className={styles.date}>am</div>
                      <div className={styles.date}>-</div>
                      <div className={styles.date}>12:00</div>
                      <div className={styles.date}>pm</div>
                    </div>
                    <div className={styles.details1}>
                      <div className={styles.purpose}>Purpose:</div>
                      <div className={styles.purpose}>Group Discussion</div>
                    </div>
                  </div>
                  <div className={styles.buttonParent}>
                    <Button
                      color="primary"
                      name="viewDetailsButton"
                      variant="contained"
                      href="/student-booking-details"
                    >
                      View Details
                    </Button>
                    <Button
                      className={styles.button}
                      color="primary"
                      name="cancelBookingButton"
                      id="cancelBookingButton"
                      variant="outlined"
                      onClick={openCancelBookingConfirmation3}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
                <div className={styles.booking}>
                  <div className={styles.bookingStatusIcon1}>
                    <img
                      className={styles.tablerlogout2Icon}
                      alt=""
                      src="/undefined67.png"
                    />
                  </div>
                  <div className={styles.b0307Parent}>
                    <div className={styles.b0307}>B-03-07</div>
                    <div className={styles.details}>
                      <div className={styles.date}>Date:</div>
                      <div className={styles.date}>Jan 1, 2023</div>
                      <div className={styles.date}>|</div>
                      <div className={styles.date}>Time:</div>
                      <div className={styles.date}>10:00</div>
                      <div className={styles.date}>am</div>
                      <div className={styles.date}>-</div>
                      <div className={styles.date}>12:00</div>
                      <div className={styles.date}>pm</div>
                    </div>
                    <div className={styles.details1}>
                      <div className={styles.purpose}>Purpose:</div>
                      <div className={styles.purpose}>Group Discussion</div>
                    </div>
                  </div>
                  <div className={styles.buttonParent}>
                    <Button
                      color="primary"
                      name="viewDetailsButton"
                      variant="contained"
                      href="/student-booking-details"
                    >
                      View Details
                    </Button>
                    <Button
                      className={styles.button}
                      color="primary"
                      name="cancelBookingButton"
                      id="cancelBookingButton"
                      variant="outlined"
                      onClick={openCancelBookingConfirmation4}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
                <div className={styles.booking}>
                  <div className={styles.bookingStatusIcon5}>
                    <img
                      className={styles.tablerlogout2Icon}
                      alt=""
                      src="/undefined83.png"
                    />
                  </div>
                  <div className={styles.b0307Parent}>
                    <div className={styles.b0307}>B-03-07</div>
                    <div className={styles.details}>
                      <div className={styles.date}>Date:</div>
                      <div className={styles.date}>Jan 1, 2023</div>
                      <div className={styles.date}>|</div>
                      <div className={styles.date}>Time:</div>
                      <div className={styles.date}>10:00</div>
                      <div className={styles.date}>am</div>
                      <div className={styles.date}>-</div>
                      <div className={styles.date}>12:00</div>
                      <div className={styles.date}>pm</div>
                    </div>
                    <div className={styles.details1}>
                      <div className={styles.purpose}>Purpose:</div>
                      <div className={styles.purpose}>Group Discussion</div>
                    </div>
                  </div>
                  <div className={styles.buttonParent}>
                    <Button
                      color="primary"
                      name="viewDetailsButton"
                      variant="contained"
                      href="/student-booking-details"
                    >
                      View Details
                    </Button>
                    <Button
                      className={styles.button}
                      color="primary"
                      name="cancelBookingButton"
                      id="cancelBookingButton"
                      variant="outlined"
                      onClick={openCancelBookingConfirmation5}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sidePanel}>
            <div className={styles.sellingProducts}>
              <div className={styles.numberOfReportsParent}>
                <b className={styles.numberOfReports}>Confirmed Bookings</b>
                <div className={styles.bookmarkIconParent}>
                  <img
                    className={styles.bookmarkIcon1}
                    alt=""
                    src="/undefined84.png"
                  />
                  <b className={styles.student}>2</b>
                </div>
                <div className={styles.viewReports}>view reports</div>
              </div>
            </div>
            <div className={styles.sellingProducts}>
              <div className={styles.numberOfReportsParent}>
                <b className={styles.numberOfReports}>Pending Bookings</b>
                <div className={styles.bookmarkIconParent}>
                  <img
                    className={styles.bookmarkIcon1}
                    alt=""
                    src="/undefined85.png"
                  />
                  <b className={styles.student}>2</b>
                </div>
                <div className={styles.viewReports}>view reports</div>
              </div>
            </div>
            <div className={styles.sellingProducts}>
              <div className={styles.numberOfReportsParent}>
                <b className={styles.numberOfReports}>Rejected Bookings</b>
                <div className={styles.bookmarkIconParent}>
                  <img
                    className={styles.bookmarkIcon1}
                    alt=""
                    src="/undefined86.png"
                  />
                  <b className={styles.student}>1</b>
                </div>
                <div className={styles.viewReports}>view reports</div>
              </div>
            </div>
            <div className={styles.sellingProducts}>
              <div className={styles.numberOfReportsParent}>
                <b className={styles.numberOfReports}>Past Bookings</b>
                <div className={styles.bookmarkIconParent}>
                  <img
                    className={styles.bookmarkIcon1}
                    alt=""
                    src="/undefined87.png"
                  />
                  <b className={styles.student}>1</b>
                </div>
                <div className={styles.viewReports}>view reports</div>
              </div>
            </div>
          </div>
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
      {isCancelBookingConfirmation1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCancelBookingConfirmation1}
        >
          <CancelBookingConfirmation
            onClose={closeCancelBookingConfirmation1}
          />
        </PortalPopup>
      )}
      {isCancelBookingConfirmation2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCancelBookingConfirmation2}
        >
          <CancelBookingConfirmation
            onClose={closeCancelBookingConfirmation2}
          />
        </PortalPopup>
      )}
      {isCancelBookingConfirmation3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCancelBookingConfirmation3}
        >
          <CancelBookingConfirmation
            onClose={closeCancelBookingConfirmation3}
          />
        </PortalPopup>
      )}
      {isCancelBookingConfirmation4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCancelBookingConfirmation4}
        >
          <CancelBookingConfirmation
            onClose={closeCancelBookingConfirmation4}
          />
        </PortalPopup>
      )}
      {isCancelBookingConfirmation5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCancelBookingConfirmation5}
        >
          <CancelBookingConfirmation
            onClose={closeCancelBookingConfirmation5}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default StudentViewBookings;
