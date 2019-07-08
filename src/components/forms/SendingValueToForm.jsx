import React from 'react';
import {
  Field,
  reduxForm,
  submit,
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

/* eslint-enable */

// const afterSubmit = (result, dispatch) => dispatch(reset('chat'));

const Form = (props) => {
  const {
    handleSubmit,
    statusValue,
    reset,
  } = props;
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Field name="text" type="text" component={Input} props={{ statusValue }} reset={reset} />
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'chat',
  onSubmit: submit,
  // onSubmitSuccess: afterSubmit,
})(Form);
