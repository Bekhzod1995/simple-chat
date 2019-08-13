import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListGroup,
  Button,
  Modal,
} from 'react-bootstrap';
import RenameChannel from './RenameChannel';
import * as actionCreators from '../actions';
import link from './Link';


const mapStateToProps = state => ({
  channels: state.channelHandler.channels,
  renameModalVisibility: state.channelModalHandler.renameModalVisibility,
  channelStatus: state.channelModalHandler.channelStatus,
  modalResultVisibility: state.channelRequestHandler.modalResultVisibility,
  deleteModalVisibility: state.channelModalHandler.deleteModalVisibility,
  removingChannelName: state.channelHandler.removingChannelName,
  removingChannelId: state.channelHandler.removingChannelId,
});

@connect(mapStateToProps, actionCreators)
class List extends Component {
  handleChannelClick = (channel) => {
    const { setCurrentChannel } = this.props;
    setCurrentChannel(channel);
  };

  handleRenameClick = async (id) => {
    const {
      openRenameModal,
    } = this.props;
    await openRenameModal(id);
  }

  handleDelete = () => {
    const {
      deleteChannel,
      removingChannelId,
      closeModal,
    } = this.props;

    deleteChannel(`${link}${removingChannelId}`);
    closeModal();
  };

  handleDeleteChannel = async ({ id, channelName }) => {
    const {
      openDeleteConfirmationModal,
      removingChannel,
    } = this.props;
    await removingChannel({ id, channelName });
    openDeleteConfirmationModal();
  };

  renamedeleteDisplay = (
    removable,
    id,
    renameModalVisibility,
    channelName,
    deleteModalVisibility,
  ) => {
    const { removingChannelName, closeModal } = this.props;
    if (removable) {
      return (
        <div>
          <Button variant="success" onClick={() => this.handleRenameClick(id)}>Rename</Button>
          {renameModalVisibility ? <RenameChannel /> : null}
          <Modal show={deleteModalVisibility} onHide={() => closeModal()}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Channel</Modal.Title>
            </Modal.Header>
            <Modal.Body><p>{`Are you sure to delete it ${removingChannelName}?`}</p></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => closeModal()}>Cancel</Button>
              <Button variant="success" onClick={() => this.handleDelete()}>Yes</Button>
            </Modal.Footer>
          </Modal>
          <Button variant="danger" onClick={() => this.handleDeleteChannel({ id, channelName })}>Delete</Button>
        </div>
      );
    }
    return '';
  }

  render() {
    const {
      channels,
      renameModalVisibility,
      deleteModalVisibility,
    } = this.props;
    return (
      <div>
        <h3>Channels: </h3>
        <ListGroup>
          {channels.map((channel) => {
            return (
              <ListGroup.Item className="d-flex justify-content-between" key={channel.id}>
                <Button variant="info" onClick={() => this.handleChannelClick(channel)}>{channel.name}</Button>
                <div className="flex-row-reverse">
                  {this.renamedeleteDisplay(
                    channel.removable,
                    channel.id,
                    renameModalVisibility,
                    channel.name,
                    deleteModalVisibility,
                  )}
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default List;
