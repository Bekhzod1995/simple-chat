import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Popconfirm, message } from 'antd';
import RenameChannel from './RenameChannel';
import * as actionCreators from '../actions/channels';


const mapStateToProps = state => ({
  channels: state.channelHandler.channels,
  removedChannelIds: state.channelHandler.removedChannelIds,
  renameModalVisibility: state.channelHandler.renameModalVisibility,
  renamedChannels: state.channelHandler.renamedChannels,
  renamedChannelsIds: state.channelHandler.renamedChannelsIds,
});


@connect(mapStateToProps, actionCreators)
class List extends Component {
  handleChannelClick = (channel) => {
    const { getCurrentChannel } = this.props;
    getCurrentChannel(channel);
  };

  // Open Rename Modal
  handleRenameClick = (id) => {
    const { openRenameModal, renameModalVisibility } = this.props;
    openRenameModal(id);
    console.log('this is a renameModal: ', renameModalVisibility);
  }

  handleDelete = (id) => {
    const { deleteChannel } = this.props;
    deleteChannel(`/api/v1/channels/${id}`);
    message.success('Channel was deleted successfully');
  };

  handleCancel = () => {
    message.error('Click on No');
  };

  renamedeleteDisplay = (removable, id, renameModalVisibility) => {
    if (removable) {
      return (
        <div>
          <button type="button" onClick={() => this.handleRenameClick(id)}>Rename</button>
          {renameModalVisibility ? <RenameChannel /> : null}
          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={() => this.handleDelete(id)}
            onCancel={this.handleCancel}
            okText="Yes"
            cancelText="No"
          >
            <button type="button">Delete</button>
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
      renamedChannels,
      renamedChannelsIds,
    } = this.props;
    return (
      <div style={{ border: '1px solid #1890ff' }}>
        <ListGroup>
          {channels.map((channel) => {
            if (removedChannelIds.includes(channel.id)) {
              return '';
            }
            // /* eslint-disable */
            // else if (renamedChannelsIds.includes(channel.id)) {
            //   return (
            //     <ListGroup.Item className="d-flex justify-content-between" key={channel.id}>
            //       <button type="button" onClick={() => this.handleChannelClick(renamedChannels.name)}>{renamedChannels.name}</button>
            //       <div className="flex-row-reverse">
            //         {this.renamedeleteDisplay(channel.removable, channel.id, renameModalVisibility, renamedChannels)}
            //       </div>
            //     </ListGroup.Item>
            //   );
            // }
            // /* eslint-enable */
            return (
              <ListGroup.Item className="d-flex justify-content-between" key={channel.id}>
                <button type="button" onClick={() => this.handleChannelClick(channel)}>{channel.name}</button>
                <div className="flex-row-reverse">
                  {this.renamedeleteDisplay(channel.removable, channel.id, renameModalVisibility, renamedChannels)}
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
