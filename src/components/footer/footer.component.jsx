import React from 'react';
import { Link } from '@material-ui/core';
import { LinkedIn, GitHub } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import './footer.styles.scss';

const useStyles = makeStyles(theme => ({
  copyright: {
    marginTop: theme.spacing(1)
  }
}));

const Footer = () => {
  const year = new Date().getFullYear();
  const { copyright } = useStyles();
  return (
    <footer>
      <div>
        <Link target="_blank" href="https://www.linkedin.com/in/katefang33/">
          <LinkedIn />
        </Link>
        <Link target="_blank" href="https://github.com/katefang">
          <GitHub />
        </Link>
        <br />
        <p className={copyright}>© Mei {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
