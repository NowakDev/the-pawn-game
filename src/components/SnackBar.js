import React from 'react'

import MUISnackBar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

const SnackBar = ({ innerText, open, color, handleClose }) => {
  return (
    <MUISnackBar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <SnackbarContent
        style={{ backgroundColor: color }}
        message={innerText}
      />
    </MUISnackBar>
  )
}

export default SnackBar
