import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import PatientListItem from '../components/PatientListItem';
import PatientProfile from '../components/PatientProfile';
import PatientList from '../components/PatientList';

import Patients from '../__mocks__/AllPatients.json'

import '../App.css'
import '../index.css'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('PatientListItem', module)
  .add('default', () => <PatientListItem onClick={action('clicked')} firstName="Will" lastName="Chou" dateOfBirth="2011-11-23T18:57:32.082Z" avatarUrl={'https://s3.amazonaws.com/uifaces/faces/twitter/alagoon/128.jpg'}/>);

storiesOf('PatientProfile', module)
  .add('default',  () => <PatientProfile
    firstName={"will"}
    lastName={"chou"}
    dateOfBirth={"1945-05-23"}
    address={"3562 Rollin Streets"}
    roomNumber={34}
    bedNumber={8}
    avatarUrl={ "https://s3.amazonaws.com/uifaces/faces/twitter/alagoon/128.jpg"}
  />)

storiesOf('PatientList', module)
  .add('loading', () => <PatientList
  />)
  .add('empty', () => <PatientList
    patients={[]}
  />)
  .add('default', () => <PatientList
    patients={Patients.data}
  />)
