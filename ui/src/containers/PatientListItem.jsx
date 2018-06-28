import { connect } from "react-redux";
import { selectPatient } from "../actions";
import PatientListItem from "../components/PatientListItem";

const mapDispatchToProps = dispatch => ({
  selectPatient: id => dispatch(selectPatient(id))
});

const SelectPatientListItem = connect(
  undefined, // params are not named, order matters
  mapDispatchToProps
)(PatientListItem);

export default SelectPatientListItem;
