import React from 'react';

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0,
    };
  }

  increment = () => {
    let n = this.state.timesClicked + 1;

    this.setState({ timesClicked: n });
  };

  render() {
    return (
      <button onClick={this.increment}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
