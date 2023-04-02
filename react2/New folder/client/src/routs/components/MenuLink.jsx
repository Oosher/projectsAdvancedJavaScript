import React from "react";
import { string, func } from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import { makeFirstLetterCapital } from "../../layout/header/topNavBar/menu/utils/algoMethods";
import NavVarLink from "./NavVarLink";

const MenuLink = ({ text, navigateTo, onClick, styles }) => {
  return (
    <NavVarLink to={navigateTo}>
      <MenuItem sx={{ ...styles }} onClick={onClick}>
        {makeFirstLetterCapital(text)}
      </MenuItem>
    </NavVarLink>
  );
};

MenuLink.propTypes = {
  navigateTo: string,
  onClick: func,
  text: string,
};

MenuLink.defaultProps = {
  styles: {},
};

export default MenuLink;
