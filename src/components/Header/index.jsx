import { Container } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Header = ({ children }) => {
  const styles = useStyles();
  return <Container className={styles.header}>{children}</Container>;
};

export default Header;
