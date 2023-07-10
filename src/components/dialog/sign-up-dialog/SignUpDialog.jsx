import PropTypes from "prop-types";
import { useAuthHandler } from "custom-hooks";
import styles from "./SignUpDialog.module.css";

import {
  FormError,
  FormButton,
  FormHeading,
  FormWrapper,
  PasswordInput,
  DialogActionsCloseIcon,
} from "components";

import {
  Box,
  Dialog,
  TextField,
  Typography,
  DialogActions,
  DialogContent,
} from "@mui/material";

export const SignUpDialog = ({ openSignUpDialog, setOpenSignUpDialog }) => {
  const {
    error,
    email,
    status,
    lastName,
    password,
    firstName,
    confirmPassword,
    handleInputChange,
    handleSignUpFormSubmit,
  } = useAuthHandler();

  const handleClose = () => {
    setOpenSignUpDialog(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={openSignUpDialog}
      className={styles.dialogContainer}
    >
      <DialogActionsCloseIcon handleClose={handleClose} />

      <DialogContent className={styles.dialogContent}>
        <FormHeading headingText="Sign Up" />

        {status === "error" && <FormError errorToShow={error} />}

        <FormWrapper>
          <Box className={styles.textInput_container}>
            <TextField
              autoFocus
              type="text"
              name="firstName"
              value={firstName}
              label="First Name"
              placeholder="John"
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              type="text"
              name="lastName"
              value={lastName}
              label="Last Name"
              placeholder="Doe"
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          <TextField
            type="email"
            name="email"
            value={email}
            label="Email Address"
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            placeholder="john.doe@example.com"
          />

          <PasswordInput
            name="password"
            label="Password"
            value={password}
            placeholder="enter password"
            onChange={handleInputChange}
          />
          <Typography mb="1rem" fontSize="1.2rem">
           Password must be alpha numeric and should have minimum 6 characters.
          </Typography>

          <PasswordInput
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            onChange={handleInputChange}
            placeholder="final password"
          />
        </FormWrapper>

        <Typography mb="1rem" mt="1rem" fontSize="1.2rem">
          By continuing, you agree to OpenVoices Terms of Use and Privacy
          Policy.
        </Typography>
      </DialogContent>

      <DialogActions className={styles.action_signUp}>
        <FormButton
          status={status}
          btnText="Create New Account"
          onClick={handleSignUpFormSubmit}
        />
      </DialogActions>
    </Dialog>
  );
};

SignUpDialog.propTypes = {
  openSignUpDialog: PropTypes.bool,
  setOpenSignUpDialog: PropTypes.func,
};

SignUpDialog.defaultProps = {
  openSignUpDialog: false,
  setOpenSignUpDialog: () => {},
};
