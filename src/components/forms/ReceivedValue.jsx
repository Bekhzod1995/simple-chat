import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Form from './SendingValue';


const mapStateToProps = state => ({

});

@connect(mapStateToProps, actionCreators)
class FormPage extends React.Component {
  submit = (values) => {
    // print the form values to the console
    const { postMessage } = this.props;
    postMessage(values);
  };


  render() {
    return (
      <Form onSubmit={this.submit} />
    );
  }
}


export default FormPage;
