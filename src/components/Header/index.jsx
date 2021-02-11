import React from "react";
import useStyles from "./styles";

const Header = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.header}>{children}</div>;
};

export default Header;
