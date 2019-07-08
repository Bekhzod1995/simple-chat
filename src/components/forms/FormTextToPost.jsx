import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Form from './SendingValueToForm';
import getUsername from './UserNameContainer';


const mapStateToProps = state => ({
  value: state.form.contact,
  status: state.messages.status,
  postMessageLink: state.messages.links.postMessageLink,
});

@connect(mapStateToProps, actionCreators)
class FormPage extends Component {
  submit = (values) => {
    const { userName, postMessage, postMessageLink } = this.props;
    postMessage({ ...values, userName }, postMessageLink);
  };

  render() {
    const { status } = this.props;
    return (
      <Form onSubmit={this.submit} statusValue={status} />
    );
  }
}


export default getUsername(FormPage);
