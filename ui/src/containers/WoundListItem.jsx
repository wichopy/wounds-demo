import React from "react";
import PropType from "prop-types";
import WoundListItem from "../components/WoundListItem";
import Confirmation from "../components/Confirmation";
import { requestWoundResolve } from "../actions";
import { connect } from "react-redux";

class WoundListItemContainer extends React.Component {
  static propTypes = {
    wound: PropType.object
  };

  static defaultState = {
    showConfirmation: false,
    woundToResolve: undefined,
    showImage: false
  };

  state = WoundListItemContainer.defaultState;

  onResolveAttempt = wound => {
    this.setState({
      showConfirmation: true,
      woundToResolve: wound,
      showImage: true
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.patchSuccess) {
      this.setState({
        showConfirmation: false,
        showImage: false
      });
    }
  }

  resolveWound = wound => {
    /* To prepare the wound for the PATCH:
      Remove meta data
      Remove attributes.patientId
      Convert id into a string
      Set resolved to true
    */
    const resolvedWound = { ...wound };
    const woundAttributes = { ...wound.attributes };
    const { createdAt, updatedAt, patientId, ...rest } = woundAttributes;
    resolvedWound.attributes = rest;
    resolvedWound.attributes.resolved = true;
    resolvedWound.id = String(resolvedWound.id);

    return { woundId: resolvedWound.id, resolvedWound: resolvedWound };
  };

  onResolveConfirm = () => {
    const resolvedWoundPayload = this.resolveWound(this.state.woundToResolve);
    this.props.dispatch(requestWoundResolve(resolvedWoundPayload));
  };

  onResolveCancel = () => {
    this.setState(WoundListItemContainer.defaultState);
  };

  toggleImage = () => {
    this.setState({ showImage: !this.state.showImage });
  };

  render() {
    return (
      <div>
        <WoundListItem
          wound={this.props.wound}
          resolveWound={this.onResolveAttempt}
          showImage={this.state.showImage}
          toggleResolvedImage={this.toggleImage}
        />
        {this.state.showConfirmation ? (
          <Confirmation
            onConfirm={this.onResolveConfirm}
            onCancel={this.onResolveCancel}
          />
        ) : null}
      </div>
    );
  }
}

export default connect(state => ({
  patchSuccess: state.wounds.patchSuccess
}))(WoundListItemContainer);
