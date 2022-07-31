import React from "react";
import DisplaySeason from "./DisplaySeason";
import "./style.displayseason.css";

class UserLocation extends React.Component {
  state = { lat: null, error: false };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ error: error.message }),
    );
  }
  render() {
    return (
      <div>
        <p>Hello from Location component</p>
        {this.state.lat ? (
          <DisplaySeason lat={this.state.lat} />
        ) : this.state.error ? (
          <p>Error: {this.state.error}</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default UserLocation;
