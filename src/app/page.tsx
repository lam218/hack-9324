import Image from "next/image";
import styles from "./page.module.css";
import Box from "@mui/material/Box";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import { Paper, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "next/link";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import Button from '@mui/material/Button';



export default function Home() {
  return (
    <main className={styles.main}>
      <Box sx={{ position: "fixed", top: 112, width: "calc(100%)" }}>
        <Paper
          elevation={0}
          sx={{
            padding: 2,
            width: "100%",
            borderRadius: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background:
              "linear-gradient(180deg, rgba(13,13,13,1) 0%, rgba(22,22,22,0.10550157563025209) 100%);",
            color: "primary.contrastText",
          }}
        >
          <Typography>Range Rover Sport</Typography>
          <Image
            src="/range-rover-hse-standard-wheelbase.avif"
            alt="car"
            width={380}
            height={200}
          />
        </Paper>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#2C684F",
            borderRadius: 0,
          }}
        >
          <Typography color={"white"}>Your Finance</Typography>
          <Box sx={{ marginTop: 1, width: "100%" }}>
            <LinearProgress value={25} variant="determinate" color="success" />
          </Box>
          <Box sx={{marginTop: 2, display: 'flex'}}><Link href="/">Make an overpayment?</Link></Box>
        </Paper>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              width: "calc(50% - 8px)",
              marginTop: 2,
              marginRight: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>Your insights</Typography>
            <Box sx={{ marginTop: 1 }}>
              <TipsAndUpdatesOutlinedIcon fontSize="large" />
            </Box>
            <Box sx={{ marginTop: 1 }}><Button variant="outlined">Find out more?</Button></Box>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              width: "calc(50% - 8px)",
              marginTop: 2,
              marginLeft: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>Manage my vehicle</Typography>
            <Box sx={{ marginTop: 1 }}>
              <DirectionsCarFilledOutlinedIcon fontSize="large" />
            </Box>
            <Box sx={{ marginTop: 1 }}><Button variant="outlined">Find out more?</Button></Box>

          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              width: "calc(50% - 8px)",
              marginTop: 2,
              marginRight: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>Route planner</Typography>
            <MapOutlinedIcon fontSize="large" />
            <Box sx={{ marginTop: 1 }}><Button variant="outlined">Find out more?</Button></Box>

          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              width: "calc(50% - 8px)",
              marginTop: 2,
              marginLeft: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>Manage My Finance</Typography>
            <AccountBalanceOutlinedIcon fontSize="large" />
            <Box sx={{ marginTop: 1 }}><Button variant="outlined">Find out more?</Button></Box>

          </Paper>
        </Box>
      </Box>
    </main>
  );
}
