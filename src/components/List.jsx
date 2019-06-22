import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';


const mapStateToProps = state => ({
  channel: state.channels.channels,
});


@connect(mapStateToProps, actionCreators)
class List extends Component {
  render() {
    const { channel } = this.props;
    return (
      <div>
        <ul>
          {channel.map(element => (<li key={element.id}>{element.name}</li>))}
        </ul>
      </div>
    );
  }
}

export default List;
