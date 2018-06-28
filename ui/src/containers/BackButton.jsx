import { connect } from "react-redux";
import { returnToPatientList } from "../actions";
import BackButton from "../components/BackButton";

const mapDispatchToProps = dispatch => ({
  onBack: () => dispatch(returnToPatientList())
});

const BackButtonWithAction = connect(
  undefined,
  mapDispatchToProps
)(BackButton);

export default BackButtonWithAction;
