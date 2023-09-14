import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./student-report-issue.module.css";
const StudentReportIssue = () => {
  const router = useRouter();

  const onAPClassroomLogoClick = useCallback(() => {
    router.push("/student-dashboard");
  }, [router]);

  const onDashboardClick = useCallback(() => {
    router.push("/student-dashboard");
  }, [router]);

  const onMenuItemClick = useCallback(() => {
    router.push("/student-available-class");
  }, [router]);

  const onMenuItem1Click = useCallback(() => {
    router.push("/student-book-classroom");
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

  const onDashboard2Click = useCallback(() => {
    // Please sync "Student Support" to the project
  }, []);

  const onDashboard3Click = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  const onReportListContainerClick = useCallback(() => {
    router.push("/student-report-details");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/student-report-new-issue");
  }, [router]);

  return (
    <div className={styles.studentReportIssue}>
      <div className={styles.sideBar}>
        <div className={styles.logo}>
          <a
            className={styles.apclassroomLogo}
            onClick={onAPClassroomLogoClick}
          >
            <img
              className={styles.apclassroomLogoIcon}
              alt=""
              src="/undefined40.png"
            />
            <div className={styles.apclassroom}>APClassroom</div>
          </a>
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
                <a className={styles.dashboard} onClick={onDashboardClick}>
                  <img
                    className={styles.dashboardIcon}
                    alt=""
                    src="/undefined54.png"
                  />
                  <div className={styles.apclassroom}>Dashboard</div>
                </a>
                <a className={styles.dashboard} onClick={onMenuItemClick}>
                  <img
                    className={styles.dashboardIcon}
                    alt=""
                    src="/undefined43.png"
                  />
                  <div className={styles.apclassroom}>Available Classes</div>
                </a>
                <a className={styles.dashboard} onClick={onMenuItem1Click}>
                  <img
                    className={styles.dashboardIcon}
                    alt=""
                    src="/undefined44.png"
                  />
                  <div className={styles.apclassroom}>Book Classroom</div>
                </a>
                <a className={styles.dashboard4}>
                  <img
                    className={styles.reportIcon}
                    alt=""
                    src="/undefined74.png"
                  />
                  <div className={styles.apclassroom}>Report Issues</div>
                </a>
                <a className={styles.dashboard} onClick={onMenuItem2Click}>
                  <img
                    className={styles.dashboardIcon}
                    alt=""
                    src="/undefined56.png"
                  />
                  <div className={styles.apclassroom}>Request Resources</div>
                </a>
                <a className={styles.dashboard} onClick={onMenuItem3Click}>
                  <img
                    className={styles.dashboardIcon}
                    alt=""
                    src="/undefined47.png"
                  />
                  <div className={styles.apclassroom}>View Bookings</div>
                </a>
                <a className={styles.dashboard} onClick={onMenuItem4Click}>
                  <img
                    className={styles.dashboardIcon}
                    alt=""
                    src="/undefined48.png"
                  />
                  <div className={styles.apclassroom}>Settings</div>
                </a>
                <a className={styles.dashboard8} onClick={onDashboard2Click}>
                  <img
                    className={styles.dashboardIcon}
                    alt=""
                    src="/undefined49.png"
                  />
                  <div className={styles.apclassroom}>Support</div>
                </a>
              </div>
              <div className={styles.alignBottom}>
                <a className={styles.dashboard10} onClick={onDashboard3Click}>
                  <img
                    className={styles.tablerlogout2Icon}
                    alt=""
                    src="/undefined50.png"
                  />
                  <div className={styles.apclassroom}>Log out</div>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.mainPanel}>
          <form className={styles.searchClassForm} id="classroomSearch">
            <div className={styles.header}>
              <b className={styles.findClassroom}>Find Classroom</b>
            </div>
            <div className={styles.form}>
              <TextField
                className={styles.textField}
                color="primary"
                name="classroomSearch"
                id="classroomSearch"
                label="Classroom Name"
                placeholder="e.g. B-03-02"
                required={true}
                sx={{ width: 320 }}
                variant="outlined"
                type="search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon>search_sharp</Icon>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button color="primary" size="medium" variant="contained">
                Search Reports
              </Button>
            </div>
          </form>
          <div className={styles.searchClassForm1}>
            <div className={styles.header}>
              <b className={styles.student}>Reported Issues in Class B-03-07</b>
            </div>
            <div className={styles.reportedIssues}>
              <div
                className={styles.reportList}
                onClick={onReportListContainerClick}
              >
                <div className={styles.announcement}>
                  <div className={styles.wifiIconWrapper}>
                    <div className={styles.wifiIcon}>
                      <img
                        className={styles.reportIcon}
                        alt=""
                        src="/undefined75.png"
                      />
                    </div>
                  </div>
                  <div className={styles.equipmentRequestForABlacParent}>
                    <div className={styles.equipmentRequest}>
                      WiFi - weak signal at block B
                    </div>
                    <div className={styles.jan12023}>Jan 1, 2023</div>
                    <div className={styles.status}>
                      <div className={styles.equipmentRequest}>In Progress</div>
                    </div>
                  </div>
                  <div className={styles.arrowRightWrapper}>
                    <img
                      className={styles.arrowRightIcon}
                      alt=""
                      src="/undefined14.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.reportList1}>
                <div className={styles.announcement}>
                  <div className={styles.wifiIconWrapper}>
                    <div className={styles.socketIcon}>
                      <img
                        className={styles.tablerlogout2Icon}
                        alt=""
                        src="/undefined70.png"
                      />
                    </div>
                  </div>
                  <div className={styles.equipmentRequestForABlacParent}>
                    <div className={styles.equipmentRequest}>
                      Plug Point - not working at B-03-09
                    </div>
                    <div className={styles.jan12023}>Jan 1, 2023</div>
                    <div className={styles.status2}>
                      <div className={styles.equipmentRequest}>Not Valid</div>
                    </div>
                  </div>
                  <div className={styles.arrowRightWrapper}>
                    <img
                      className={styles.arrowRightIcon}
                      alt=""
                      src="/undefined14.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.reportList1}>
                <div className={styles.announcement}>
                  <div className={styles.wifiIconWrapper}>
                    <div className={styles.socketIcon}>
                      <img
                        className={styles.tablerlogout2Icon}
                        alt=""
                        src="/undefined70.png"
                      />
                    </div>
                  </div>
                  <div className={styles.equipmentRequestForABlacParent}>
                    <div className={styles.equipmentRequest}>
                      Plug Point - not working at D-07-08
                    </div>
                    <div className={styles.jan12023}>Jan 1, 2023</div>
                    <div className={styles.status4}>
                      <div className={styles.equipmentRequest}>Solved</div>
                    </div>
                  </div>
                  <div className={styles.arrowRightWrapper}>
                    <img
                      className={styles.arrowRightIcon}
                      alt=""
                      src="/undefined14.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dontFindYourIssueParent}>
              <div className={styles.apclassroom}>Don’t find your issue?</div>
              <Button
                className={styles.button}
                color="primary"
                name="newReportButton"
                id="newReportButton"
                size="medium"
                variant="contained"
                href="/student-report-new-issue"
                onClick={onButton1Click}
              >
                Add New Report
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.sidePanel}>
          <div className={styles.sellingProducts}>
            <div className={styles.numberOfReportsParent}>
              <b className={styles.student}>Unvalid Reports</b>
              <div className={styles.reportIconParent}>
                <img
                  className={styles.reportIcon1}
                  alt=""
                  src="/undefined76.png"
                />
                <b className={styles.student}>1</b>
              </div>
              <div className={styles.viewReports}>view reports</div>
            </div>
          </div>
          <div className={styles.sellingProducts}>
            <div className={styles.numberOfReportsParent}>
              <b className={styles.student}>Pending Reports</b>
              <div className={styles.reportIconParent}>
                <img
                  className={styles.reportIcon1}
                  alt=""
                  src="/undefined77.png"
                />
                <b className={styles.student}>3</b>
              </div>
              <div className={styles.viewReports}>view reports</div>
            </div>
          </div>
          <div className={styles.sellingProducts}>
            <div className={styles.numberOfReportsParent}>
              <b className={styles.student}>Solved Reports</b>
              <div className={styles.reportIconParent}>
                <img
                  className={styles.reportIcon1}
                  alt=""
                  src="/undefined78.png"
                />
                <b className={styles.student}>1</b>
              </div>
              <div className={styles.viewReports}>view reports</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentReportIssue;
