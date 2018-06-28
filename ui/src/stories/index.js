import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PatientListItem from "../components/PatientListItem";
import PatientProfile from "../components/PatientProfile";
import PatientList from "../components/PatientList";
import WoundListItem from "../components/WoundListItem";

import Patients from "../__mocks__/AllPatients.json";
import ResolvedWound from "../__mocks__/ResolvedWound.json";
import UnresolvedWound from "../__mocks__/UnresolvedWound.json";

import "../App.css";
import "../index.css";

storiesOf("PatientListItem", module).add("default", () => (
  <PatientListItem
    onClick={action("clicked")}
    firstName="Will"
    lastName="Chou"
    dateOfBirth="2011-11-23T18:57:32.082Z"
    avatarUrl={"https://s3.amazonaws.com/uifaces/faces/twitter/alagoon/128.jpg"}
  />
));

storiesOf("PatientProfile", module).add("default", () => (
  <PatientProfile
    firstName={"will"}
    lastName={"chou"}
    dateOfBirth={"1945-05-23"}
    address={"3562 Rollin Streets"}
    roomNumber={34}
    bedNumber={8}
    avatarUrl={"https://s3.amazonaws.com/uifaces/faces/twitter/alagoon/128.jpg"}
  />
));

storiesOf("WoundListItem", module)
  .add("resolved", () => <WoundListItem wound={ResolvedWound} />)
  .add("confirmation", () => (
    <WoundListItem showImage={true} wound={UnresolvedWound} />
  ))
  .add("unresolved", () => <WoundListItem wound={UnresolvedWound} />);

storiesOf("PatientList", module)
  .add("loading", () => <PatientList isFetching={true} />)
  .add("empty", () => <PatientList patients={[]} />)

  // FIXME: Test a story that has containers as children.
  .add("default", () => <PatientList patients={Patients.data} />);
