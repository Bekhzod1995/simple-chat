import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import { Button } from 'react-bootstrap';


const Form = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} onChange={e => e.preventDefault}>
      <Field name="text" component="input" type="text" />
      <Button variant="info" type="submit">Submit</Button>
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'contact',
  onSubmit: submit,
})(Form);
