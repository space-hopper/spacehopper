import React from 'react';
import { connect } from 'react-redux';

export const Home = (props) => {
  const { username } = props;

  return (
    <div className="home">
      <h1>
        <span>SPACE HOPPER</span>
      </h1>
      <h1>THE PLACE TO HOP UP YOUR SPACE</h1>
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
