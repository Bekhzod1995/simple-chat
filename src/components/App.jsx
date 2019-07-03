import React, { Component } from 'react';
import FormPage from './forms/FormTextToPost';
import ChatView from './layouts/ChatView';
import getUsername from './forms/UserNameContainer';

@getUsername()
class App extends Component {
  render() {
    console.log('This is props of App', this.props);
    return (
      <React.Fragment>
        <ChatView />
        {this.props.username.username}
        <FormPage />
      </React.Fragment>
    );
  }
}

export default App;
// class App extends Component {
//   render() {
//     const { context } = this.props;
//     return (
//       <React.Fragment>
//         <ChatView />
//         <context.Consumer>
//           {
//             username => (
//               <div>
//                 <p>{username}</p>
//                 <FormPage user={username} />
//               </div>
//             )
//           }
//         </context.Consumer>
//       </React.Fragment>
//     );
//   }
// }

// export default App;
