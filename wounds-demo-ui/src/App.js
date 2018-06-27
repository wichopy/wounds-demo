import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

import { connect } from 'react-redux'


import PatientList from './containers/PatientList'
import PatientProfile from './components/PatientProfile'
import BackButton from './containers/BackButton'
import WoundListItem from './components/WoundListItem'

class App extends Component {
  render() {
    const { selectedPatient, wounds } = this.props
    return (
      <div className="App">
        <Header>
          {selectedPatient && <BackButton />}
        </Header>

        {!selectedPatient && <PatientList />}
        {selectedPatient && <PatientProfile {...selectedPatient.attributes}/>}
        {wounds.length > 0 && <h3>Wounds</h3>}
        {wounds && wounds.map(wound => {
          return <WoundListItem wound={wound} />
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPatient: state.patients.selectedPatient,
    wounds: state.wounds.items,
  }
}

export default connect(mapStateToProps)(App);
