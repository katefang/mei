import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "0 auto",
    marginTop: theme.spacing(4),
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(6, 5vw)",
    gridGap: theme.spacing(2),
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundImage: "center",
  },
  item1: {
    gridColumnStart: "1",
    gridColumnEnd: "3",
    gridRowStart: "1",
    gridRowEnd: "4",
  },
  item2: {
    gridColumnStart: "3",
    gridColumnEnd: "5",
    gridRowStart: "1",
    gridRowEnd: "7",
  },
  item3: {
    gridColumnStart: "5",
    gridColumnEnd: "7",
    gridRowStart: "1",
    gridRowEnd: "4",
  },
  item4: {
    gridColumnStart: "1",
    gridColumnEnd: "3",
    gridRowStart: "4",
    gridRowEnd: "7",
  },
  item5: {
    gridColumnStart: "5",
    gridColumnEnd: "7",
    gridRowStart: "4",
    gridRowEnd: "7",
  },
}));

const PhotosContainer = () => {
  const {
    container,
    wrapper,
    image,
    item1,
    item2,
    item3,
    item4,
    item5,
  } = useStyles();
  return (
    <div className={container}>
      <div className={wrapper}>
        <Paper className={item1}>
          <img
            className={image}
            src={require("../../images/makeup.png")}
            alt="makeup"
          />
        </Paper>
        <Paper className={item2}>
          {" "}
          <img
            className={image}
            src={require("../../images/blush.png")}
            alt="lipstick"
          />
        </Paper>
        <Paper className={item3}>
          {" "}
          <img
            className={image}
            src={require("../../images/flower.png")}
            alt="makeup & flower"
          />
        </Paper>
        <Paper className={item4}>
          {" "}
          <img
            className={image}
            src={require("../../images/highlighter.png")}
            alt="eyeshadow"
          />
        </Paper>
        <Paper className={item5}>
          {" "}
          <img
            className={image}
            src={require("../../images/nailpolish.png")}
            alt="nail polish"
          />
        </Paper>
      </div>
    </div>
  );
};

export default PhotosContainer;
