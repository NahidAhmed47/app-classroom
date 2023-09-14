import { useState, useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useRouter } from "next/router";
import styles from "./student-book-classroom.module.css";
const StudentBookClassroom = () => {
  const [textFieldDateTimePickerValue, setTextFieldDateTimePickerValue] =
    useState(null);
  const [dialPickerDarkKeyboardPickValue, setDialPickerDarkKeyboardPickValue] =
    useState(null);
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

  const onButtonContainer7Click = useCallback(() => {
    router.push("/student-book-classroom-form");
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.studentBookClassroom}>
        <div className={styles.sideBar}>
          <div className={styles.logo}>
            <div
              className={styles.apclassroomLogo}
              onClick={onAPClassroomLogoContainerClick}
            >
              <img
                className={styles.apclassroomLogoIcon}
                alt=""
                src="/undefined91.png"
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
          <div className={styles.navbarresponsive}>
            <div className={styles.componentsnavbarResponsiveH}>
              <div className={styles.wrapper}>
                <div className={styles.componentsnavbarBrand}>
                  <img
                    className={styles.apclassroomLogoIcon}
                    alt=""
                    src="/undefined61.png"
                  />
                  <div className={styles.text}>
                    <div className={styles.text1}>APClassroom</div>
                  </div>
                </div>
              </div>
              <div className={styles.componentsnavbarToggler}>
                <img
                  className={styles.tablerlogout2Icon}
                  alt=""
                  src="/undefined62.png"
                />
              </div>
            </div>
            <div className={styles.zeroHeight}>
              <div className={styles.wrapper1}>
                <div className={styles.componentsnavbarCollapse}>
                  <div className={styles.navFixedHeight}>
                    <div className={styles.scrollerHeightChangeHere}>
                      <div className={styles.ignore} />
                      <div className={styles.ignore} />
                    </div>
                    <div className={styles.scroller}>
                      <div className={styles.navbarNav}>
                        <div className={styles.navItem1stLevel}>
                          <div className={styles.navItem}>
                            <div className={styles.wrapper2}>
                              <div className={styles.text2}>
                                <div className={styles.text3}>Dashboard</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.submenu}>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.navItem1stLevel1}>
                          <div className={styles.navItem}>
                            <div className={styles.wrapper2}>
                              <div className={styles.text2}>
                                <div className={styles.text3}>
                                  Available Classes
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.submenu}>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.navItem1stLevel1}>
                          <div className={styles.navItem}>
                            <div className={styles.wrapper2}>
                              <div className={styles.text2}>
                                <div className={styles.text3}>
                                  Book Classroom
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.submenu}>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.navItem1stLevel1}>
                          <div className={styles.navItem}>
                            <div className={styles.wrapper2}>
                              <div className={styles.text2}>
                                <div className={styles.text3}>
                                  Report Issues
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.submenu}>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.navItem1stLevel1}>
                          <div className={styles.navItem}>
                            <div className={styles.wrapper2}>
                              <div className={styles.text2}>
                                <div className={styles.text3}>
                                  Request Resources
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.submenu}>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.navItem1stLevel1}>
                          <div className={styles.navItem}>
                            <div className={styles.wrapper2}>
                              <div className={styles.text2}>
                                <div className={styles.text3}>
                                  View Bookings
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.submenu}>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.navItem1stLevel1}>
                          <div className={styles.navItem}>
                            <div className={styles.wrapper2}>
                              <div className={styles.text2}>
                                <div className={styles.text3}>Settings</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.submenu}>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.navItem1stLevel1}>
                          <div className={styles.navItem}>
                            <div className={styles.wrapper2}>
                              <div className={styles.text2}>
                                <div className={styles.text3}>Logout</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.submenu}>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                            <div className={styles.inlineNavItem2ndLevel}>
                              <div className={styles.text2}>
                                <div className={styles.text5}>
                                  Item 2nd Level
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.form}>
                    <div className={styles.formItem}>
                      <div className={styles.input}>
                        <div className={styles.inputBase}>
                          <div className={styles.placeholder}>
                            <div className={styles.inputPrefix}>
                              <div className={styles.iconWrapper}>
                                <div className={styles.widthChangeSizeHere}>
                                  <div className={styles.ignore} />
                                  <div className={styles.ignore} />
                                </div>
                                <div className={styles.iconWrapperH}>
                                  <div className={styles.heightChangeSizeHere}>
                                    <div className={styles.ignore} />
                                    <div className={styles.ignore} />
                                  </div>
                                  <img
                                    className={styles.iconWrapper1}
                                    alt=""
                                    src="/undefined63.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.placeholder1}>Search</div>
                          </div>
                          <div className={styles.spacer}>
                            <div className={styles.ignore} />
                            <div className={styles.ignore} />
                          </div>
                          <div className={styles.inputPrefix}>
                            <div className={styles.iconWrapper}>
                              <div className={styles.widthChangeSizeHere}>
                                <div className={styles.ignore} />
                                <div className={styles.ignore} />
                              </div>
                              <div className={styles.iconWrapperH}>
                                <div className={styles.heightChangeSizeHere}>
                                  <div className={styles.ignore} />
                                  <div className={styles.ignore} />
                                </div>
                                <img
                                  className={styles.iconWrapper1}
                                  alt=""
                                  src="/undefined64.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonList}>
                      <div className={styles.button}>
                        <div className={styles.icon}>
                          <div className={styles.widthChangeSizeHere2}>
                            <div className={styles.ignore} />
                            <div className={styles.ignore} />
                          </div>
                          <div className={styles.iconWrapperH}>
                            <div className={styles.heightChangeSizeHere2}>
                              <div className={styles.ignore} />
                              <div className={styles.ignore} />
                            </div>
                            <img
                              className={styles.iconWrapper1}
                              alt=""
                              src="/undefined65.png"
                            />
                          </div>
                        </div>
                        <div className={styles.text}>
                          <div className={styles.placeholder1}>Search</div>
                        </div>
                        <div className={styles.icon}>
                          <div className={styles.widthChangeSizeHere2}>
                            <div className={styles.ignore} />
                            <div className={styles.ignore} />
                          </div>
                          <div className={styles.iconWrapperH}>
                            <div className={styles.heightChangeSizeHere2}>
                              <div className={styles.ignore} />
                              <div className={styles.ignore} />
                            </div>
                            <img
                              className={styles.iconWrapper1}
                              alt=""
                              src="/undefined66.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainPanelParent}>
            <div className={styles.mainPanel}>
              <div className={styles.currentClassroomAvailability}>
                <b className={styles.student}>Book Classrooms</b>
                <div className={styles.buttonParent}>
                  <Button color="primary" size="medium" variant="contained">
                    B-03-01
                  </Button>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>B-03-02</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>B-03-03</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>B-03-04</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>B-03-05</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>B-03-06</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>B-03-07</div>
                    </div>
                  </div>
                  <div
                    className={styles.button7}
                    onClick={onButtonContainer7Click}
                  >
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>B-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>B-03-09</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>B-03-10</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-01</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-02</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-03</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-04</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-05</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-06</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-07</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>C-03-08</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sidePanel}>
              <form
                className={styles.searchClassForm}
                id="availableClassroomFilter"
              >
                <div className={styles.header}>
                  <b className={styles.criteria}>Criteria</b>
                </div>
                <div className={styles.form1}>
                  <TextField
                    className={styles.textField}
                    color="primary"
                    name="classNameInput"
                    id="classNameInput"
                    label="Classroom Name"
                    defaultValue="Classroom Name"
                    placeholder="e.g. B-03-02"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon>search_sharp</Icon>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <FormControl
                    className={styles.dialPickerDarkkeyboardPick}
                    variant="outlined"
                  >
                    <InputLabel color="primary">Classroom Type</InputLabel>
                    <Select
                      color="primary"
                      name="classTypeInput"
                      id="classTypeInput"
                      defaultValue="Any type"
                      size="medium"
                      label="Classroom Type"
                    >
                      <MenuItem value="Any type">Any type</MenuItem>
                      <MenuItem value="lab">lab</MenuItem>
                      <MenuItem value="auditorium">auditorium</MenuItem>
                      <MenuItem value="normal">normal</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <FormControl
                    className={styles.dialPickerDarkkeyboardPick}
                    variant="outlined"
                  >
                    <InputLabel color="primary">Clssroom Capacity</InputLabel>
                    <Select
                      color="primary"
                      name="classCapacitySelect"
                      id="classCapacitySelect"
                      defaultValue="Any capacity"
                      size="medium"
                      label="Clssroom Capacity"
                    >
                      <MenuItem value="Any capacity">Any capacity</MenuItem>
                      <MenuItem value="1-10">1-10</MenuItem>
                      <MenuItem value="11-20">11-20</MenuItem>
                      <MenuItem value="21-50">21-50</MenuItem>
                      <MenuItem value="51-100">51-100</MenuItem>
                      <MenuItem value="101-300">101-300</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <FormControl
                    className={styles.dialPickerDarkkeyboardPick}
                    variant="outlined"
                  >
                    <InputLabel color="primary">Duration</InputLabel>
                    <Select
                      color="primary"
                      name="durationSelect"
                      id="durationSelect"
                      defaultValue="30 minutes"
                      size="medium"
                      label="Duration"
                    >
                      <MenuItem value="30 minutes">30 minutes</MenuItem>
                      <MenuItem value="60 minutes">60 minutes</MenuItem>
                      <MenuItem value="90 minutes">90 minutes</MenuItem>
                      <MenuItem value="120 minutes">120 minutes</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className={styles.dialPickerDarkkeyboardPick}>
                    <DatePicker
                      label="Date"
                      value={textFieldDateTimePickerValue}
                      onChange={(newValue) => {
                        setTextFieldDateTimePickerValue(newValue);
                      }}
                      slotProps={{
                        textField: {
                          variant: "outlined",
                          name: "bookingDate",
                          id: "bookingDate",
                          size: "medium",
                          color: "primary",
                          helperText: "DD/MM/YYYY",
                        },
                      }}
                    />
                  </div>
                  <div className={styles.dialPickerDarkkeyboardPick}>
                    <TimePicker
                      label="Select time"
                      value={dialPickerDarkKeyboardPickValue}
                      onChange={(newValue) => {
                        setDialPickerDarkKeyboardPickValue(newValue);
                      }}
                      slotProps={{
                        textField: {
                          variant: "outlined",
                          name: "bookingTime",
                          id: "bookingTime",
                          size: "medium",
                          color: "primary",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <Button color="primary" size="medium" variant="contained">
                    Filter classrooms
                  </Button>
                  <Button color="primary" size="medium" variant="outlined">
                    Reset filter
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default StudentBookClassroom;
