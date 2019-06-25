import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
// import cookies from 'js-cookie';

// import gon from 'gon';
import * as actionCreators from '../../actions';

const mapStateToProps = state => ({
  archive: state.messages,
});

@connect(mapStateToProps, actionCreators)
class ChatView extends Component {
  render() {
    const { archive } = this.props;
    return (
      <Card style={{ width: '40rem', height: '35rem' }}>
        <Card.Body>
          {/* { console.log('This is archive: ', this.props.data) } */}
          { console.log('This is state: ', archive) }
          <div>
            { archive.map((el) => {
              if (el.username === undefined) {
                return '';
              }
              return (
                <p key={el.id}>
                  {`${el.username} : ${el.message}`}
                </p>);
            })}
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default ChatView;
