import {
  Card,
  CardActions,
  CardContent,
  DialogContent,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState, Fragment } from "react";

import { getMatchDetail } from "../API/api";
const MyCard = ({ match }) => {
  const [detail, setDetail] = useState({});
  const [open, setOpen] = useState(false);
  const handleClick = (id) => {
    getMatchDetail(id)
      .then((data) => {
        console.log("MATCH DATA", data);
        setDetail(data);
        handleOpen();
      })
      .catch((error) => console.log("error"));
  };
  const matchCard = () => {
    return (
      <Card style={{ marginTop: 25 }}>
        <CardContent>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <Typography variant="h5" fontWeight={"500"}>
                {match.teams[0]}
              </Typography>
            </Grid>
            <Grid item>
              <img
                style={{ width: 205 }}
                src={require("../img/vs.jpg")}
                alt=""
              />
            </Grid>
            <Grid item>
              <Typography variant="h5" fontWeight={"500"}>
                {match.teams[1]}
              </Typography>{" "}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="center">
            <button
              onClick={() => {
                handleClick(match.id);
              }}
              item
              variant="contained"
              color="primary"
            >
              Get Match Info
            </button>
            <button
              style={{ marginLeft: 15 }}
              item
              variant="contained"
              color="primary"
            >
              Start Time {new Date(match.dateTimeGMT).toLocaleString()}
            </button>
          </Grid>
        </CardActions>
      </Card>
    );
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const getDialog = () => {
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"Match Info"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-alert-description">
          <Typography>{detail.status}</Typography>
          <Typography>
            Match
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {detail.matchStarted ? "Started" : "Still Not Started"}{" "}
            </span>
          </Typography>
          <Typography>
            Score
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {" "}
              {detail.score}
            </span>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>;
  };
  return (
    <Fragment>
      {matchCard()}
      {getDialog()}
    </Fragment>
  );
};

export default MyCard;
