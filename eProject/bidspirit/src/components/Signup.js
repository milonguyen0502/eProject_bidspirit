// components/Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/signup.css';

function Signup({ handleSignup }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = document.getElementById("newUsername").value;
        const password = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        
        // Basic validation: check if password matches confirmPassword
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        handleSignup(username, password);
    };

    return (
        <div>
            <h1 style={{ textAlign: "center", color: "white" }}>Sign up for an account</h1>
            <form onSubmit={handleSubmit}>
                <table className="signup">
                    <tbody>
                        <tr>
                            <td colSpan={2}><input id="newUsername" placeholder='Email address' /></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><input id="newPassword" type="password" placeholder='Password' /></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><input id="confirmPassword" type="password" placeholder='Confirm Password' /></td>
                        </tr>
                        <tr>
                            <td><Link to="/login">Back to login</Link></td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="btn-signup">
                                <input type="submit" value="Sign up" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Signup;
