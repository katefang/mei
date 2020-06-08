import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles(theme => ({
  wrapper: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  images: {
    width: "85%",
    "&:hover": {
      overflow: "none",
      transform: "scale(1.1)",
      transition: "all 1s ease",
    },
  },
}));

const FeaturedBrands = () => {
  const history = useHistory();

  const handleClick = e => {
    history.push(`/brand/${e.target.id}`);
  };
  const { images, wrapper } = useStyle();
  return (
    <Grid container spacing={2} className={wrapper}>
      <Grid item xs={6} sm={4} md={2}>
        <img
          onClick={handleClick}
          id="C'est Moi"
          className={images}
          src={require("../../images/cestmoi.png")}
          alt=""
        />
      </Grid>
      <Grid item xs={6} sm={4} md={2}>
        <img
          onClick={handleClick}
          id="benefit"
          className={images}
          src={require("../../images/benefit.png")}
          alt="benefit logo"
        />
      </Grid>
      <Grid item xs={6} sm={4} md={2}>
        <img
          onClick={handleClick}
          id="clinique"
          className={images}
          src={require("../../images/clinique.png")}
          alt="clinique logo"
        />
      </Grid>
      <Grid item xs={6} sm={4} md={2}>
        <img
          onClick={handleClick}
          id="fenty"
          className={images}
          src={require("../../images/fenty.png")}
          alt="fenty logo"
        />
      </Grid>
      <Grid item xs={6} sm={4} md={2}>
        <img
          onClick={handleClick}
          id="glossier"
          className={images}
          src={require("../../images/glossier.png")}
          alt="glossier logo"
        />
      </Grid>
      <Grid item xs={6} sm={4} md={2}>
        <img
          onClick={handleClick}
          id="smashbox"
          className={images}
          src={require("../../images/smashbox.png")}
          alt="smashbox logo"
        />
      </Grid>
    </Grid>
  );
};

export default FeaturedBrands;
