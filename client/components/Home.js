import React from 'react';
import { connect } from 'react-redux';

export const Home = (props) => {
  const { username } = props;

  return (
    <div className="home">
      <p className="home-title">Space Hopper </p>
      <p className="home-description">The Place to Hop Up your Space</p>
      {username && <h3>Welcome, {username}</h3>}
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
