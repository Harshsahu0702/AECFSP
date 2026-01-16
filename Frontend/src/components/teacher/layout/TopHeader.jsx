import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="page-header-title">
                <i className="fas fa-chalkboard-teacher"></i>
                <h1>Teacher Dashboard</h1>
            </div>
            <div className="header-icons">
                <i className="fas fa-bell notification-icon"></i>
                <div className="user-avatar">T</div>
            </div>
        </div>
    );
};

export default TopHeader;
