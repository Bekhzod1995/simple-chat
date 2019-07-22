import React from 'react';
import {
  Button,
  Input,
} from 'antd';
import {
  Field,
  reduxForm,
} from 'redux-form';

const checkCHannelStatus = ({ channelStatus }) => {
  switch (channelStatus) {
    case 'failed':
      return false;
    case 'pending':
      return true;
    default:
      return false;
  }
};

const channelNameInput = props => (
  <div style={{ display: 'flex' }}>
    <Input
      placeholder="Type message ...."
      {...props.input}
      allowClear
      disabled={checkCHannelStatus(props)}
    />

    <Button htmlType="submit" type="primary" loading={checkCHannelStatus(props)}>Send</Button>
  </div>
);

const Form = (props) => {
  const {
    handleSubmit,
    channelStatus,
  } = props;

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Field name="channelName" type="text" component={channelNameInput} placeholder="Enter Channel Name..." channelStatus={channelStatus} />
    </form>
  );
};

export default reduxForm({
  form: 'channel',
})(Form);
