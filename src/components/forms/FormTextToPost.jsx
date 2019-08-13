import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actionCreators1 from '../../actions';
// import * as actionCreators2 from '../../actions/channels';
import * as actionCreators from '../../actions';
import OperationResult from '../OperationResultNotification';
import Form from './InputText';
import getUsername from '../UserNameContainer';
import link from '../Link';


const mapStateToProps = state => ({
  messageStatus: state.messagesHandler.status,
  channel: state.channelHandler.currentChannel,
  modalVisibility: state.messagesHandler.messageModalVisibility,
  messagesHandler: state.messagesHandler,
  showOnSuccess: state.messagesHandler.showOnSuccess,
  // // state,
});

// const mapActionCreatorsToProps = {
//   ...actionCreators1,
//   ...actionCreators2,
// };

@connect(mapStateToProps, actionCreators)
class FormPage extends Component {
  submit = async (values) => {
    const {
      userName,
      postMessage,
      channel,
    } = this.props;

    postMessage({ ...values, userName }, `${link}${channel.id}/messages`);
  };

  render() {
    const {
      messageStatus,
      modalVisibility,
      closeMessageModal,
      showOnSuccess,
    } = this.props;
    return (
      <>
        {OperationResult(messageStatus, modalVisibility, closeMessageModal, showOnSuccess)}
        <Form onSubmit={this.submit} messageStatus={messageStatus} />
      </>
    );
  }
}


export default getUsername(FormPage);
