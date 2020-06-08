import React, { useState } from "react";
import { Input, InputAdornment } from "@material-ui/core";
import { ShoppingCart, Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import BrandNames from "../brands/brand-names";
import CategoryNames from "../category-list/category-names";
import TypeNames from "../types/type-names";

const useStyles = makeStyles(theme => ({
  subheader: {
    margin: theme.spacing(2),
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  image: {
    width: "420px",
    filter:
      "invert(4%) sepia(96%) saturate(2391%) hue-rotate(246deg) brightness(104%) contrast(97%)",
  },
  searchWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  searchBar: {
    width: "380px",
    height: "50px",
    margin: theme.spacing(1),
  },
  shoppingCart: {
    marginTop: theme.spacing(3),
  },
}));

const SubHeader = () => {
  const history = useHistory();
  const {
    subheader,
    image,
    shoppingCart,
    searchWrapper,
    searchBar,
  } = useStyles();
  const [searchInput, setSearchInput] = useState("");
  const handleChange = e => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (BrandNames.includes(searchInput.toLowerCase())) {
      history.push(`/brand/${searchInput}`);
    } else if (CategoryNames.includes(searchInput.toLowerCase())) {
      history.push(`/category/${searchInput}`);
    } else if (TypeNames.includes(searchInput.toLowerCase())) {
      history.push(`/types/${searchInput}`);
    } else if (searchInput.toLowerCase() === "cest moi") {
      history.push(`/brand/c'est moi`);
    } else if (searchInput.toLowerCase() === "dr hauschka") {
      history.push("/brand/dr. hauschka");
    } else if (searchInput.toLowerCase() === "elf") {
      history.push("/brand/e.l.f.");
    } else if (searchInput.toLowerCase() === "certified clean") {
      history.push("/types/CertClean");
    } else if (searchInput.toLowerCase() === "wellpeople") {
      history.push("/brand/w3llpeople");
    } else {
      history.push(`/searchsite/${searchInput}`);
    }
  };
  return (
    <div className={subheader} style={{ position: "sticky" }}>
      <Link to="/">
        <img
          className={image}
          src={require("../../logos/logo-black.svg")}
          alt="The Good Beauty logo"
        />
      </Link>
      <form onSubmit={handleSubmit} className={searchWrapper}>
        <Input
          variant="outlined"
          className={searchBar}
          type="text"
          onChange={handleChange}
          placeholder="Search Brands, Concerns, Products"
          endAdornment={
            <InputAdornment position="end">
              <Search onClick={handleSubmit} />
            </InputAdornment>
          }
        />
        <em className={shoppingCart}>
          0 items in <ShoppingCart />
        </em>
      </form>
    </div>
  );
};

export default SubHeader;
