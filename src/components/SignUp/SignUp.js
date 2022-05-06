import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, SetError] = useState('');

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    }
    const handlecreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            SetError("Password Didn't Match");
            return;
        }
    }
    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handlecreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already Have an Account?
                    <Link className='form-link' to="/login">Login</Link>
                </p>
                <div className='horizontai-container'>
                    <div className='horizontal-line'></div>
                    <p className='horizontal-text'>or</p>
                    <div className='horizontal-line'></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;