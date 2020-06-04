import React, { useState } from "react";
import { Popover, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
  },
}));

const HoverLink = ({
  anchorEl,
  handlePopoverOpen,
  handlePopoverClose,
  open,
  children,
}) => {
  const { paper } = useStyles();
  return (
    <div>
      <Popover
        classes={{ paper }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          onMouseEnter: handlePopoverOpen,
          onMouseLeave: handlePopoverClose,
        }}
        disableRestoreFocus
      >
        {children}
      </Popover>
    </div>
  );
};

export default HoverLink;
