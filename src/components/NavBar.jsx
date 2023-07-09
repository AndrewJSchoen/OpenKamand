import { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import OutdoorGrillRoundedIcon from "@mui/icons-material/OutdoorGrillRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import WifiOffRoundedIcon from '@mui/icons-material/WifiOffRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { useAtomValue } from "jotai";
import { connectionAtom } from "../state";
import { Settings } from "./Settings";

const pages = [];
const settings = ["Setup"];
const kamadoColor = "#e2231a";

export const NavBar = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const connected = useAtomValue(connectionAtom);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              bgcolor: kamadoColor,
            }}
            aria-label="OpenKamand Logo"
          >
            <OutdoorGrillRoundedIcon />
          </Avatar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              // letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            OpenKamand
          </Typography>

          {/* If we have some separate pages later, we can create the menu here */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuRoundedIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Avatar
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              bgcolor: kamadoColor,
            }}
          >
            <OutdoorGrillRoundedIcon />
          </Avatar>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            OpenKamand
          </Typography>
        
          {/* If we have some separate pages later, we can create the menu here */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}/>

          <Box sx={{ flexGrow: 0 }}>
            <Chip
              size="small"
              icon={connected ? <WifiRoundedIcon /> : <WifiOffRoundedIcon />}
              color={connected ? "success" : "warning"}
              label={connected ? "Connected" : "Not Connected"}
              sx={{ marginRight: "1rem" }}
            />
            <Tooltip title="Open settings">
                <IconButton onClick={()=>setSettingsOpen(true)} sx={{ p: 0 }}>
                <Avatar>
                  <SettingsRoundedIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <Settings open={settingsOpen} onClose={()=>setSettingsOpen(false)}/>
    </AppBar>
  );
};
