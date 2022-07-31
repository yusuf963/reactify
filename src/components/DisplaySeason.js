import React, { Component } from "react";

class DisplaySeason extends Component {
  state = { currentMonth: null, season: null };

  render() {
    const seasonConfig = {
      summer: {
        text: "lets hit the beach",
        iconName: "sun",
      },
      winter: {
        text: "its cold",
        iconName: "star",
      },
    };
    const getSeson = (lat, month) => {
      if (month > 5 && month < 9) {
        return lat > 0 ? "summer" : "winter";
      } else {
        return lat < 0 ? "winter" : "summer";
      }
    };
    const season = getSeson(this.props.lat, new Date().getMonth());
    //  change this into this
    // const text = season === "winter" ? "Its Cold" : "Very Hot"
    const { text, iconName } = seasonConfig[season];

    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <p>hello from season display</p>
        <p>
          The season is {season}, {text}
        </p>
        <p>Lat is: {this.props.lat}</p>
        <i className={`icon-right massive ${iconName} icon`}></i>
      </div>
    );
  }
}

export default DisplaySeason;
