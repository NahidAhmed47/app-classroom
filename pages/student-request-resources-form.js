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
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ModalRequestResourceError from "../components/modal-request-resource-error";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./student-request-resources-form.module.css";
const StudentRequestResourcesForm = () => {
  const [textFieldDateTimePickerValue, setTextFieldDateTimePickerValue] =
    useState(null);
  const [
    isModalRequestResourceErrorPopupOpen,
    setModalRequestResourceErrorPopupOpen,
  ] = useState(false);
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

  const openModalRequestResourceErrorPopup = useCallback(() => {
    setModalRequestResourceErrorPopupOpen(true);
  }, []);

  const closeModalRequestResourceErrorPopup = useCallback(() => {
    setModalRequestResourceErrorPopupOpen(false);
  }, []);

  const onRequestListContainerClick = useCallback(() => {
    router.push("/student-resource-request-detai");
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.studentRequestResourcesForm}>
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
                      <div className={styles.apclassroom}>
                        Available Classes
                      </div>
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
                      <div className={styles.apclassroom}>
                        Request Resources
                      </div>
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
              <form
                className={styles.searchClassForm}
                id="requestResourcesForm"
              >
                <div className={styles.header}>
                  <b className={styles.requestResources}>Request Resources</b>
                </div>
                <div className={styles.form}>
                  <div className={styles.textFieldParent}>
                    <FormControl
                      className={styles.textField}
                      variant="outlined"
                    >
                      <InputLabel>Resource Type</InputLabel>
                      <Select
                        name="resourceTypeSelect"
                        id="resourceTypeSelect"
                        defaultValue="Select a type"
                        label="Resource Type"
                      >
                        <MenuItem value="asset">asset</MenuItem>
                        <MenuItem value="electrical">electrical</MenuItem>
                        <MenuItem value="stationaries">stationaries</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <FormControl
                      className={styles.textField}
                      variant="outlined"
                    >
                      <InputLabel>Item</InputLabel>
                      <Select
                        name="itemSelect"
                        id="itemSelect"
                        defaultValue="Select an item"
                        label="Item"
                      >
                        <MenuItem value="chair">chair</MenuItem>
                        <MenuItem value="marker">marker</MenuItem>
                        <MenuItem value="additional plug points">
                          additional plug points
                        </MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </div>
                  <TextField
                    className={styles.textField2}
                    color="primary"
                    name="descriptionInput"
                    id="descriptionInput"
                    label="Description"
                    placeholder="e.g. request for a black marker pen"
                    variant="outlined"
                  />
                  <div className={styles.textFieldGroup}>
                    <TextField
                      className={styles.textField3}
                      color="primary"
                      name="locationSelect"
                      id="locationSelect"
                      label="Location"
                      placeholder="Select a classroom"
                      required={true}
                      variant="outlined"
                      type="search"
                    />
                    <FormControl
                      className={styles.textField}
                      variant="outlined"
                    >
                      <InputLabel>Urgency</InputLabel>
                      <Select
                        name="urgencySelect"
                        id="urgencySelect"
                        defaultValue="Select urgency level"
                        label="Urgency"
                      />
                      <FormHelperText />
                    </FormControl>
                  </div>
                  <div className={styles.textField5}>
                    <DatePicker
                      label="Date Needed"
                      value={textFieldDateTimePickerValue}
                      onChange={(newValue) => {
                        setTextFieldDateTimePickerValue(newValue);
                      }}
                      slotProps={{
                        textField: {
                          variant: "outlined",
                          name: "requstNeededDate",
                          id: "requstNeededDate",
                          size: "medium",
                          required: true,
                          color: "primary",
                          helperText: "DD/MM/YYYY",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className={styles.buttonParent}>
                  <div
                    className={styles.button}
                    onClick={openModalRequestResourceErrorPopup}
                  >
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>Submit Request</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText1}>Clear Form</div>
                    </div>
                  </div>
                </div>
              </form>
              <div className={styles.searchClassForm1}>
                <div className={styles.header}>
                  <b className={styles.student}>Your Requested Resources</b>
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
                          <div className={styles.equipmentRequest}>
                            Fulfilled
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
                      src="/undefined71.png"
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
                      src="/undefined72.png"
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
                      src="/undefined73.png"
                    />
                    <b className={styles.student}>3</b>
                  </div>
                  <div className={styles.viewReports}>view reports</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isModalRequestResourceErrorPopupOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeModalRequestResourceErrorPopup}
          >
            <ModalRequestResourceError
              onClose={closeModalRequestResourceErrorPopup}
            />
          </PortalPopup>
        )}
      </>
    </LocalizationProvider>
  );
};

export default StudentRequestResourcesForm;
