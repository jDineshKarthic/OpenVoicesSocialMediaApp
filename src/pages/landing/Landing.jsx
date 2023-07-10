import { useState } from "react";
import styles from "./Landing.module.css";
import { logoPNG, thinkJPG } from "assets";
import { Box, Grid, Typography } from "@mui/material";
import { useDocumentTitle, useScrollToTop } from "custom-hooks";

import {
  CustomButton,
  SignInDialog,
  SignUpDialog,
  ConnectWithMeLink,
} from "components";

export const Landing = () => {
  useScrollToTop();
  useDocumentTitle("Sign Up Now");
  const [openSignInDialog, setOpenSignInDialog] = useState(false);
  const [openSignUpDialog, setOpenSignUpDialog] = useState(false);

  return (
    <Box pb={4}>
      <SignInDialog
        openSignInDialog={openSignInDialog}
        setOpenSignInDialog={setOpenSignInDialog}
      />

      <SignUpDialog
        openSignUpDialog={openSignUpDialog}
        setOpenSignUpDialog={setOpenSignUpDialog}
      />

      <Grid container minHeight="100vh" mb={1} component="main">
        <Grid item sm={6}>
          <img
            loading="lazy"
            src={thinkJPG}
            alt="voices image poster"
            className={styles.thinkImg}
          />
        </Grid>

        <Grid item sm={6} p={6} >
          {/* <img
            src={logoPNG}
            loading="lazy"
            alt="voices image logo"
            className={styles.logoImg}
          /> */}

          <Box>
            <Typography variant="h1" component="h1" className={styles.text}>
              Open Voices
            </Typography>
            <Typography variant="h2" component="h2" className={styles.text}>
            Where Open Minded People live 
            </Typography>

            <CustomButton
              className={styles.btn_signUp}
              onClick={() => setOpenSignUpDialog(true)}
            >
              Join now
            </CustomButton>
          </Box>

          <Box>
            <Typography variant="h3" component="h3" className={styles.text}>
              Do you have an account?
            </Typography>

            <CustomButton
              className={styles.btn_logIn}
              onClick={() => setOpenSignInDialog(true)}
            >
              SIGN IN
            </CustomButton>
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
};
