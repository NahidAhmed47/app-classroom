import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./student-resource-request-detai.module.css";
const StudentResourceRequestDetai = () => {
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

  return (
    <div className={styles.studentResourceRequestDetai}>
      <div className={styles.sideBar}>
        <div className={styles.logo}>
          <div
            className={styles.apclassroomLogo}
            onClick={onAPClassroomLogoContainerClick}
          >
            <img
              className={styles.apclassroomLogoIcon}
              alt=""
              src="/undefined53.png"
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
            <b className={styles.student}>Resource Request Details</b>
            <div className={styles.descriptionThePlugPointHeParent}>
              <div className={styles.student}>
                <b>Description:</b>
                <span>
                  {" "}
                  The plug point here is not working in classroom B-03-09
                </span>
              </div>
              <div className={styles.whatsappImage20230728At1Parent}>
                <img
                  className={styles.whatsappImage20230728At1}
                  alt=""
                  src="/undefined58.png"
                />
                <div className={styles.frameParent}>
                  <div className={styles.labelParent}>
                    <div className={styles.label}>
                      <div className={styles.bookingIdLabel}>ID:</div>
                      <div className={styles.student}>j3dhal8</div>
                    </div>
                    <div className={styles.label}>
                      <div className={styles.bookingIdLabel}>Date:</div>
                      <div className={styles.student}>Jan 1, 2023</div>
                    </div>
                    <div className={styles.label}>
                      <div className={styles.bookingIdLabel}>Location:</div>
                      <div className={styles.student}>B-03-08</div>
                    </div>
                    <div className={styles.label}>
                      <div className={styles.bookingIdLabel}>
                        Time Reported:
                      </div>
                      <div className={styles.student}>10:00</div>
                      <div className={styles.student}>am</div>
                    </div>
                    <div className={styles.label}>
                      <div className={styles.bookingIdLabel}>
                        Resource Type:
                      </div>
                      <div className={styles.student}>Electrical</div>
                    </div>
                    <div className={styles.label}>
                      <div className={styles.bookingIdLabel}>Entity:</div>
                      <div className={styles.student}>Plug Point</div>
                    </div>
                    <div className={styles.label}>
                      <div className={styles.bookingIdLabel}>Urgency:</div>
                      <div className={styles.student}>Medium</div>
                    </div>
                  </div>
                  <Button color="primary" size="medium" variant="contained">
                    Upvote
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.buttonParent}>
              <Button color="primary" size="medium" variant="contained">
                Back
              </Button>
              <Button color="primary" size="medium" variant="outlined">
                Cancel Booking
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.sidePanel} />
      </div>
    </div>
  );
};

export default StudentResourceRequestDetai;
