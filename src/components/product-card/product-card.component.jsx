import React from "react";
import { Grid } from "@material-ui/core";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    flexGrow: "1",
    height: "25vw",
  },
  img: {
    backgroundSize: "100%",
    width: "100%",
    height: "95%",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const ProductCard = ({ name, api_featured_image, price, price_sign }) => {
  const { img, footer, wrapper } = useStyles();

  return (
    <Grid className={wrapper} item md={3} sm={4} xs={6}>
      <div
        className={img}
        style={{ backgroundImage: `url(${api_featured_image})` }}
      />
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
