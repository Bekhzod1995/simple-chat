import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import RenameChannelForm from './forms/RenamedChannelToPost';
import * as actionCreators from '../actions';

const mapStateToProps = state => ({
  renameModalVisibility: state.channelModalHandler.renameModalVisibility,
});

@connect(mapStateToProps, actionCreators)
class RenameChannel extends Component {
  render() {
    const { renameModalVisibility, closeModal } = this.props;
    return (
      <Modal show={renameModalVisibility} onHide={() => closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Rename Channel</Modal.Title>
        </Modal.Header>
        <Modal.Body><RenameChannelForm /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeModal()}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RenameChannel;
