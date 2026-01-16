import React, { useState } from 'react';

const RegisterUser = () => {
    return (
        <div className="dashboard-content">
            <div className="register-container" style={{ maxWidth: '800px', margin: '2rem auto' }}>
                <div className="page-header" style={{ marginBottom: '2rem' }}>
                    <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-user-plus" style={{ color: '#4e73df' }}></i>
                        Register New User
                    </h1>
                    <p className="page-subtitle" style={{ color: '#858796' }}>Create accounts for new Teachers or Administrators.</p>
                </div>

                <div className="register-card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', marginBottom: '2rem', borderBottom: '1px solid #e3e6f0', paddingBottom: '1rem' }}>New User Details</h3>
                    <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#858796' }}>Fill in the form below to create a new user account.</p>

                    <form>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.9rem' }}>Full Name</label>
                            <input type="text" placeholder="Enter user's full name" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', fontSize: '0.9rem', background: '#eaecf4' }} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.9rem' }}>Email Address</label>
                            <input type="email" placeholder="Enter user's email" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', fontSize: '0.9rem', background: '#eaecf4' }} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.9rem' }}>Role</label>
                            <select style={{ width: '100%', padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', fontSize: '0.9rem', background: '#eaecf4' }}>
                                <option value="">Select user role</option>
                                <option value="teacher">Teacher</option>
                                <option value="admin">Administrator</option>
                            </select>
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.9rem' }}>Password</label>
                            <input type="password" placeholder="Create a password for the user" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', fontSize: '0.9rem', background: '#eaecf4' }} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.9rem' }}>Confirm Password</label>
                            <input type="password" placeholder="Confirm the password" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', fontSize: '0.9rem', background: '#eaecf4' }} />
                        </div>

                        <button type="submit" style={{ width: '100%', background: '#2e59d9', color: 'white', padding: '0.75rem', border: 'none', borderRadius: '0.35rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}>
                            Submit for Approval
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterUser;
