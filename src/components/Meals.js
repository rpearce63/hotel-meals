import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Meals extends Component {
  render() {
    return (
      <div className="meals">
        {this.props.guestMeals &&
          this.props.guestMeals.map((guest, index) => {
            return (
              <ul key={index}>
                {guest.error && <div>No menu for {guest.name}</div>}
                {guest.dates.map((date, dindex) => (
                  <div key={dindex} className="meals-list">
                    <li className="meals-list__item">
                      {guest.dates[dindex]} - Breakfast for {guest.name}
                    </li>
                    <li className="meals-list__item">
                      {guest.dates[dindex]} - Lunch for {guest.name}
                    </li>
                    <li className="meals-list__item">
                      {guest.dates[dindex]} - Dinner for {guest.name}
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
