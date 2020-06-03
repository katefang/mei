import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import ProductCard from "../../components/product-card/product-card.component";

const ProductCategory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      console.log(response);
      setProducts(response.data);
      console.log(products);
    };
    fetchData();
  }, []);
  return (
    <>
      <Grid container spacing={3}>
        {products.map(({ id, ...otherProps }) => (
          <ProductCard key={id} {...otherProps} />
        ))}
      </Grid>
    </>
  );
};

export default ProductCategory;

// <div className="item">
// <div
//   className="image"
//   style={{ backgroundImage: `url(${image_link})` }}
// />
// <div className="footer">
//   <div className="name">{name}</div>
//   {price > 0 && (
//     <div className="price">
//       {price_sign}
//       {price}
//     </div>
//   )}
// </div>
// </div>

// <div key={id} className={classes.root}>
//             <Grid item xs={12} sm={6} md={1}>
//               <div
//                 className={classes.img}
//                 style={{ backgroundImage: `url(${image_link})` }}
//               />
//               <div className={classes.footer}>
//                 <div className="name">{name}</div>
//                 {price > 0 && (
//                   <div className="price">
//                     {price_sign}
//                     {price}
//                   </div>
//                 )}
//               </div>
//             </Grid>
//           </div>
