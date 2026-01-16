import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="page-header-title">
                <i className="fas fa-user-graduate"></i>
                <h1>Student Portal</h1>
            </div>
            <div className="header-icons">
                <i className="fas fa-bell notification-icon"></i>
                <i className="fas fa-question-circle help-icon"></i>
                <div className="user-avatar">MA</div>
            </div>
        </div>
    );
};

export default TopHeader;
