import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import * as actionCreators from '../actions/channels';
import CreateChannel from './CreateChannel';

const mapStateToProps = state => ({
  createModalVisibility: state.channelModalHandler.createModalVisibility,
});

@connect(mapStateToProps, actionCreators)
class ChannelCreate extends Component {
  handleClick = () => {
    const { openCreateModal } = this.props;
    openCreateModal();
  }

  render() {
    const { createModalVisibility } = this.props;
    return (
      <div>
        <Button variant="success" onClick={this.handleClick}>Create Channel</Button>
        {createModalVisibility ? <CreateChannel /> : null}
      </div>
    );
  }
}

export default ChannelCreate;
