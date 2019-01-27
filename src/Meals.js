import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Meals extends Component {
  formatDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return `${year}-${month}-${day}`;
  }
  render() {
    return (
      <div className="meals">
        {this.props.guestMeals.map((guest, index) => {
          return (
            <ul key={index}>
              {guest.error && <div>No menu for {guest.name}</div>}
              {guest.dates.map((date, dindex) => (
                <div key={dindex} className="meals-list">
                  <li className="meals-list__item">
                    {this.formatDate(guest.dates[dindex])} - Breakfast for{" "}
                    {guest.name}
                  </li>
                  <li className="meals-list__item">
                    {this.formatDate(guest.dates[dindex])} - Lunch for{" "}
                    {guest.name}
                  </li>
                  <li className="meals-list__item">
                    {this.formatDate(guest.dates[dindex])} - Dinner for{" "}
                    {guest.name}
                  </li>
                </div>
              ))}
            </ul>
          );
        })}
      </div>
    );
  }
}

Meals.propTypes = {
  guestMeals: PropTypes.array
};
