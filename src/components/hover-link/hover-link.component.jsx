import React from 'react';
import { Popover } from '@material-ui/core';

const HoverLink = ({
  anchorEl,
  handlePopoverOpen,
  handlePopoverClose,
  open,
  children
}) => {
  return (
    <div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        PaperProps={{
          onMouseEnter: handlePopoverOpen,
          onMouseLeave: handlePopoverClose
        }}
        style={{
          padding: '10px',
          opacity: '0.98'
        }}
        disableRestoreFocus
      >
        {children}
      </Popover>
    </div>
  );
};

export default HoverLink;
