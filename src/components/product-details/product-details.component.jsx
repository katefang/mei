import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ProductsContext } from '../../context/products-context';
import {
  Grid,
  Typography,
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Link
} from '@material-ui/core';
import { ExpandMore, StarBorder } from '@material-ui/icons';
import CustomButton from '../custom-button/custom-button.component';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold
  },
  image: {
    width: '80%',
    height: 'auto',
    objectFit: 'cover',
    backgroundPosition: 'center'
  },
  wrapper: {
    marginTop: theme.spacing(10)
  },
  textWrapper: {
    flexDirection: 'column',
    height: '80%',
    marginTop: theme.spacing(3)
  },
  expansionPanel: {
    opacity: '0.9',
    marginTop: theme.spacing(4)
  }
}));

const ProductDetails = () => {
  const { products } = useContext(ProductsContext);

  const { id } = useParams();
  const data = products.find(item => item.id == id);
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const { heading, image, wrapper, textWrapper, expansionPanel } = useStyles();
  const [num, setNum] = useState(1);

  const handleChange = e => {
    setNum(e.target.value);
  };

  return (
    <>
      {data && (
        <div>
          <Grid container spacing={2} className={wrapper}>
            <Grid item xs={12} sm={6}>
              <img
                className={image}
                src={data.api_featured_image}
                alt={data.name}
              />
            </Grid>

            <Grid
              className={textWrapper}
              container
              item
              xs={12}
              sm={6}
              spacing={4}
            >
              <Grid item xs={12}>
                {data.brand && (
                  <Typography variant='h6'>
                    {data.brand.toUpperCase()}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12}>
                <Typography variant='subtitle1'>{data.name}</Typography>
              </Grid>

              <Grid item xs={12}>
                <StarBorder /> <StarBorder /> <StarBorder /> <StarBorder />{' '}
                <StarBorder /> <em> No reviews yet</em>
              </Grid>
              <Grid item xs={12}>
                {data.price &&
                  (data.price == 0 ? (
                    <div>$9.99</div>
                  ) : (
                    <div>
                      $
                      {data.price.slice(data.price.indexOf('.')).length === 2
                        ? data.price + '0'
                        : data.price}
                    </div>
                  ))}
              </Grid>
              <Grid item xs={12}>
                <span>Quantity </span>
                <TextField
                  select
                  value={num}
                  onChange={handleChange}
                  SelectProps={{ native: true }}
                >
                  {nums.map(item => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} style={{ width: '80%' }}>
                <CustomButton>ADD TO CART</CustomButton>
              </Grid>

              <Grid item xs={12}>
                <Typography variant='subtitle2'>
                  FREE SHIPPING & EASY RETURNS.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <ExpansionPanel className={expansionPanel}>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <Typography className={heading} variant='body1'>
                PRODUCT DETAILS
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Typography>{data.description}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {data.tag_list && data.tag_list.length > 0 && (
                    <Typography variant='body1'>
                      Concerns:
                      {data.tag_list[0] && <em> {data.tag_list[0]}</em>}
                      {data.tag_list[1] && <em>, {data.tag_list[1]}</em>}
                      {data.tag_list[2] && <em>, {data.tag_list[2]}</em>}
                      {data.tag_list[3] && <em>, {data.tag_list[3]}</em>}
                      {data.tag_list[4] && <em>, {data.tag_list[4]}</em>}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Link target='_blank' href={data.product_link}>
                    LEARN MORE
                  </Link>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
