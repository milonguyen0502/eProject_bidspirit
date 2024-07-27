import React from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';

function Login({ checkLogin }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        checkLogin(username, password);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'white' }}>Log in to your account</h1>
            <form onSubmit={handleSubmit}>
                <table className="login">
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <input id="username" placeholder="Email address" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input id="password" type="password" placeholder="Password" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/editpassword">Forgot your password?</Link>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="btn-login">
                                <input type="submit" value="Log in" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <span style={{ fontSize: '14px' }}>Don't have an account? </span>
                                <Link to="/signup">Sign up</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Login;