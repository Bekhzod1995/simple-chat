import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/channels';
import CreateChannel from './CreateChannel';

const mapStateToProps = state => ({
  createModalVisibility: state.channelHandler.createModalVisibility,
});

@connect(mapStateToProps, actionCreators)
class ChannelCreateOperations extends Component {
  handleClick = () => {
    const { openCreateModal } = this.props;
    openCreateModal();
  }

  render() {
    const { createModalVisibility } = this.props;
    return (
      <div style={{ border: '1px solid #1890ff' }}>
        <button type="button" onClick={this.handleClick}>Create Channel</button>
        {createModalVisibility ? <CreateChannel /> : null}
      </div>
    );
  }
}

export default ChannelCreateOperations;
