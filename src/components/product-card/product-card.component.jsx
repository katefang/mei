import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    flexGrow: "1",
    height: "28vw",
  },

  img: {
    backgroundSize: "cover",
    backgroundPosition: "Center",
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(1),
  },
  productPrice: {
    display: "inline",
  },
  productName: {
    display: "inline",
  },
}));

const ProductCard = ({ id, brand, name, api_featured_image, price }) => {
  const { img, footer, wrapper, productName, productPrice } = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push(`/details/${id}`);
  };

  return (
    <Grid className={wrapper} item md={4} sm={6} xs={12}>
      <Paper
        elevation={1}
        style={{ width: "100%", height: "100%" }}
        onClick={handleClick}
      >
        <div
          className={img}
          style={{ backgroundImage: `url(${api_featured_image})` }}
        />
      </Paper>
      <div className={footer}>
        <div className={productName}>
          {brand && brand.toUpperCase()} <em>{name}</em>
        </div>

        {price &&
          (price == 0 ? (
            <div className={productPrice}>9.99</div>
          ) : (
            <div className={productPrice}>
              {price.slice(price.indexOf(".")).length === 2
                ? price + "0"
                : price}
            </div>
          ))}
      </div>
    </Grid>
  );
};

export default ProductCard;
