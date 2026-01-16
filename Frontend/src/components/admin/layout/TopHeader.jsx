import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="page-header-title">
                {/* Dynamically update the icon and title based on the route if needed, static for now */}
                <i className="fas fa-shield-alt"></i>
                <h1>Admin Dashboard</h1>
            </div>
            <div className="header-icons">
                <i className="fas fa-bell notification-icon"></i>
                <div className="user-avatar" style={{ background: '#e3e6f0', color: '#6e707e' }}>R</div>
            </div>
        </div>
    );
};

export default TopHeader;
