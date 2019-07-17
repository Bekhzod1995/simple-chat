import React from 'react';
import {
  Button,
  Input,
} from 'antd';
import {
  Field,
  reduxForm,
} from 'redux-form';


const channelNameInput = props => (
  <div style={{ display: 'flex' }}>
    <Input
      placeholder="Type message ...."
      {...props.input}
      allowClear
    />

    <Button htmlType="submit" type="primary">Send</Button>
  </div>
);

const Form = (props) => {
  const {
    handleSubmit,
  } = props;


  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Field name="channelName" type="text" component={channelNameInput} placeholder="Enter Channel Name..." />
    </form>
  );
};

export default reduxForm({
  form: 'channel',
})(Form);
