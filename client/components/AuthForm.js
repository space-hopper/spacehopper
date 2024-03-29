import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error, isLoggedIn } = props;

  return (
    <>
      {isLoggedIn ? (
        <h3 className="home">Welcome, Space Hopper Shopper!</h3>
      ) : (
        <div>
          <form onSubmit={handleSubmit} name={name}>
            <div>
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="email" />
            </div>
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" />
            </div>
            <div>
              <button type="submit">{displayName}</button>
            </div>
            <p>
              Don't have an account with us? <Link to="/signup">Sign up</Link>
            </p>
            {error && error.response && <div> {error.response.data} </div>}
          </form>
        </div>
      )}
    </>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
    isLoggedIn: !!state.auth.id,
  };
};

// const mapSignup = state => {
//   return {
//     name: 'signup',
//     displayName: 'Sign Up',
//     error: state.auth.error
//   }
// }

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(authenticate(email, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
