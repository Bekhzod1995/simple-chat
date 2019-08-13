import React from 'react';
import {
  Field,
  reduxForm,
} from 'redux-form';
import {
  displayInline,
  sendIconStyle,
  inputTextStyle,
  submitStyle,
  Loader,
} from './customInputStyle';

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

const loading = ({ channelStatus }) => {
  if (channelStatus === 'pending' || channelStatus === 'failed') {
    return <><Loader /><Loader /><Loader /></>;
  }
  return 'Send';
};


const textInput = props => (
  <div style={displayInline}>
    <input style={inputTextStyle} type="text" name="firstname" placeholder="Your text..." autoFocus {...props.input} />
    <button style={submitStyle} type="submit" value="Send" disabled={props.meta.pristine || checkCHannelStatus(props)}>
      <span style={sendIconStyle}>
        {loading(props)}
      </span>
    </button>
  </div>
);

const Form = (props) => {
  const {
    handleSubmit,
    channelStatus,
  } = props;

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Field name="channelName" type="text" component={textInput} placeholder="Enter Channel Name..." channelStatus={channelStatus} />
    </form>
  );
};

export default reduxForm({
  form: 'channel',
})(Form);
