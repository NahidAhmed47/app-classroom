import { useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import ModalSaveSettingsSuccess from "../components/modal-save-settings-success";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./student-settings.module.css";
const StudentSettings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [
    isModalSaveSettingsSuccessPopupOpen,
    setModalSaveSettingsSuccessPopupOpen,
  ] = useState(false);
  const [
    isModalSaveSettingsSuccessPopup1Open,
    setModalSaveSettingsSuccessPopup1Open,
  ] = useState(false);
  const router = useRouter();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

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
    router.push("/student-view-bookings");
  }, [router]);

  const onDashboardContainer2Click = useCallback(() => {
    // Please sync "Student Support" to the project
  }, []);

  const onDashboardContainer3Click = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  const openModalSaveSettingsSuccessPopup = useCallback(() => {
    setModalSaveSettingsSuccessPopupOpen(true);
  }, []);

  const closeModalSaveSettingsSuccessPopup = useCallback(() => {
    setModalSaveSettingsSuccessPopupOpen(false);
  }, []);

  const openModalSaveSettingsSuccessPopup1 = useCallback(() => {
    setModalSaveSettingsSuccessPopup1Open(true);
  }, []);

  const closeModalSaveSettingsSuccessPopup1 = useCallback(() => {
    setModalSaveSettingsSuccessPopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.studentSettings}>
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
                      src="/undefined79.png"
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
                  <a className={styles.menuItem} onClick={onMenuItem4Click}>
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined47.png"
                    />
                    <div className={styles.apclassroom}>VIew Bookings</div>
                  </a>
                  <div className={styles.dashboard6}>
                    <img
                      className={styles.settingsIcon}
                      alt=""
                      src="/undefined80.png"
                    />
                    <div className={styles.apclassroom}>Settings</div>
                  </div>
                  <div
                    className={styles.dashboard8}
                    onClick={onDashboardContainer2Click}
                  >
                    <img
                      className={styles.dashboardIcon}
                      alt=""
                      src="/undefined81.png"
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
                <b className={styles.student}>Personal Settings</b>
              </div>
              <div className={styles.personalSettings1}>
                <div className={styles.frameParent}>
                  <div className={styles.labelTextParent}>
                    <div className={styles.labelText}>
                      User profile picture:
                    </div>
                    <div className={styles.ellipseParent}>
                      <img
                        className={styles.sideNavigationBarUserProfiChild}
                        alt=""
                        src="/undefined41.png"
                      />
                      <input className={styles.frameItem} type="file" />
                    </div>
                  </div>
                  <TextField
                    className={styles.textField}
                    color="primary"
                    name="emailInput"
                    id="emailInput"
                    label="User email"
                    defaultValue="tp067024@mail.apu.edu.my"
                    disabled={true}
                    sx={{ width: 490 }}
                    variant="outlined"
                  />
                  <TextField
                    className={styles.textField}
                    color="primary"
                    name="nameInput"
                    id="nameInput"
                    label="User name"
                    defaultValue="Jason Yu Junven"
                    required={true}
                    sx={{ width: 490 }}
                    variant="outlined"
                  />
                  <TextField
                    className={styles.textField}
                    color="primary"
                    name="passwordInput"
                    id="passwordInput"
                    label="User password"
                    defaultValue="Password@1234"
                    required={true}
                    sx={{ width: 490 }}
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleShowPasswordClick}
                            aria-label="toggle password visibility"
                          >
                            <Icon>
                              {showPassword ? "visibility_off" : "visibility"}
                            </Icon>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <Button
                  className={styles.button}
                  color="primary"
                  size="medium"
                  variant="contained"
                  onClick={openModalSaveSettingsSuccessPopup}
                >
                  Save changes
                </Button>
              </div>
            </div>
            <div className={styles.searchClassForm}>
              <div className={styles.header}>
                <b className={styles.student}>General Settings</b>
              </div>
              <div className={styles.personalSettings2}>
                <FormControl sx={{ width: 490 }} variant="outlined">
                  <InputLabel>Theme</InputLabel>
                  <Select
                    name="themeSelect"
                    id="themeSelect"
                    defaultValue="Light"
                    label="Theme"
                  >
                    <MenuItem value="Light">Light</MenuItem>
                    <MenuItem value="Dark">Dark</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              <Button
                className={styles.button}
                color="primary"
                size="medium"
                variant="contained"
                onClick={openModalSaveSettingsSuccessPopup1}
              >
                Save changes
              </Button>
            </div>
          </div>
          <div className={styles.sidePanel} />
        </div>
      </div>
      {isModalSaveSettingsSuccessPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalSaveSettingsSuccessPopup}
        >
          <ModalSaveSettingsSuccess
            onClose={closeModalSaveSettingsSuccessPopup}
          />
        </PortalPopup>
      )}
      {isModalSaveSettingsSuccessPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalSaveSettingsSuccessPopup1}
        >
          <ModalSaveSettingsSuccess
            onClose={closeModalSaveSettingsSuccessPopup1}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default StudentSettings;
