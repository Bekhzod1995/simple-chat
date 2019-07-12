import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Form from './InputText';
import getUsername from '../UserNameContainer';


const mapStateToProps = state => ({
  messageStatus: state.messages.status,
  postMessageLink: state.messages.links.postMessageLink,
});

@connect(mapStateToProps, actionCreators)
class FormPage extends Component {
  submit = (values) => {
    const { userName, postMessage, postMessageLink } = this.props;
    postMessage({ ...values, userName }, postMessageLink);
  };

  render() {
    const { messageStatus } = this.props;
    return (
      <Form onSubmit={this.submit} messageStatus={messageStatus} />
    );
  }
}


export default getUsername(FormPage);
