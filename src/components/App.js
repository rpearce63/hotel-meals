import React, { Component } from "react";
import "../styles/App.css";
import Guests from "./Guests";
import Meals from "./Meals";

class App extends Component {
  state = {
    guestMeals: [],
    names: "",
    dates: ""
  };

  dateRegex = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))\s(to)\s([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
  DAY_MILIS = 86400000;
  buildMenus = () => {
    let menusArray = [];

    this.state.names.split("\n").forEach((name, index) => {
      const dates = this.state.dates.split("\n");

      if (dates[index] !== undefined && dates[index].match(this.dateRegex)) {
        const resDates = dates[index].split(" to ");
        const startDate = this.stringToDate(resDates[0]);
        const endDate = this.stringToDate(resDates[1]);
        const days = (endDate - startDate) / this.DAY_MILIS + 1;
        const menuDates = [];
        for (let index = 0; index < days; index++) {
          const date = new Date(startDate);
          date.setDate(date.getDate() + index);
          menuDates.push(date);
        }
        menusArray.push({ name, dates: [...menuDates] });
      } else {
        menusArray.push({ name, dates: [], error: true });
      }
    });
    this.setState({ guestMeals: menusArray });
  };

  stringToDate(dateStr) {
    const parts = dateStr.split("-");
    const aDate = new Date(parts[0], parts[1] - 1, parts[2]);
    return aDate;
  }

  getGuestInfo = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        this.buildMenus();
      }
    );
  };
  render() {
    return (
      <div className="App">
        <Guests
          names={this.state.names}
          dates={this.state.dates}
          getGuestInfo={this.getGuestInfo}
        />
        <Meals guestMeals={this.state.guestMeals} />
      </div>
    );
  }
}

export default App;
