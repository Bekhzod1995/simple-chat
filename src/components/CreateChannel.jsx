import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import CreateChannelForm from './forms/ChannelNameToPost';
import * as actionCreators from '../actions';

const mapStateToProps = state => ({
  createModalVisibility: state.channelModalHandler.createModalVisibility,
});

@connect(mapStateToProps, actionCreators)
class CreateChannel extends Component {
  render() {
    const { createModalVisibility, closeModal } = this.props;
    return (
      <>
        <Modal show={createModalVisibility} onHide={() => closeModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Create Channel</Modal.Title>
          </Modal.Header>
          <Modal.Body><CreateChannelForm /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => closeModal()}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CreateChannel;
