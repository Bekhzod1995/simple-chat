import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Popconfirm, message } from 'antd';
import * as actionCreators from '../actions/channels';


const mapStateToProps = state => ({
  channels: state.channelHandler.channels,
  removedChannelIds: state.channelHandler.removedChannelIds,
});


@connect(mapStateToProps, actionCreators)
class List extends Component {
  handleClick = (channel) => {
    const { getCurrentChannel } = this.props;
    getCurrentChannel(channel);
  };

  handleDelete = (id) => {
    const { deleteChannel } = this.props;
    deleteChannel(`/api/v1/channels/${id}`);
    message.success('Channel was deleted successfully');
  };

  handleCancel = () => {
    message.error('Click on No');
  };

  renamedeleteDisplay = (removable, id) => {
    if (removable) {
      return (
        <div>
          <button type="button">Rename</button>
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
    const { channels, removedChannelIds } = this.props;
    console.log('THis is REmovedChannelId: ', removedChannelIds);
    return (
      <div style={{ border: '1px solid #1890ff' }}>
        <ListGroup>
          {channels.map((channel) => {
            if (removedChannelIds.includes(channel.id)) {
              return '';
            }
            return (
              <ListGroup.Item className="d-flex justify-content-between" key={channel.id}>
                <button type="button" onClick={() => this.handleClick(channel)}>{channel.name}</button>
                <div className="flex-row-reverse">
                  {this.renamedeleteDisplay(channel.removable, channel.id)}
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
