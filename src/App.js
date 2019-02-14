import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import Doctors from './components/Doctors';
import NavBar from './components/NavBar';
import Patients from './components/Patients';
import Appointments from './components/Appointments';
import PatientForm from './components/PatientForm';
import AppointmentForm from './components/AppointmentForm';
import Login from './components/Login';

import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();

class App extends Component {

  handleLogOut = () => {
    Auth.logOut()
    this.props.history.replace('/login');
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>Welcome {this.props.user}</h2>
        </div>
        <p className="App-intro">
          <button type="button" className="form-submit" onClick={this.handleLogOut}>Logout</button>
        </p>
      </div>
    );
  }
}

export default App;
