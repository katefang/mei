import React from "react";
import { Grid } from "@material-ui/core";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: "1",
    height: "400px",
  },
  img: {
    // width: "100%",
    // height: "95%",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  // footer: {
  //   width: "100%",
  //   height: "5%",
  // },
}));

const ProductCard = ({ name, image_link, price, price_sign }) => {
  const { img, footer } = useStyles();

  return (
    <Grid item xs={12} sm={6} md={1}>
      <div className={img} style={{ backgroundImage: `url(${image_link})` }} />
      <div className={footer}>
        <div className="name">{name}</div>
        {price > 0 && (
          <div className="price">
            {price_sign}
            {price}
          </div>
        )}
      </div>
    </Grid>
  );
};

export default ProductCard;
