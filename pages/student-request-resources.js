import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./student-request-resources.module.css";
const StudentRequestResources = () => {
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

  const onRequestListContainerClick = useCallback(() => {
    router.push("/student-resource-request-detai");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/student-request-resources-form");
  }, [router]);

  return (
    <div className={styles.studentRequestResources}>
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
                <div className={styles.dashboard5}>
                  <img
                    className={styles.resourcesIcon}
                    alt=""
                    src="/undefined69.png"
                  />
                  <div className={styles.apclassroom}>Request Resources</div>
                </div>
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
                    src="/undefined48.png"
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
          <div className={styles.searchClassForm}>
            <div className={styles.header}>
              <b className={styles.student}>Find Classroom</b>
            </div>
            <div className={styles.form}>
              <TextField
                className={styles.textField}
                color="primary"
                name="classroomSearch"
                id="classroomSearch"
                label="Classroom Name"
                placeholder="e.g. B-03-02"
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
              <Button
                color="primary"
                name="searchReportButton"
                id="searchReportButton"
                variant="contained"
              >
                Search Reports
              </Button>
            </div>
          </div>
          <div className={styles.searchClassForm1}>
            <div className={styles.header}>
              <b className={styles.student}>
                Requested Resources in Classroom B-08-03
              </b>
            </div>
            <div className={styles.reportedIssues}>
              <div
                className={styles.requestList}
                onClick={onRequestListContainerClick}
              >
                <div className={styles.announcement}>
                  <div className={styles.requestIcon}>
                    <div className={styles.wifiIcon}>
                      <img
                        className={styles.tablerlogout2Icon}
                        alt=""
                        src="/undefined13.png"
                      />
                    </div>
                  </div>
                  <div className={styles.equipmentRequestForABlacParent}>
                    <div className={styles.equipmentRequest}>
                      Equipment - request for a black marker pen
                    </div>
                    <div className={styles.jan12023}>Jan 1, 2023</div>
                    <div className={styles.status}>
                      <div className={styles.equipmentRequest}>Pending</div>
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
              <div className={styles.requestList1}>
                <div className={styles.announcement}>
                  <div className={styles.requestIcon}>
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
                      Equipment - request for more plug points
                    </div>
                    <div className={styles.jan12023}>Jan 1, 2023</div>
                    <div className={styles.status2}>
                      <div className={styles.equipmentRequest}>Fulfilled</div>
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
            <div className={styles.cantFindWhatYouNeedParent}>
              <div className={styles.apclassroom}>
                Can’t find what you need?
              </div>
              <Button
                className={styles.button}
                color="primary"
                name="newRequestButton"
                id="newRequestButton"
                variant="contained"
                href="/student-request-resources-form"
                onClick={onButton1Click}
              >
                Add New Request
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.sidePanel}>
          <div className={styles.sellingProducts}>
            <div className={styles.numberOfReportsParent}>
              <b className={styles.student}>Denied Requests</b>
              <div className={styles.resourcesIconParent}>
                <img
                  className={styles.resourcesIcon1}
                  alt=""
                  src="/undefined88.png"
                />
                <b className={styles.student}>3</b>
              </div>
              <div className={styles.viewReports}>view reports</div>
            </div>
          </div>
          <div className={styles.sellingProducts}>
            <div className={styles.numberOfReportsParent}>
              <b className={styles.student}>Pending Requests</b>
              <div className={styles.resourcesIconParent}>
                <img
                  className={styles.resourcesIcon1}
                  alt=""
                  src="/undefined89.png"
                />
                <b className={styles.student}>3</b>
              </div>
              <div className={styles.viewReports}>view reports</div>
            </div>
          </div>
          <div className={styles.sellingProducts}>
            <div className={styles.numberOfReportsParent}>
              <b className={styles.student}>Fulfilled Requests</b>
              <div className={styles.resourcesIconParent}>
                <img
                  className={styles.resourcesIcon1}
                  alt=""
                  src="/undefined90.png"
                />
                <b className={styles.student}>3</b>
              </div>
              <div className={styles.viewReports}>view reports</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRequestResources;
