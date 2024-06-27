import logo from "./logo.svg";
import "./App.css";
import { Button, Grid, Typography } from "@mui/material";
import Navbar from "./components/nav";
import { getMatches } from "./API/api";
import { useEffect } from "react";
import { useState } from "react";
import MyCard from "./components/MyCard";
function App() {
  const [data, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.data);
        console.log(data.data);
      })
      .catch((error) => alert("could not load data"));
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Typography
        variant="h2"
        style={{ marginTop: 20 }}
        color={"white"}
        fontWeight={"600"}
      >
        Realtime Cricket Score only @liveSkore
      </Typography>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
          {data.map((match) => (
            <MyCard key={match.unique_id} match={match} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
