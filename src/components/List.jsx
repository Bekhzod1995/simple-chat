import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';


const mapStateToProps = state => ({
  channels: state.channels.channels,
});


@connect(mapStateToProps, actionCreators)
class List extends Component {
  render() {
    const { channels } = this.props;
    return (
      <div>
        <ul>
          {channels.map(channel => (<li key={channel.id}>{channel.name}</li>))}
        </ul>
      </div>
    );
  }
}

export default List;
