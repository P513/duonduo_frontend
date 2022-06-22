import React, { Component } from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditUserComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      password: '',
      message: null
    }
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    ApiService.fetchUserByID(window.localStorage.getItem("userID"))
      .then(res => {
        let user = res.data;
        this.setState({
          id: user.id,
          password: ""
        })
      })
      .catch(err => {
        console.log('loadUser() 에러', err);
      });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  saveUser = (e) => {
    e.preventDefault();

    let user = {
      id: this.state.id,
      nicknameId: this.state.nicknameId,
      password: ""
    }

    ApiService.editUser(user)
      .then(res => {
        this.setState({
          message: user.email + '님 정보가 수정되었습니다.'
        })
        window.location.href = '/users';
      })
      .catch(err => {
        console.log('saveUser() 에러', err);
      })
  }

  render() {
    return (
      <div>
        <Typography variant="h4" style={style}>회원정보 수정</Typography>
        <form>
          <TextField placeholder="Edit your password" name="password" autoComplete="current-password"
            fullWidth margin="normal" value={this.state.password} onChange={this.onChange} />

          <Button variant="contained" color="primary" onClick={this.saveUser}>수정하기</Button>

        </form>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default EditUserComponent;
