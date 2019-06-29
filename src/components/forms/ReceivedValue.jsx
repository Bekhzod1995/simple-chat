import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Form from './SendingValue';


const mapStateToProps = state => ({
  value: state.form.contact,
  status: state.messages.status,
});

@connect(mapStateToProps, actionCreators)
class FormPage extends Component {
  submit = (values) => {
    // console.log('Status: ', this.props.status);
    const { user } = this.props;
    const { postMessage } = this.props;
    postMessage({ ...values, user });
  };


  render() {
    const { status } = this.props;
    return (
      <Form onSubmit={this.submit} statusValue={{ status }} />
    );
  }
}


export default FormPage;
