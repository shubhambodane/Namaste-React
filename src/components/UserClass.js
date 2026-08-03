import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 1,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h3> Name: {name} </h3>
        <p> Count: {count}</p>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          {' '}
          Increase Count
        </button>
        <h4> Location: {location} </h4>
        <h4> Contact: https://www.github.com/shubhambodane</h4>
      </div>
    );
  }
}

export default UserClass;
