import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HoverLink from "../hover-link/hover-link.component";
import CategoryList from "../category-list/category-list.component";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  links: {
    textDecoration: "none",
    color: "secondary",
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open1, setOpen1] = useState(null);
  const [open2, setOpen2] = useState(null);
  const [open3, setOpen3] = useState(null);

  const handlePopoverOpen = (e, num) => {
    setAnchorEl(e.currentTarget);
    if (num === 1) {
      setOpen1(true);
      setOpen2(false);
      setOpen3(false);
    } else if (num === 2) {
      setOpen1(false);
      setOpen2(true);
      setOpen3(false);
    } else {
      setOpen1(false);
      setOpen2(false);
      setOpen3(true);
    }
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
  };

  const { container } = useStyles();
  const popoverAnchor = useRef(null);
  return (
    <Container className={container}>
      <Typography
        ref={popoverAnchor}
        onMouseEnter={e => handlePopoverOpen(e, 1)}
        onMouseLeave={handlePopoverClose}
      >
        CATEGORIES
      </Typography>
      <HoverLink
        anchorEl={popoverAnchor.current}
        handlePopoverClose={handlePopoverClose}
        open={open1}
      >
        <CategoryList />
      </HoverLink>
      <Typography onMouseEnter={e => handlePopoverOpen(e, 2)}>
        BRANDS
      </Typography>
      <HoverLink
        anchorEl={anchorEl}
        handlePopoverClose={handlePopoverClose}
        open={open2}
        onMouseLeave={handlePopoverClose}
      >
        HELLO
      </HoverLink>
      <Typography onMouseEnter={e => handlePopoverOpen(e, 3)}>TYPE</Typography>
    </Container>
  );
};

export default NavBar;
