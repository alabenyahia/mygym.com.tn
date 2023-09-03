import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SmsIcon from "@mui/icons-material/Sms";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MyGymLogo from '../../../assets/icons/mygym-logo.svg'
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import HomeIcon from "@mui/icons-material/Home";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import DiscountIcon from "@mui/icons-material/Discount";
import GroupsIcon from "@mui/icons-material/Groups";

import ReceiptIcon from "@mui/icons-material/Receipt";
import GroupIcon from "@mui/icons-material/Group";

import SendIcon from "@mui/icons-material/Send";
import { ListItemIcon } from "@mui/material";

import Divider from "@mui/material/Divider";

import ListSubheader from "@mui/material/ListSubheader";

const drawerWidth = 240;
const navItems = [
  { text: "Dashboard", icon: <HomeIcon /> },
  { text: "Manage", icon: <ManageAccountsIcon /> },
  { text: "Reports", icon: <BarChartIcon /> },
  { text: "Schedule", icon: <CalendarTodayIcon /> },
  { text: "Communication", icon: <SmsIcon /> },
];
const settings = ["Account", "Settings", "Logout"];

const DrawerItemsTopList = [
  { text: "Dashboard", icon: <HomeIcon />, selected: true },
  { text: "Schedule", icon: <CalendarMonthIcon /> },
  { text: "Communication", icon: <SendIcon /> },
];
const DrawerItemsManage = [
  { text: "Memberships", icon: <CalendarMonthIcon /> },
  { text: "Classes", icon: <CardMembershipIcon /> },
  { text: "Programs", icon: <SportsGymnasticsIcon /> },
  { text: "Discount codes", icon: <DiscountIcon /> },
  { text: "Crew", icon: <GroupsIcon /> },
];
const DrawerItemsReports = [
  { text: "Reports center", icon: <BarChartIcon /> },
  { text: "Transactions", icon: <ReceiptIcon /> },
  { text: "Members", icon: <GroupIcon /> },
  { text: "Classes", icon: <CardMembershipIcon /> },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {DrawerItemsTopList.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{ alignItems: "center" }}
              selected={item.selected}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider />

        <ListSubheader>Manage</ListSubheader>

        {DrawerItemsManage.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{ alignItems: "center" }}
              selected={item.selected}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider />

        <ListSubheader>Reports</ListSubheader>

        {DrawerItemsReports.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{ alignItems: "center" }}
              selected={item.selected}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton aria-label="delete" sx={{mr: 3}}>
            <img width= {108} src={MyGymLogo} alt="MyGym Logo" />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                sx={{ color: "#fff" }}
                startIcon={item.icon}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ ml: "auto" }}>
            <IconButton aria-label="add member" sx={{ mr: 1 }}>
              <PersonAddAlt1Icon size="large" sx={{ color: "white" }} />
            </IconButton>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        {props.children}
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
