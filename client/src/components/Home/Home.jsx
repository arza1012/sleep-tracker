import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Collection from "./resume";
import Graph from "../Graphs/TestGraph";
import ResponsiveAppBar from "./Nav";
// import "./home.css";
import Calc from "./calc";
import Swipeable from "./tips";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Calendario from "../Calendario/Calendario";
import { makeStyles } from "@mui/styles";
import Fitbit from "../SignUp/Fitbit";
import { getByDate } from "../../actions/getByDate";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const yesterday = new Date(Date.now() - 28800000)
      .toISOString()
      .split("T")[0];
    dispatch(getByDate(yesterday));
  }, [dispatch]);

  let user = {
    name: "Juan",
    sueño: [1, 3, 2, 4, 5, 1, 3, 2, 1, 5, 3, 4],
    consumo: {
      cafeina: "",
      alcohol: "2 cervezas, 3 mojitos",
      comida: "19:00",
      ejercicio: { tiempo: "30 minutos", tipo: "caminata" },
    },
  };
  let consumed = user.consumo;
  const dream = user.sueño;

  let prueba = [["horas de sueño", "profundidad de sueño"]];
  for (let i = 0; i < dream.length; i++) {
    prueba.push([i + 1, dream[i]]);
  }

  const greet = () => {
    var text = "";
    var now = new Date();
    var time = now.getHours();
    if (time >= 5 && time < 13) {
      text = "Buenos días! ☀️ ";
    } else if (time >= 13 && time < 21) {
      text = "Buenas tardes! 🌎";
    } else {
      text = "Buenas noches! 🌙 ";
    }
    return text;
  };

  const classes = useStyles();

  return (
    <Grid
      className={classes.home}
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={1}
      flex={4}
      p={2}
      // maxWidth='100vw'
    >
      <ResponsiveAppBar />
      <Grid item>
        <Typography className={classes.saludo} variant="h4">
          ¡Hola {user.name} {greet()}
        </Typography>
      </Grid>
      <div>
        <Fitbit />
      </div>

      <div>
        <Calendario />
      </div>

      <Grid>
        <Typography variant="h6">{Date()}</Typography>
      </Grid>

      <Grid className={classes.Collection} item>
        <Collection arg={consumed} />
      </Grid>

      {/* <br /> */}
      {/* <Grid
        className={classes.containerHome}
        item
      > */}
      <Grid className={classes.graphHome} item>
        <Graph />
      </Grid>

      <Grid className={classes.calc} item>
        <Calc />
      </Grid>

      <Grid className={classes.swipeableHome} item>
        <Swipeable className={classes.swipeable} />
      </Grid>

      {/* </Grid>
       */}
    </Grid>
  );
};

export default Home;

const useStyles = makeStyles(() => ({}));
