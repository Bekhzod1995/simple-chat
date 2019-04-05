import React, { Component } from 'react';
import * as actionCreators from '../actions/'
import { connect } from 'react-redux';

class List extends Component{
    
    render(){
        // console.log("we are in list now: ", this.props.ch);
        this.props.loadChannels();
        return (
            <ul>
               <li>{this.props.ch1}</li>
               <li>{this.props.ch2}</li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    ch1: state.ch1,
    ch2: state.ch2
});

export default connect(mapStateToProps, actionCreators)(List);