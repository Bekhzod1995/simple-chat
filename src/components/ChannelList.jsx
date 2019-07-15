import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';


const mapStateToProps = state => ({
  channels: state.channelHandler.channels,
});


@connect(mapStateToProps, actionCreators)
class List extends Component {
  render() {
    const { channels } = this.props;
    console.log('THis is channels: ', channels);
    return (
      <div style={{ border: '1px solid #1890ff' }}>
        <ul>
          {channels.map(channel => (<li key={channel.id}><a href="#">{channel.name}</a></li>))}
        </ul>
      </div>
    );
  }
}

export default List;
