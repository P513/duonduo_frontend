import React, { Component } from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class LoginUserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            email: '',
            message: null
        }

    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginUser = (e) => {
        e.preventDefault();

        let user = {
            password: this.state.password,
            email: this.state.email
        }

        ApiService.loginUser(user)
            .then(res => {
                this.setState({
                    message: user.email + '님이 성공적으로 로그인하였습니다.'
                })
                console.log(this.state.message);
                window.location.href = '/login-user';
            })
            .catch(err => {
                console.log('saveUser() 에러', err);
            });

    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>로그인</Typography>
                <form style={formContainer}>

                    <TextField type="email" placeholder="please input your email" name="email"
                        fullWidth margin="normal" value={this.state.email} onChange={this.onChange} />

                    <TextField type="password" placeholder="please input your password" name="password" autoComplete="current-password"
                        fullWidth margin="normal" value={this.state.password} onChange={this.onChange} />

                    <Button variant="contained" color="primary" onClick={this.loginUser}>로그인</Button>

                </form>
            </div>
        );
    }
}

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default LoginUserComponent;