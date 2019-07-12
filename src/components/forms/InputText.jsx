import React from 'react';
import { Spin } from 'antd';
import {
  Field,
  reduxForm,
} from 'redux-form';
import {
  Button,
  InputGroup,
  FormControl,
  Alert,
} from 'react-bootstrap';

/* eslint-disable */
const getStatus = (props) => {
  switch (props.messageStatus) {
    case 'failed':
      alert('Your message was not send');
      return <Button variant="info" type="submit">Submit</Button>;
    case 'pending':
      return <Spin size="large" />;
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
      {/* <Button variant="primary" type="submit" disabled={props.pristine || props.submitting}>Submit</Button> */}
    </InputGroup.Append>
  </InputGroup>
);


const Form = (props) => {
  const {
    handleSubmit,
    submitSucceeded,
    reset,
    messageStatus,
    pristine,
    submitting,
  } = props;

  if (submitSucceeded) {
    reset();
  }
  
  // <Alert variant={danger}>Your is not delivered</Alert>
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Field name="text" type="text" messageStatus={messageStatus} component={Input} placeholder="Type message..." pristine={pristine} submitting={submitting}/>
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'chat',
})(Form);
