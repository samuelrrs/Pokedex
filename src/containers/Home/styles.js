import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  busca: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    height: 25,
  },
  hotimg: {
    height: 277,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  principal: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    color: "white",
    alignItems: "center",
    width: "100%",
  },
  links: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  logo: {
    height: 65,
  },
}));

export default useStyles;
