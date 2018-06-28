import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import Header from './components/Header'
import PatientList from './containers/PatientList'
import PatientProfile from './containers/PatientProfile'
import BackButton from './containers/BackButton'
import Footer from './components/Footer'

class App extends Component {
  render() {
    const { selectedPatient } = this.props
    return (
      <div className="App">
        <Header>
          {selectedPatient ? <BackButton /> : null}
        </Header>
        {selectedPatient ? <PatientProfile selectedPatient={selectedPatient}/> : <PatientList />}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPatient: state.patients.selectedPatient,
  }
}

export default connect(mapStateToProps)(App);
