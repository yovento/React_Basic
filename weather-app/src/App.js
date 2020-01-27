import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Row, Col } from "react-flexbox-grid";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import "./App.css";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";

const cities = ["Vancouver,ca", "Bogota,col", "Washington,us", "London,gb"];

class App extends Component {
  constructor() {
    super();

    this.state = { city: null };
  }

  handleSelectionLocation = city => {
    this.setState({ city });
  };

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="short">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}
            ></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={4}></Paper>
            <div className="details">
              {city ? (
                <ForecastExtended city={city}></ForecastExtended>
              ) : ''}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
