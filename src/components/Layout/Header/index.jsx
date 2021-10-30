import React, { useCallback, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Link,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  InputBase
} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { Link as RouterLink } from "react-router-dom";
import { clearLocalToken, getLocalToken } from "../../../utils/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from '@mui/icons-material/Search';
import { Logout } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData } from "../../../features/auth/authSlice";
import { showSuccessToast } from "../../../services/toastService";
import { Box } from "@mui/system";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

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
      <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between", alignItems: 'center' }}>
        <Box component="div" sx={{
          display: 'flex',
          alignItems: "center"
        }}>
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            sx={{
              // flexGrow: 1,
              color: 'inherit'
            }}
            noWrap
          >
            Betting App
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        {isLoggedIn ? (
          renderMenu()
        ) : (
          <Box component="div" sx={{
            display: 'flex',
            alignItems: "center"
          }}>
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
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
