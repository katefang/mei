import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HoverLink from "../hover-link/hover-link.component";
import CategoryList from "../category-list/category-list.component";
import TypeList from "../types/type-list.component";
import BrandList from "../brands/brand-list.component";

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
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

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

  const { container, all } = useStyles();
  return (
    <Container className={container}>
      {/* <Link className={links} to="/shopall">
        SHOP ALL
      </Link> */}
      <Typography onMouseEnter={e => handlePopoverOpen(e, 1)}>
        CATEGORIES
      </Typography>
      <HoverLink
        anchorEl={anchorEl}
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
      >
        <BrandList />
      </HoverLink>

      <Typography onMouseEnter={e => handlePopoverOpen(e, 3)}>
        TYPES
        <HoverLink
          anchorEl={anchorEl}
          handlePopoverClose={handlePopoverClose}
          open={open3}
        >
          <TypeList />
        </HoverLink>
      </Typography>
    </Container>
  );
};

export default NavBar;
