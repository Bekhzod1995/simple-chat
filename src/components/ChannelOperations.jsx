import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/channels';

// const mapStateToProps = state => ({
//   temp: state,
// });

@connect(null, actionCreators)
class ChannelOperations extends Component {
   create = () => {

   };

   render() {
     return (
       <div style={{ border: '1px solid #1890ff' }}>
         <button type="button" onClick={this.create}>Create</button>
         <button type="button">Rename</button>
         <button type="button">Delete</button>
       </div>
     );
   }
}

export default ChannelOperations;
