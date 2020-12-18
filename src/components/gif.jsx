/* eslint-disable react/sort-comp */
/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    // Don't call render if props.id did not change
    return nextProps.id !== this.props.id;
  }

  render() {
    console.log(`GIF RENDER ${this.props.id}`);

    if (!this.props.id) {
      return null;
    }

    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return <img src={src} className="gif" onClick={this.handleClick} />;
  }
}

export default Gif;
