import React from 'react'
import { ExitToApp, Person, ShoppingCart } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'

import { Link, Link as RouterLink } from "react-router-dom";
const Header = () => {
  return (
    <AppBar color="default" sx={{ bgcolor: "#ffffff", color: "#000000" }}>
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <RouterLink to="/">
          <img
          src ="data:image/jpeg;base64,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"
           
            alt=""
            style={{ maxWidth: "100%", height: "50px" }}
          />
        </RouterLink>
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/list">
          List
        </Button>
        <Button color="inherit" component={RouterLink} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={RouterLink} to="/add">
          Create New
        </Button>
        <Button color="inherit" component={RouterLink} to="/admin">
         Admin
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          size="large"
          color="inherit"
          component={RouterLink}
          to="/cart"
        >
          <ShoppingCart />
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
          component={RouterLink}
          to="/register"
          sx={{ marginLeft: "10px" }}
        >
          <Person />
          <Typography variant="button" sx={{ marginLeft: "5px" }}>
           
            Register
          </Typography>
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
          component={RouterLink}
          to="/signin"
          sx={{ marginLeft: "10px" }}
        >
          <ExitToApp />
          <Typography variant="button" sx={{ marginLeft: "5px" }}>
          <Link to ="/signin">
          Sign In
          </Link>

          </Typography>
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Header