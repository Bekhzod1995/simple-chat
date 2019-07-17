import React, { Component } from 'react';
import {
  Field,
  reduxForm,
} from 'redux-form';

// const Form = (props) => {
//   const {
//     handleSubmit,
//   } = props;

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <Field name="title" type="text" component="input" />
//     </form>
//   );
// };

// reduxForm({
//   form: 'channelTitle',
// })(Form);

class FormCreateChannel extends Component {
    submit = (channelName) => {
      console.log('This is channelName: ', channelName);
    }

    render() {
      return (
        <form onSubmit={this.submit} autoComplete="off">
          <Field name="title" type="text" component="input" />
        </form>
      );
    }
}

export default FormCreateChannel;
// import React from 'react';

// const text = () => <p>Hello world</p>;

// export default text;
