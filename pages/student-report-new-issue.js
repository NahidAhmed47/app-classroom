import { useState, useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import ModalReportIssueSuccess from "../components/modal-report-issue-success";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./student-report-new-issue.module.css";
const StudentReportNewIssue = () => {
  const [
    isModalReportIssueSuccessPopupOpen,
    setModalReportIssueSuccessPopupOpen,
  ] = useState(false);
  const router = useRouter();

  const onAPClassroomLogoContainerClick = useCallback(() => {
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

  const onDashboardContainerClick = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  const openModalReportIssueSuccessPopup = useCallback(() => {
    setModalReportIssueSuccessPopupOpen(true);
  }, []);

  const closeModalReportIssueSuccessPopup = useCallback(() => {
    setModalReportIssueSuccessPopupOpen(false);
  }, []);

  const onReportListContainerClick = useCallback(() => {
    router.push("/student-report-details");
  }, [router]);

  return (
    <>
      <div className={styles.studentReportNewIssue}>
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
              <p className={styles.roleLabel} id="user-role-label">
                <b className={styles.student}>Student</b>
              </p>
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
                  <div
                    className={styles.dashboard10}
                    onClick={onDashboardContainerClick}
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
        <main className={styles.content} id="main">
          <div className={styles.mainPanel}>
            <form className={styles.searchClassForm} id="reportIssueForm">
              <div className={styles.header}>
                <b className={styles.reportIssue}>Report Issue</b>
              </div>
              <div className={styles.form}>
                <div className={styles.frameParent}>
                  <div className={styles.textFieldParent}>
                    <FormControl
                      className={styles.textField}
                      variant="outlined"
                    >
                      <InputLabel color="primary">Report Type</InputLabel>
                      <Select
                        color="primary"
                        name="reportTypeSelect"
                        id="reportTypeSelect"
                        defaultValue="Select a type"
                        size="medium"
                        label="Report Type"
                      >
                        <MenuItem value="asset">asset</MenuItem>
                        <MenuItem value="utilities">utilities</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <FormControl
                      className={styles.textField}
                      variant="outlined"
                    >
                      <InputLabel color="primary">Entity</InputLabel>
                      <Select
                        color="primary"
                        name="entitySelect"
                        id="entitySelect"
                        defaultValue="Select an entity"
                        size="medium"
                        label="Entity"
                      >
                        <MenuItem value="chair">chair</MenuItem>
                        <MenuItem value="table">table</MenuItem>
                        <MenuItem value="marker">marker</MenuItem>
                        <MenuItem value="plug points">plug points</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </div>
                  <TextField
                    className={styles.textField2}
                    color="primary"
                    label="e.g. not working"
                    size="medium"
                    placeholder="Placeholder"
                    required={true}
                    variant="outlined"
                    type="text"
                  />
                  <div className={styles.textFieldGroup}>
                    <FormControl
                      className={styles.textField}
                      variant="outlined"
                    >
                      <InputLabel color="primary">
                        Select a classroom
                      </InputLabel>
                      <Select
                        color="primary"
                        defaultValue="Select a classroom"
                        size="medium"
                        label="Select a classroom"
                      />
                      <FormHelperText />
                    </FormControl>
                    <FormControl
                      className={styles.textField}
                      variant="outlined"
                    >
                      <InputLabel color="primary">
                        Select urgency level
                      </InputLabel>
                      <Select
                        color="primary"
                        defaultValue="Urgency"
                        size="medium"
                        label="Select urgency level"
                      />
                      <FormHelperText />
                    </FormControl>
                  </div>
                  <div className={styles.uploadButtonWrapper}>
                    <div className={styles.uploadButton}>
                      <div className={styles.labelText}>
                        <div className={styles.labelText1}>
                          Please upload an image of the issue faced:
                        </div>
                      </div>
                      <div className={styles.button}>
                        <input className={styles.stateLayer} type="file" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.buttonParent}>
                <Button
                  className={styles.button1}
                  color="primary"
                  size="medium"
                  variant="contained"
                  onClick={openModalReportIssueSuccessPopup}
                >
                  Submit Report
                </Button>
                <Button color="primary" size="medium" variant="outlined">
                  Clear Form
                </Button>
              </div>
            </form>
            <div className={styles.searchClassForm1}>
              <div className={styles.header}>
                <b className={styles.student}>Your Reported Issues</b>
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
                        <div className={styles.equipmentRequest}>
                          In Progress
                        </div>
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
                <div className={styles.form}>
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
                <div className={styles.form}>
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
        </main>
      </div>
      {isModalReportIssueSuccessPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalReportIssueSuccessPopup}
        >
          <ModalReportIssueSuccess
            onClose={closeModalReportIssueSuccessPopup}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default StudentReportNewIssue;
