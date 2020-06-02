import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    backgroundColor: "black",
  },
  appBar: {
    display: "flex",
    justifyContent: "space-around",
  },
  p: {
    justifySelf: "center",
  },
  button: {
    display: "flex",
    alignSelf: "flex-end",
    justifySelf: "center",
  },
}));

export default useStyles;
