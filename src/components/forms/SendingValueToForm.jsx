import React from 'react';
import {
  Field,
  reduxForm,
  submit,
  reset,
} from 'redux-form';
import { Button, InputGroup, FormControl } from 'react-bootstrap';


const getStatus = (status) => {
  if (((status === 'received') || (status === null)) && (status !== 'failed')) {
    return <Button variant="info" type="submit">Submit</Button>;
  }
  return <Button variant="info" type="submit" disabled>Submit</Button>;
};

const Input = props => (
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Type message..."
      {...props.input}
    />
    <InputGroup.Append>
      {getStatus(props.statusValue)}
    </InputGroup.Append>
  </InputGroup>
);

const afterSubmit = (result, dispatch) => dispatch(reset('chat'));

const Form = (props) => {
  const { handleSubmit } = props;
  const { statusValue } = props;
  // console.log('We are in form', statusValue);
  return (
    <form onSubmit={handleSubmit} onChange={e => e.preventDefault}>
      <Field name="text" type="text" component={Input} props={{ statusValue }} />
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'chat',
  onSubmit: submit,
  onSubmitSuccess: afterSubmit,
})(Form);
