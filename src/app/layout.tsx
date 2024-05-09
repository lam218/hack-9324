"use client";
import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SearchIcon from "@mui/icons-material/Search";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Inter } from "next/font/google";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
  primary: {
    main: "#2C684F",
  },
},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
      <body className={inter.className}>
        <header>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 1,
              background: "#2C684F",
              color: "primary.contrastText",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              width: "100%",
              height: "60",
            }}
          >
            <Box padding={1}>
              <MailOutlineIcon />
            </Box>
            <Typography sx={{ minWidth: 100 }}>Good morning Bryn</Typography>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ padding: 1 }}>
                <HelpOutlineIcon />
              </Box>
              <Box sx={{ padding: 1 }}>
                <ManageAccountsIcon />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: "fixed",
              height: "60",
              top: 60,
              padding: 2,
              bgcolor: "primary.contrastText",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Link href="/">Accounts</Link>
            <Link href="/">Save & Interest</Link>

            <Link href="/">Homes</Link>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="/">Transport</Link>
              <span className="selected" />
            </Box>
          </Box>
        </header>
        {children}
        <footer>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation showLabels value={"Home"}>
              <BottomNavigationAction label="Home" icon={<HomeIcon />} href="/"/>
              <BottomNavigationAction
                label="Apply"
                icon={<CurrencyPoundIcon />}
              />
              <BottomNavigationAction
                label="Pay & Transfers"
                icon={<SwapHorizIcon />}
              />
              <BottomNavigationAction label="Search" icon={<SearchIcon />} />
              <BottomNavigationAction
                label="Manage Cards"
                icon={<CreditCardIcon />}
              />
            </BottomNavigation>
          </Paper>
        </footer>
      </body>
      </ThemeProvider>
    </html>
  );
}
