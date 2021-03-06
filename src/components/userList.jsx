"use strict";


var React = require('react');
//var UsersPage = require('./usersPage.jsx');
var UserDisplay = require('./user.jsx')

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.users.length) {
      return (
        <div className = "container userList">
          <div className = "row">
            {this.props.users.map(person =>
                <UserDisplay user={person}/>
              )}
          </div>
      </div>
      )
    } else {
      return (
        <div>Loading</div>
      )
    }
  }
}

module.exports = UserList;
