import React from 'react';

const AddHost = () => {
    return (
        <div className="add-host-container">
            <div className="page-header">
                <p className="page-subtitle">Create accounts for new management (host) users.</p>
            </div>

            <div className="form-card">
                <div className="card-header">
                    <h2>New Host User Details</h2>
                    <p>Fill in the form below to create a new management user account.</p>
                </div>

                <form className="add-host-form" id="addHostForm" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Enter user's full name" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Enter user's email" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Create a temporary password" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm the password" required />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="create-host-btn">
                            <i className="fas fa-user-plus"></i> Create Host User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddHost;
