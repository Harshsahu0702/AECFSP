import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="page-header-title">
                <i className="fas fa-tachometer-alt"></i>
                <h1>Management Dashboard</h1>
            </div>
            <div className="header-icons">
                <i className="fas fa-bell notification-icon"></i>
                <i className="fas fa-question-circle help-icon"></i>
                <div className="user-avatar">H</div>
            </div>
        </div>
    );
};

export default TopHeader;
