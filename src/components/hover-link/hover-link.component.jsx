import React from "react";
import { Popover, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    opacity: "0.98",
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
        className={paper}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
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
