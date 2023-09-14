import { useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./login-page.module.css";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonClick = useCallback(() => {
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;
    console.log(loginEmail, loginPassword);
    fetch("https://ap-classroom-backend-razuahmedjoy.vercel.app/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: loginEmail,
        password: loginPassword}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          // localStorage.setItem("token", data.token);
          // localStorage.setItem("user", JSON.stringify(data.user));
          router.push("/student-dashboard");
        } else {
          // alert(data.message);
        }
      })
    // router.push("/student-dashboard");
  }, []);

  return (
    <div className={styles.loginPage}>
      <div className={styles.apclassroomLogoWrapper}>
        <div className={styles.apclassroomLogo}>
          <div className={styles.fluentwhiteboard20RegularParent}>
            <img
              className={styles.fluentwhiteboard20RegularIcon}
              alt=""
              src="/fluentwhiteboard20regular.png"
            />
            <div className={styles.apclassroom}>APClassroom</div>
          </div>
        </div>
      </div>
      <div className={styles.loginFormWrapper}>
        <form className={styles.loginForm} id="loginForm">
          <div className={styles.apclassroom1}>Login</div>
          <TextField
            className={styles.textField}
            color="primary"
            name="loginEmail"
            id="loginEmail"
            label="email"
            placeholder="e.g. tp067024"
            required={true}
            variant="outlined"
            type="email"
          />
          <TextField
            className={styles.textField}
            color="primary"
            name="loginPassword"
            id="loginPassword"
            label="Password"
            required={true}
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
          <Button
            className={styles.button}
            color="primary"
            size="medium"
            variant="contained"
            onClick={onButtonClick}
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
