import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    border: '5px solid #160f30',
    margin: theme.spacing(0.5),
    textAlign: 'center',
    height: '10vh',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#160f30',
      color: 'white'
    }
  },
  title: {
    margin: 'auto'
  }
}));

const CategoryNameContainer = ({ children, name }) => {
  const { wrapper, title } = useStyles();
  const history = useHistory();

  const handleClick = e => {
    console.log(e.target.id);
    history.push(`/category/${e.target.id}`);
  };
  return (
    <Grid
      className={wrapper}
      id={name}
      onClick={handleClick}
      item
      xs={5}
      sm={3}
      md={2}
    >
      <Typography id={name} variant='h6' className={title}>
        {children.toUpperCase()}
      </Typography>
    </Grid>
  );
};

export default CategoryNameContainer;
