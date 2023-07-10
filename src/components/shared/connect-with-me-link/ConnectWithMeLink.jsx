import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { OpenInNewIcon } from "assets";
import styles from "./ConnectWithMeLink.module.css";

export const ConnectWithMeLink = ({ component }) => {
  return (
    <Box sx={{ textAlign: "center" }} component={component}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/_dinesh_karthic"
        className={styles.link_connectWithMe}
      >
        let's talk <OpenInNewIcon />
      </a>
    </Box>
  );
};

ConnectWithMeLink.propTypes = {
  component: PropTypes.string,
};

ConnectWithMeLink.defaultProps = {
  component: "",
};
