import React, { useState } from "react";
import { Popover, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none",
  },
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
  const { popover, paper } = useStyles();
  return (
    <div>
      <Popover
        id="mouse-over-popover"
        className={popover}
        classes={{ paper: paper }}
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
