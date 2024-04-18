import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={"p-dark-bg text-white"}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            © {new Date().getFullYear()} Common Library
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            <Link to="#" color="inherit">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="#" color="inherit">
              Terms of Service
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
