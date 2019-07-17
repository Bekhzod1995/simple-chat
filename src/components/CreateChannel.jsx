import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import CreateChannelForm from './forms/ChannelNameToPost';
import * as actionCreators from '../actions/channels';

const mapStateToProps = state => ({
  visible: state.channelHandler.visible,
});

@connect(mapStateToProps, actionCreators)
class CreateChannel extends Component {
    handleOk = (e) => {
      const { closeModal } = this.props;
      closeModal();
    }

    handleCancel = () => {
      const { closeModal } = this.props;
      closeModal();
    }

    render() {
      const { visible } = this.props;
      return (
        <Modal
          title="Create Channel: "
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <CreateChannelForm />
        </Modal>
      );
    }
}

export default CreateChannel;
