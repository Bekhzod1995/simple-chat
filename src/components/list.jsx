import React, { Component } from 'react';
import * as actionCreators from '../actions/'
import { connect } from 'react-redux';

class List extends Component{
    
    render(){
        return (
            <ul>
               {this.props.ch.channels.map((element, key) => {
                   return <li key={key}>{element.name}</li>;
               })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    ch: state.ch
});

export default connect(mapStateToProps, actionCreators)(List);