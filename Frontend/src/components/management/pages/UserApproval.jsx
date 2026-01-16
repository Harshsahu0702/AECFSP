import React from 'react';

const UserApproval = () => {
    return (
        <div className="approval-container">
            <div className="page-header">
                <p className="page-subtitle">Review and approve or reject new Admin and Teacher registrations.</p>
            </div>

            <div className="approval-card">
                <div className="card-header">
                    <h2>Pending Approvals</h2>
                    <p>Users awaiting your approval to activate their accounts.</p>
                </div>

                <div className="approval-content">
                    <div className="empty-state">
                        <i className="fas fa-user-check"></i>
                        <h3>No users currently pending approval.</h3>
                        <p>All user registrations have been processed. Check back later for new requests.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserApproval;
