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
import CancelBookingConfirmation from "/";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./student-book-classroom-form.module.css";
const StudentBookClassroomForm = () => {
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
      <div className={styles.studentBookClassroomForm}>
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
              <form
                className={styles.currentClassroomAvailability}
                id="bookClassroomForm"
              >
                <b className={styles.bookingClassroomB0308}>
                  Booking Classroom B-03-08 on 17/08/2023
                </b>
                <div className={styles.form1}>
                  <FormControl className={styles.textField} variant="outlined">
                    <InputLabel>Purpose</InputLabel>
                    <Select
                      name="purposeSelect"
                      id="purposeSelect"
                      label="Purpose"
                    >
                      <MenuItem value="group discussion">
                        group discussion
                      </MenuItem>
                      <MenuItem value="presentation">presentation</MenuItem>
                      <MenuItem value="class replacement">
                        class replacement
                      </MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className={styles.textField1}>
                    <TextField
                      className={styles.textField2}
                      color="primary"
                      name="contactInput"
                      id="contactInput"
                      label="Contact Number"
                      placeholder="e.g. +6012-345 6789"
                      required={true}
                      variant="outlined"
                      type="tel"
                    />
                    <div className={styles.supportingText}>
                      <div className={styles.supportingText1}>
                        Supporting text
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buttonParent}>
                  <Button color="primary" size="medium" variant="contained">
                    Book Classroom
                  </Button>
                  <Button color="primary" size="medium" variant="outlined">
                    Clear Form
                  </Button>
                </div>
              </form>
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
                    <div className={styles.buttonGroup}>
                      <Button
                        color="primary"
                        name="viewDetailsButton"
                        variant="contained"
                        href="/student-booking-details"
                      >
                        View Details
                      </Button>
                      <Button
                        className={styles.button1}
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
                  <div className={styles.booking1}>
                    <div className={styles.bookingStatusIcon1}>
                      <img
                        className={styles.tablerlogout2Icon}
                        alt=""
                        src="/undefined67.png"
                      />
                    </div>
                    <div className={styles.b0307Group}>
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
                    <div className={styles.buttonContainer}>
                      <Button
                        color="primary"
                        name="viewDetailsButton"
                        variant="contained"
                        href="/student-booking-details"
                      >
                        View Details
                      </Button>
                      <Button
                        className={styles.button1}
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
                  <div className={styles.booking2}>
                    <div className={styles.bookingStatusIcon2}>
                      <img
                        className={styles.tablerlogout2Icon}
                        alt=""
                        src="/undefined68.png"
                      />
                    </div>
                    <div className={styles.b0307Container}>
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
                    <div className={styles.frameDiv}>
                      <Button
                        color="primary"
                        name="viewDetailsButton"
                        variant="contained"
                        href="/student-booking-details"
                      >
                        View Details
                      </Button>
                      <Button
                        className={styles.button1}
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
                  <div className={styles.booking3}>
                    <div className={styles.bookingStatusIcon}>
                      <img
                        className={styles.tablerlogout2Icon}
                        alt=""
                        src="/undefined10.png"
                      />
                    </div>
                    <div className={styles.b0307Container}>
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
                    <div className={styles.frameDiv}>
                      <Button
                        color="primary"
                        name="viewDetailsButton"
                        variant="contained"
                        href="/student-booking-details"
                      >
                        View Details
                      </Button>
                      <Button
                        className={styles.button1}
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
                  <div className={styles.booking3}>
                    <div className={styles.bookingStatusIcon1}>
                      <img
                        className={styles.tablerlogout2Icon}
                        alt=""
                        src="/undefined67.png"
                      />
                    </div>
                    <div className={styles.b0307Container}>
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
                    <div className={styles.frameDiv}>
                      <Button
                        color="primary"
                        name="viewDetailsButton"
                        variant="contained"
                        href="/student-booking-details"
                      >
                        View Details
                      </Button>
                      <Button
                        className={styles.button1}
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
                  <div className={styles.booking5}>
                    <div className={styles.bookingStatusIcon1}>
                      <img
                        className={styles.tablerlogout2Icon}
                        alt=""
                        src="/undefined67.png"
                      />
                    </div>
                    <div className={styles.b0307Container}>
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
                    <div className={styles.frameDiv}>
                      <Button
                        color="primary"
                        name="viewDetailsButton"
                        variant="contained"
                        href="/student-booking-details"
                      >
                        View Details
                      </Button>
                      <Button
                        className={styles.button1}
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
            <div className={styles.sidePanel} />
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

export default StudentBookClassroomForm;
