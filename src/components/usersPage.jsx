"use strict";

var React = require('react');
var UserList = require('./userList.jsx');
var User = require('./user.jsx');
import userServices from '../services/userServices.js'
import NavLoggedIn from './nav-loggedIn.jsx';

class UsersPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    var self = this;
    userServices.getUsers()
    .then((users) => {
      self.setState({users: users.users})
      console.log(this.state)
    })
  }

  render () {
    return (
      <div>
        <NavLoggedIn />
        <UserList users={this.state.users} />
      </div>
    )
  }

}

module.exports = UsersPage;
