import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListGroup,
  Button,
} from 'react-bootstrap';
import { Popconfirm, message } from 'antd';
import RenameChannel from './RenameChannel';
import * as actionCreators from '../actions/channels';
import link from './Link';


const mapStateToProps = state => ({
  channels: state.channelHandler.channels,
  removedChannelIds: state.channelHandler.removedChannelIds,
  renameModalVisibility: state.channelModalHandler.renameModalVisibility,
  channelStatus: state.channelRequestHandler.channelStatus,
});


@connect(mapStateToProps, actionCreators)
class List extends Component {
  handleChannelClick = (channel) => {
    const { getCurrentChannel } = this.props;
    getCurrentChannel(channel);
  };

  // Open Rename Modal
  handleRenameClick = (id) => {
    const { openRenameModal } = this.props;
    openRenameModal(id);
  }

  handleDelete = (id) => {
    const { deleteChannel } = this.props;
    deleteChannel(`${link}${id}`);
  };

  handleCancel = () => {
    message.error('Click on No');
  };

  renamedeleteDisplay = (removable, id, renameModalVisibility) => {
    if (removable) {
      return (
        <div>
          <Button variant="success" onClick={() => this.handleRenameClick(id)}>Rename</Button>
          {renameModalVisibility ? <RenameChannel /> : null}
          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={() => this.handleDelete(id)}
            onCancel={this.handleCancel}
            okText="Yes"
            cancelText="No"
          >
            <Button variant="danger">Delete</Button>
          </Popconfirm>
        </div>
      );
    }
    return '';
  }

  render() {
    const {
      channels,
      removedChannelIds,
      renameModalVisibility,
    } = this.props;
    return (
      <div>
        <h3>Channels: </h3>
        <ListGroup>
          {channels.map((channel) => {
            if (removedChannelIds.includes(channel.id)) {
              return '';
            }
            return (
              <ListGroup.Item className="d-flex justify-content-between" key={channel.id}>
                <Button variant="info" onClick={() => this.handleChannelClick(channel)}>{channel.name}</Button>
                <div className="flex-row-reverse">
                  {this.renamedeleteDisplay(
                    channel.removable,
                    channel.id,
                    renameModalVisibility,
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
