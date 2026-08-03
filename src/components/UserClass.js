import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h3> Name: {name} </h3>
        <h4> Location: {location} </h4>
        <h4> Contact: https://www.github.com/shubhambodane</h4>
      </div>
    );
  }
}

export default UserClass;
