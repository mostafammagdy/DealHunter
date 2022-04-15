import React, { Component } from 'react';
import { login } from './APIUtils';
import { Link, Redirect } from 'react-router-dom';
import { ACCESS_TOKEN } from './index';

class Login2 extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: inputValue,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const loginRequest = Object.assign({}, this.state);

    login(loginRequest)
      .then((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        console.log('yeet');
        //   this.props.history.push('/');
      })
      .catch((error) => {
        console.log('Oops! Something went wrong. Please try again!');
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-item">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <button type="submit" className="btn btn-block btn-primary">
              Login
            </button>
            <button
              type="submit"
              className="btn btn-block btn-primary"
              onClick={this.props.handler}
            >
              yeet
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login2;
