import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import AnnouncementModal from "../components/announcement-modal";
import PortalPopup from "../components/portal-popup";
import BookingModal from "../components/booking-modal";
import { useRouter } from "next/router";
import styles from "./student-dashboard.module.css";
const StudentDashboard = () => {
  const [isAnnouncementModalPopupOpen, setAnnouncementModalPopupOpen] =
    useState(false);
  const [isBookingModalPopupOpen, setBookingModalPopupOpen] = useState(false);
  const [isBookingModalPopup1Open, setBookingModalPopup1Open] = useState(false);
  const router = useRouter();

  const onAPClassroomLogoContainerClick = useCallback(() => {
    router.push("/student-dashboard");
  }, [router]);

  const onMenuItemClick = useCallback(() => {
    router.push("/student-dashboard");
  }, [router]);

  const onMenuItem1Click = useCallback(() => {
    router.push("/student-available-class");
  }, [router]);

  const onMenuItem2Click = useCallback(() => {
    router.push("/student-book-classroom");
  }, [router]);

  const onMenuItem3Click = useCallback(() => {
    router.push("/student-report-issue");
  }, [router]);

  const onMenuItem4Click = useCallback(() => {
    router.push("/student-request-resources");
  }, [router]);

  const onMenuItem5Click = useCallback(() => {
    router.push("/student-view-bookings");
  }, [router]);

  const onMenuItem6Click = useCallback(() => {
    router.push("/student-settings");
  }, [router]);

  const onDashboardContainerClick = useCallback(() => {
    // Please sync "Student Support" to the project
  }, []);

  const onDashboardContainer1Click = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  const onViewReportsClick = useCallback(() => {
    router.push("/student-report-issue");
  }, [router]);

  const onViewReportsTextClick = useCallback(() => {
    router.push("/student-book-classroom");
  }, [router]);

  const onViewReportsText1Click = useCallback(() => {
    router.push("/student-request-resources");
  }, [router]);

  const onViewMoreClassroomsClick = useCallback(() => {
    router.push("/student-available-class");
  }, [router]);

  const openAnnouncementModalPopup = useCallback(() => {
    setAnnouncementModalPopupOpen(true);
  }, []);

  const closeAnnouncementModalPopup = useCallback(() => {
    setAnnouncementModalPopupOpen(false);
  }, []);

  const openBookingModalPopup = useCallback(() => {
    setBookingModalPopupOpen(true);
  }, []);

  const closeBookingModalPopup = useCallback(() => {
    setBookingModalPopupOpen(false);
  }, []);

  const openBookingModalPopup1 = useCallback(() => {
    setBookingModalPopup1Open(true);
  }, []);

  const closeBookingModalPopup1 = useCallback(() => {
    setBookingModalPopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.studentDashboard}>
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
                  <a className={styles.menuItem} onClick={onMenuItemClick}>
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined42.png"
                    />
                    <div className={styles.apclassroom}>Dashboard</div>
                  </a>
                  <a className={styles.menuItem1} onClick={onMenuItem1Click}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/undefined43.png"
                    />
                    <div className={styles.apclassroom}>Available Classes</div>
                  </a>
                  <a className={styles.menuItem1} onClick={onMenuItem2Click}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/undefined44.png"
                    />
                    <div className={styles.apclassroom}>Book Classroom</div>
                  </a>
                  <a className={styles.menuItem1} onClick={onMenuItem3Click}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/undefined45.png"
                    />
                    <div className={styles.apclassroom}>Report Issues</div>
                  </a>
                  <a className={styles.menuItem1} onClick={onMenuItem4Click}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/undefined46.png"
                    />
                    <div className={styles.apclassroom}>Request Resources</div>
                  </a>
                  <a className={styles.menuItem1} onClick={onMenuItem5Click}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/undefined47.png"
                    />
                    <div className={styles.apclassroom}>View Bookings</div>
                  </a>
                  <a className={styles.menuItem1} onClick={onMenuItem6Click}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/undefined48.png"
                    />
                    <div className={styles.apclassroom}>Settings</div>
                  </a>
                  <div
                    className={styles.dashboard6}
                    onClick={onDashboardContainerClick}
                  >
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/undefined49.png"
                    />
                    <div className={styles.apclassroom}>Support</div>
                  </div>
                </div>
                <div className={styles.alignBottom}>
                  <div
                    className={styles.dashboard8}
                    onClick={onDashboardContainer1Click}
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
        <main className={styles.body}>
          <div className={styles.navbarresponsive}>
            <div className={styles.componentsnavbarResponsiveH}>
              <div className={styles.wrapper}>
                <div className={styles.componentsnavbarBrand}>
                  <img
                    className={styles.apclassroomLogoIcon}
                    alt=""
                    src="/undefined93.png"
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
          <div className={styles.topNavigationBar}>
            <div className={styles.helloJasonYuParent}>
              <div className={styles.helloJasonYu}>Hello, Jason Yu</div>
              <div className={styles.january12023}>January 1, 2023</div>
            </div>
            <div className={styles.searchBarParent}>
              <div className={styles.searchBar}>
                <img
                  className={styles.bxsearchIcon}
                  alt=""
                  src="/undefined32.png"
                />
                <div className={styles.student}>Search...</div>
              </div>
              <div className={styles.notification}>
                <button
                  className={styles.cinotificationOutline}
                  autoFocus={false}
                  disabled={false}
                >
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/undefined94.png"
                  />
                </button>
              </div>
              <div className={styles.lightDarkMode}>
                <img
                  className={styles.lightModeIcon}
                  alt=""
                  src="/undefined34.png"
                />
                <img
                  className={styles.darkModeIcon}
                  alt=""
                  src="/undefined35.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.mainContent}>
              <div className={styles.frame}>
                <div className={styles.sellingProducts}>
                  <div className={styles.numberOfReportsParent}>
                    <b className={styles.numberOfReports}>Number of Reports</b>
                    <div className={styles.reportIconParent}>
                      <img
                        className={styles.reportIcon1}
                        alt=""
                        src="/undefined95.png"
                      />
                      <b className={styles.student}>3</b>
                    </div>
                    <a
                      className={styles.viewReports}
                      onClick={onViewReportsClick}
                    >
                      view reports
                    </a>
                  </div>
                </div>
                <div className={styles.sellingProducts}>
                  <div className={styles.numberOfReportsParent}>
                    <b className={styles.numberOfReports}>Number of Bookings</b>
                    <div className={styles.reportIconParent}>
                      <img
                        className={styles.reportIcon1}
                        alt=""
                        src="/undefined96.png"
                      />
                      <b className={styles.student}>7</b>
                    </div>
                    <div
                      className={styles.viewReports1}
                      onClick={onViewReportsTextClick}
                    >
                      view bookings
                    </div>
                  </div>
                </div>
                <div className={styles.sellingProducts2}>
                  <div className={styles.numberOfReportsParent}>
                    <b className={styles.numberOfReports}>Number of Requests</b>
                    <div className={styles.reportIconParent}>
                      <img
                        className={styles.reportIcon1}
                        alt=""
                        src="/undefined97.png"
                      />
                      <b className={styles.student}>10</b>
                    </div>
                    <div
                      className={styles.viewReports1}
                      onClick={onViewReportsText1Click}
                    >
                      view requests
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.currentClassroomAvailability}>
                <div className={styles.header}>
                  <b className={styles.currentlyAvailableClassrooms}>
                    Currently Available Classrooms
                  </b>
                  <div className={styles.buttonParent}>
                    <Button color="primary" size="medium" variant="contained">
                      B-03-01
                    </Button>
                    <button className={styles.button1}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText}>B-03-02</div>
                      </div>
                    </button>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>B-03-03</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>B-03-04</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>B-03-05</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>B-03-06</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>B-03-07</div>
                      </div>
                    </div>
                    <button className={styles.button1}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText}>B-03-08</div>
                      </div>
                    </button>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>B-03-09</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>B-03-10</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>C-03-01</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>C-03-02</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>C-03-03</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>C-03-04</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>C-03-05</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>C-03-06</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>C-03-07</div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.stateLayer}>
                        <div className={styles.labelText1}>C-03-08</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={styles.viewMoreClassrooms}
                    onClick={onViewMoreClassroomsClick}
                  >
                    view more classrooms
                  </div>
                </div>
              </div>
              <div className={styles.announcement}>
                <div className={styles.header1}>
                  <b className={styles.announcements}>Announcements</b>
                </div>
                <div className={styles.announcementParent}>
                  <div
                    className={styles.announcement1}
                    onClick={openAnnouncementModalPopup}
                  >
                    <div className={styles.wifiIconWrapper}>
                      <div className={styles.wifiIcon}>
                        <img
                          className={styles.dashboardIcon}
                          alt=""
                          src="/undefined98.png"
                        />
                      </div>
                    </div>
                    <div className={styles.wifiMaintenanceNotificationParent}>
                      <div className={styles.helloJasonYu}>
                        WiFi Maintenance Notification
                      </div>
                      <div className={styles.deadline}>
                        <div className={styles.purpose}>Jan 1, 2023</div>
                        <img
                          className={styles.deadlineChild}
                          alt=""
                          src="/undefined26.png"
                        />
                        <div className={styles.purpose}>Jan 25, 2023</div>
                      </div>
                    </div>
                    <div className={styles.arrowRightWrapper}>
                      <img
                        className={styles.lightModeIcon}
                        alt=""
                        src="/undefined24.png"
                      />
                    </div>
                  </div>
                  <div className={styles.announcement2}>
                    <div className={styles.wifiIconWrapper}>
                      <div className={styles.waterIcon}>
                        <img
                          className={styles.dashboardIcon}
                          alt=""
                          src="/undefined22.png"
                        />
                      </div>
                    </div>
                    <div className={styles.wifiMaintenanceNotificationParent}>
                      <div className={styles.helloJasonYu}>
                        Water Disruption Notification
                      </div>
                      <div className={styles.deadline}>
                        <div className={styles.purpose}>Jan 1, 2023</div>
                        <img
                          className={styles.deadlineChild}
                          alt=""
                          src="/undefined26.png"
                        />
                        <div className={styles.purpose}>Jan 25, 2023</div>
                      </div>
                    </div>
                    <div className={styles.arrowRightWrapper}>
                      <img
                        className={styles.lightModeIcon}
                        alt=""
                        src="/undefined24.png"
                      />
                    </div>
                  </div>
                  <div className={styles.announcement2}>
                    <div className={styles.wifiIconWrapper}>
                      <div className={styles.elevatorIcon}>
                        <div className={styles.materialSymbolselevatorOutl}>
                          <img
                            className={styles.dashboardIcon}
                            alt=""
                            src="/undefined21.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.wifiMaintenanceNotificationParent}>
                      <div className={styles.helloJasonYu}>
                        Elevator at Block C Technical Issue
                      </div>
                      <div className={styles.deadline}>
                        <div className={styles.purpose}>Jan 1, 2023</div>
                        <img
                          className={styles.deadlineChild}
                          alt=""
                          src="/undefined26.png"
                        />
                        <div className={styles.purpose}>Jan 25, 2023</div>
                      </div>
                    </div>
                    <div className={styles.arrowRightWrapper}>
                      <img
                        className={styles.lightModeIcon}
                        alt=""
                        src="/undefined24.png"
                      />
                    </div>
                  </div>
                  <div className={styles.announcement2}>
                    <div className={styles.wifiIconWrapper}>
                      <div className={styles.socketIcon}>
                        <img
                          className={styles.tablerlogout2Icon}
                          alt=""
                          src="/undefined11.png"
                        />
                      </div>
                    </div>
                    <div className={styles.wifiMaintenanceNotificationParent}>
                      <div className={styles.helloJasonYu}>
                        Plug Point at B0608 Fixed
                      </div>
                      <div className={styles.deadline}>
                        <div className={styles.purpose}>Jan 1, 2023</div>
                        <img
                          className={styles.deadlineChild}
                          alt=""
                          src="/undefined26.png"
                        />
                        <div className={styles.purpose}>Jan 25, 2023</div>
                      </div>
                    </div>
                    <div className={styles.arrowRightWrapper}>
                      <img
                        className={styles.lightModeIcon}
                        alt=""
                        src="/undefined24.png"
                      />
                    </div>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <Button
                      color="primary"
                      name="moreButton"
                      id="filledButton"
                      size="medium"
                      variant="contained"
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mainPanelWrapper}>
              <div className={styles.mainPanel}>
                <div className={styles.searchClassForm}>
                  <div className={styles.header2}>
                    <b className={styles.upcomingBookings}>Upcoming Bookings</b>
                  </div>
                  <div className={styles.reportedIssues}>
                    <div
                      className={styles.booking}
                      onClick={openBookingModalPopup}
                    >
                      <div className={styles.b0307Parent}>
                        <div className={styles.b0307}>B-03-07</div>
                        <div className={styles.details}>
                          <div className={styles.helloJasonYu}>Date:</div>
                          <div className={styles.helloJasonYu}>Jan 1, 2023</div>
                        </div>
                        <div className={styles.timeParent}>
                          <div className={styles.helloJasonYu}>Time:</div>
                          <div className={styles.helloJasonYu}>10:00</div>
                          <div className={styles.helloJasonYu}>am</div>
                          <div className={styles.helloJasonYu}>-</div>
                          <div className={styles.helloJasonYu}>12:00</div>
                          <div className={styles.helloJasonYu}>pm</div>
                        </div>
                        <div className={styles.details1}>
                          <div className={styles.purpose}>Purpose:</div>
                          <div className={styles.purpose}>Group Discussion</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.booking}
                      onClick={openBookingModalPopup1}
                    >
                      <div className={styles.b0307Parent}>
                        <div className={styles.b0307}>B-03-07</div>
                        <div className={styles.details}>
                          <div className={styles.helloJasonYu}>Date:</div>
                          <div className={styles.helloJasonYu}>Jan 1, 2023</div>
                        </div>
                        <div className={styles.timeParent}>
                          <div className={styles.helloJasonYu}>Time:</div>
                          <div className={styles.helloJasonYu}>10:00</div>
                          <div className={styles.helloJasonYu}>am</div>
                          <div className={styles.helloJasonYu}>-</div>
                          <div className={styles.helloJasonYu}>12:00</div>
                          <div className={styles.helloJasonYu}>pm</div>
                        </div>
                        <div className={styles.details1}>
                          <div className={styles.purpose}>Purpose:</div>
                          <div className={styles.purpose}>Group Discussion</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.booking2}>
                      <div className={styles.b0307Parent}>
                        <div className={styles.b0307}>B-03-07</div>
                        <div className={styles.details}>
                          <div className={styles.helloJasonYu}>Date:</div>
                          <div className={styles.helloJasonYu}>Jan 1, 2023</div>
                        </div>
                        <div className={styles.timeParent}>
                          <div className={styles.helloJasonYu}>Time:</div>
                          <div className={styles.helloJasonYu}>10:00</div>
                          <div className={styles.helloJasonYu}>am</div>
                          <div className={styles.helloJasonYu}>-</div>
                          <div className={styles.helloJasonYu}>12:00</div>
                          <div className={styles.helloJasonYu}>pm</div>
                        </div>
                        <div className={styles.details1}>
                          <div className={styles.purpose}>Purpose:</div>
                          <div className={styles.purpose}>Group Discussion</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {isAnnouncementModalPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAnnouncementModalPopup}
        >
          <AnnouncementModal onClose={closeAnnouncementModalPopup} />
        </PortalPopup>
      )}
      {isBookingModalPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBookingModalPopup}
        >
          <BookingModal onClose={closeBookingModalPopup} />
        </PortalPopup>
      )}
      {isBookingModalPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBookingModalPopup1}
        >
          <BookingModal onClose={closeBookingModalPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default StudentDashboard;
