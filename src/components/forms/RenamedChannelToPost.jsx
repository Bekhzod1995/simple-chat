import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './InputChannelName';
import * as actionCreators from '../../actions';
import link from '../Link';
import OperationResult from '../OperationResultNotification';


const mapStateToProps = state => ({
  channelStatus: state.channelRequestHandler.channelStatus,
  modalFor: state.channelModalHandler.modalFor,
  renameChannelId: state.channelModalHandler.renameChannelId,
  modalResultVisibility: state.channelRequestHandler.modalResultVisibility,
});

@connect(mapStateToProps, actionCreators)
class RenameChannelForm extends Component {
  submit = (channelName) => {
    const {
      renameChannel,
      renameChannelId,
    } = this.props;

    renameChannel(channelName, `${link}${renameChannelId}`);
  };

  render() {
    const { channelStatus, modalResultVisibility, closeResultModal } = this.props;
    return (
      <>
        {OperationResult(channelStatus, modalResultVisibility, closeResultModal)}
        <Form onSubmit={this.submit} channelStatus={channelStatus} />
      </>
    );
  }
}

export default RenameChannelForm;
