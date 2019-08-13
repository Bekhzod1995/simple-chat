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


const loading = ({ messageStatus }) => {
  if (messageStatus === 'pending' || messageStatus === 'failed') {
    return <><Loader /><Loader /><Loader /></>;
  }
  return 'Send';
};

const textInput = props => (
  <div style={displayInline}>
    <input style={inputTextStyle} type="text" name="firstname" placeholder="Your text..." autoFocus {...props.input} />
    <button style={submitStyle} type="submit" value="Send" disabled={props.meta.pristine || checkMsgStatus(props)}>
      <span style={sendIconStyle}>
        {loading(props)}
      </span>
    </button>
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
