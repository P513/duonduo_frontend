import React, { Component } from 'react';
import ApiService from "../../ApiService";

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'

class UserListComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      message: null
    }
  }

  componentDidMount() {
    this.reloadUserList();
  }

  reloadUserList = () => {
    ApiService.fetchUsers()
      .then(res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        console.log('reloadUserList() Error!', err);
      })
  }

  deleteUser = (userID) => {
    ApiService.deleteUser(userID)
      .then(res => {
        this.setState({
          message: 'User Deleted Successfully.'
        });
        this.setState({
          users: this.state.users.filter(user =>
            user.id !== userID)
        });
      })
      .catch(err => {
        console.log('deleteUser() Error!', err);
      })
  }

  editUser = (ID) => {
    window.localStorage.setItem("userID", ID);
    window.location.href = '/edit-user';
  }

  addUser = () => {
    window.localStorage.removeItem("userID");
    window.location.href = '/add-user';
  }

  render() {

    return (
      <div>
        <Typography variant="h4" style={style}>사용자 목록</Typography>
        <Button variant="contained" color="primary" onClick={this.addUser}> Add User </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>nicknameId</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">createdAt</TableCell>
              <TableCell align="right">evalCnt</TableCell>
              <TableCell align="right">evalSum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.users.data && this.state.users.data.map((user) =>
              <TableRow key={user.id}>
                <TableCell component="th" scope="user">{user.id}</TableCell>
                <TableCell align="right">{user.nicknameId}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.createdAt}</TableCell>
                <TableCell align="right">{user.evalCnt}</TableCell>
                <TableCell align="right">{user.evalSum}</TableCell>
                <TableCell align="right" onClick={() => this.editUser(user.id)}>
                  <CreateIcon />
                </TableCell>
                <TableCell align="right" onClick={() => this.deleteUser(user.id)}>
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div >
    );

  }

}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default UserListComponent;