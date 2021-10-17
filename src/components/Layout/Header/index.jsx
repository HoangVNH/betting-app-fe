import React, { useCallback, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Link,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { clearLocalToken, getLocalToken } from "../../../utils/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Logout } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData } from "../../../features/auth/authSlice";
import { showSuccessToast } from "../../../services/toastService";

const Header = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const accessToken = useSelector(selectUserData);
  const isLoggedIn = accessToken !== "" || getLocalToken();

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLogOut = useCallback(() => {
    clearLocalToken(dispatch);
    showSuccessToast("You've been logged out!");
  }, [dispatch]);

  const renderMenu = () => (
    <>
      <Tooltip title="Account settings">
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <Avatar sx={{ width: 32, height: 32 }}>
            <AccountCircleIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Betting App
        </Typography>
        {isLoggedIn ? (
          renderMenu()
        ) : (
          <>
            <Link
              component={RouterLink}
              variant="body2"
              to="/login"
              underline="none"
              sx={{ my: 1, mx: 1.5 }}
            >
              Log In
            </Link>
            <Button
              component={RouterLink}
              to="/register"
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
            >
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
