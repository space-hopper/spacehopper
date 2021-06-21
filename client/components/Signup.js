import React from 'react';
import { connect } from 'react-redux';
// import { authenticate } from '../store';
import { postNewSignup } from '../store/signup';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.createNewMember({ ...this.state });

    this.setState({ firstName: '', lastName: '', email: '', password: '' });
  }
  render() {
    console.log(this.state);
    const { firstName, lastName, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="email">Email</label>
            <input name="email" onChange={this.handleChange} value={email} />
          </div>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            onChange={this.handleChange}
            value={firstName}
          />
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              onChange={this.handleChange}
              value={lastName}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={this.handleChange}
              value={password}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewMember: (newMember) => dispatch(postNewSignup(newMember)),

  };
};

// const mapDispatch = dispatch => {
//     return {
//       handleSubmit(evt) {
//         evt.preventDefault()
//         const formName = evt.target.name
//         const username = evt.target.username.value
//         const password = evt.target.password.value
//         dispatch(authenticate(username, password, formName))
//       }
//     }
// }

export default connect(mapSignup, mapDispatchToProps)(Signup);
