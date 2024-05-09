import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Cars: React.FC = () => {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
          flexDirection: "column",
          alignItems: "center",
          marginLeft: 1,
          marginRight: 1,
        }}
      >
        <Typography variant="h4">Your Insights</Typography>
        <Typography>
          You could save up to <strong>£1,500</strong> on running costs for your
          vehicle if you switched to electric.
        </Typography>
        <Typography marginTop={2}>
          We have 1000's of veicles for you to choose from and can help you to
          transition to EV all in one place.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
          marginBottom: 2,
          marginLeft: 1,
          marginRight: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Vehicles for you</Typography>
        <Typography>
          Here is a list of vehicles you are pre-approved for!
        </Typography>
      </Box>

      <Box sx={{ margin: 1 }}>
        <Card sx={{ maxWidth: "100%" }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/depositphotos_443072168-stock-photo-jaguar-pace-jaguar-first-all.jpeg"
            title="green iguana"
          />
          <CardContent sx={{ bgcolor: "primary" }}>
            <Typography gutterBottom variant="h5" component="div">
              <strong>Jaguar I-PACE</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              R-Dynamic HSE
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="body2"
                color="text.contrastText"
                paddingRight={1}
                paddingTop={1}
              >
                230 mile range
              </Typography>
              <Typography
                variant="body2"
                color="text.contrastText"
                paddingTop={1}
              >
                32,000 miles
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" paddingTop={1}>
              £320 a month
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Buy now</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Cars;
