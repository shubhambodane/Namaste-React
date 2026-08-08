import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: '',
        location: '',
        html_url: '',
        avatar_url: '',
      },
    };
  }

  async componentDidMount() {
    // best place to make an API call
    const data = await fetch('https://api.github.com/users/shubhambodane');
    const jsonData = await data.json();
    console.log('Fetched User Data:', jsonData);
    this.setState({ userData: jsonData });
  }

  render() {
    const { userData } = this.state;
    return (
      <div>
        <img src={userData.avatar_url || null} alt="User Avatar" />
        <h3> Name: {userData.name} </h3>
        <h4> Location: {userData.location} </h4>
        <h4> Contact: {userData.html_url} </h4>
      </div>
    );
  }
}

export default UserClass;
