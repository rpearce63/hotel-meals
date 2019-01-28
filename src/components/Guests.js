import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Guests extends Component {
  render() {
    const { names, dates } = this.props;
    return (
      <div>
        <textarea
          name="names"
          id="namesText"
          cols="30"
          rows="2"
          placeholder="Guest name"
          value={names}
          onChange={this.props.getGuestInfo}
          tabIndex="1"
        />
        <textarea
          name="dates"
          id="datesText"
          cols="30"
          rows="2"
          placeholder="Dates"
          value={dates}
          onChange={this.props.getGuestInfo}
          tabIndex="2"
        />
      </div>
    );
  }
}

Guests.propTypes = {
  names: PropTypes.string,
  dates: PropTypes.string,
  getGuestInfo: PropTypes.func
};
