import { connect } from "react-redux";
import WoundList from "../components/WoundList";

const mapStateToProps = state => {
  return {
    wounds: state.wounds.items
  };
};

export default connect(mapStateToProps)(WoundList);
