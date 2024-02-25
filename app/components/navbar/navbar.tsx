"use client";
import {
  AssignmentIndRounded,
  AssignmentRounded,
  CakeRounded,
  CategoryRounded,
  CurrencyExchangeRounded,
  DashboardRounded,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import * as React from "react";

const drawerWidth = 240;

export default function ResponsiveDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [dashboardOptions, setDashboardOptions] = React.useState([
    {
      text: "Dashboard",
      icon: <DashboardRounded />,
      link: "/",
    },
    {
      text: "Products",
      icon: <CakeRounded />,
      link: "/products",
    },
    {
      text: "Categoreis",
      icon: <CategoryRounded />,
      link: "/categories",
    },
    {
      text: "Orders",
      icon: <AssignmentRounded />,
      link: "/orders",
    },
    {
      text: "Customers",
      icon: <AssignmentIndRounded />,
      link: "/customers",
    },
    {
      text: "Refunds",
      icon: <CurrencyExchangeRounded />,
      link: "/refunds",
    },
  ]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar sx={{ backgroundColor: "rgb(43, 52, 69)" }}>
        <Typography sx={{ color: "white", textAlign: "left" }}>
          INDIRA CHETAN MALL
        </Typography>
      </Toolbar>
      <Divider />
      <List
        sx={{
          backgroundColor: "rgb(43, 52, 69)",
          height: "100vh",
        }}
      >
        {dashboardOptions.map((obj, index) => (
          <ListItem key={obj.text} disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
                color: "white",
              }}
              onClick={() => router.push(`/dashboard${obj.link}`)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: "center",
                  color: "white",
                }}
              >
                {obj.icon}
              </ListItemIcon>
              <ListItemText primary={obj.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgb(43, 52, 69)",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: "rgb(43, 52, 69)" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflow: "hidden",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflow: "hidden",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
