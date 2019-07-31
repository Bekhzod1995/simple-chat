import React from 'react';
import {
  Button,
  Input,
} from 'antd';
import {
  Field,
  reduxForm,
} from 'redux-form';

const checkMsgStatus = (props) => {
  switch (props.messageStatus) {
    case 'failed':
      return false;
    case 'pending':
      return true;
    default:
      return false;
  }
};

const textInput = props => (
  <div>
    <Input
      placeholder="Type message ...."
      {...props.input}
      allowClear
      disabled={checkMsgStatus(props)}
    />

    <br />
    <Button htmlType="submit" type="primary" block disabled={props.meta.pristine} loading={checkMsgStatus(props)}>Send</Button>
  </div>
);

const Form = (props) => {
  const {
    handleSubmit,
    submitSucceeded,
    reset,
    messageStatus,
  } = props;

  if (submitSucceeded) {
    reset();
  }
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Field name="text" type="text" messageStatus={messageStatus} component={textInput} placeholder="Type message..." />
    </form>
  );
};

export default reduxForm({
  form: 'chat',
})(Form);
