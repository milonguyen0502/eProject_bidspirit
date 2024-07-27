import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/editpass.css';

function EditPass({ handleEditPass }) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        handleEditPass(username, newPassword);
        alert("Password updated successfully!");
        navigate('/login');
    };

    return (
        <div>
            <h1>Reset your password</h1>
            <form onSubmit={handleSubmit}>
                <table className="editpass">
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <input id="username" placeholder="Email address" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input id="newPassword" type="password" placeholder="New Password" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input id="confirmPassword" type="password" placeholder="Confirm New Password" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="btn-editpass">
                                <input type="submit" value="Reset Password" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default EditPass;
