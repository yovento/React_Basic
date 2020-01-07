import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  "Vancouver,ca",
  "Bogota,col",
  "Washington,us",
  "London,gb"
];

class App extends Component {
  
  handleSelectionLocation = city => {
    console.log("handleSelectionLocation");
    console.log(city);
  }

  render() {
    return (
      <div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
      </div>
    );
  }
  
}

export default App;
