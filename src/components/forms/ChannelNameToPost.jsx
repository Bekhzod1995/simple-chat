import React, { Component } from 'react';
import { connect } from 'react-redux';
import OperationResult from '../OperationResultNotification';
import Form from './InputChannelName';
import * as actionCreators from '../../actions';
import link from '../Link';


const mapStateToProps = state => ({
  channelStatus: state.channelRequestHandler.channelStatus,
  renameChannelId: state.channelModalHandler.renameChannelId,
  modalResultVisibility: state.channelRequestHandler.modalResultVisibility,
});


@connect(mapStateToProps, actionCreators)
class CreateChannelForm extends Component {
  submit = (channelName) => {
    const {
      createChannel,
    } = this.props;

    createChannel(channelName, `${link}`);
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

export default CreateChannelForm;
