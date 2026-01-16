import React from 'react';

const PlaceholderPage = ({ title }) => {
    return (
        <div className="approval-container" style={{ maxWidth: '100%' }}>
            <div className="page-header">
                <div className="page-header-title" style={{ display: 'block' }}>
                    <h1>{title}</h1>
                    <p className="page-subtitle" style={{ marginLeft: 0 }}>This page is under construction.</p>
                </div>
            </div>
            <div className="approval-card">
                <div className="empty-state" style={{ padding: '60px 0' }}>
                    <i className="fas fa-tools" style={{ fontSize: '3rem', color: '#ccc', marginBottom: '15px' }}></i>
                    <h3>Work in Progress</h3>
                    <p>The {title} functionality will be available soon.</p>
                </div>
            </div>
        </div>
    );
};

export default PlaceholderPage;
