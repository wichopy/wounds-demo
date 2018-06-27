import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

import { connect } from 'react-redux'


import PatientList from './containers/PatientList'
import PatientProfile from './components/PatientProfile'
import BackButton from './containers/BackButton'
import WoundList from './containers/WoundList'

class App extends Component {
  render() {
    const { selectedPatient } = this.props
    return (
      <div className="App">
        <Header>
          {selectedPatient && <BackButton />}
        </Header>

        {!selectedPatient && <PatientList />}
        {selectedPatient && <PatientProfile {...selectedPatient.attributes}/>}
        <WoundList />
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
