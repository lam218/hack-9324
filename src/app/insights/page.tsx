"use client";

import React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import DirectionsSubwayFilledOutlinedIcon from "@mui/icons-material/DirectionsSubwayFilledOutlined";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";

const Insights: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 112,
        width: "calc(100%)",
        overflow: "scroll",
        height: "calc(100vh - 169px)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Typography variant="h4">Insights</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            width: "calc(100% - 32px)",
            marginTop: 2,
            marginRight: 2,
            marginLeft: 2,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DirectionsCarFilledOutlinedIcon fontSize="large" />
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography>Miles driven</Typography>
              <Typography>15,378</Typography>
            </Box>
            <Box>
              <Typography>Fuel Costs</Typography>
              <Typography>£450pm</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Typography>
              Have you considered switching to electric? You could save upwards
              of <strong>£1,500</strong> annually on running costs
            </Typography>
            <Button variant="outlined" color="primary" sx={{ marginTop: 2 }}>
              <Link href='/cars'>Learn more</Link>
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={1}
          sx={{
            width: "calc(100% - 32px)",
            marginTop: 2,
            marginRight: 2,
            marginLeft: 2,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DirectionsSubwayFilledOutlinedIcon fontSize="large" />
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography>Trains booked</Typography>
              <Typography>12</Typography>
            </Box>
            <Box>
              <Typography>Cost</Typography>
              <Typography>£200pm</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Typography>
              Did you know you could save <strong>£50</strong> per month by getting a railcard?
            </Typography>
            <Button variant="outlined" color="primary" sx={{ marginTop: 2 }}>
              Show me
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={1}
          sx={{
            width: "calc(100% - 32px)",
            marginTop: 2,
            marginRight: 2,
            marginLeft: 2,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DirectionsBikeOutlinedIcon fontSize="large" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Typography>
              Looks like you are elidgible for the cycle to work scheme.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ marginTop: 2 }}>
              Learn more
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Insights;
