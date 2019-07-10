import React from 'react';
import {
  Field,
  reduxForm,
} from 'redux-form';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

/* eslint-disable */
const getStatus = (props) => {
  switch (props.statusValue) {
    case 'failed':
      return <Button variant="danger" type="submit" disabled>Failed</Button>;
    case 'pending':
      return <Button variant="warning" type="submit" disabled>Pending...</Button>;
    default:
      return <Button variant="info" type="submit">Submit</Button>;
  }
};

const Input = props => (
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Type message..."
      {...props.input}
    />
    <InputGroup.Append>
      {getStatus(props)}
    </InputGroup.Append>
  </InputGroup>
);


const Form = (props) => {
  const {
    handleSubmit,
    submitSucceeded,
    reset,
    statusValue,
  } = props;

  if (submitSucceeded) {
    reset();
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Field name="text" type="text" statusValue={statusValue} component={Input} placeholder="Type message..." />
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'chat',
})(Form);
