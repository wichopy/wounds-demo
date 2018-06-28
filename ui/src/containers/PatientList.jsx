import { connect } from "react-redux";
import PatientList from "../components/PatientList";

const mapStateToProps = state => {
  return {
    isFetching: state.patients.isFetching,
    patients: state.patients.items
  };
};

const AsyncPatientList = connect(mapStateToProps)(PatientList);

export default AsyncPatientList;
