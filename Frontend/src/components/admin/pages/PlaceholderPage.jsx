import React from 'react';

const PlaceholderPage = ({ title, icon }) => {
    return (
        <div className="dashboard-content">
            <div className="page-header" style={{ marginBottom: '2rem' }}>
                <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className={`fas ${icon || 'fa-tools'}`} style={{ color: '#4e73df' }}></i>
                    {title}
                </h1>
                <p className="page-subtitle" style={{ color: '#858796', marginLeft: '40px' }}>This page is currently under construction.</p>
            </div>

            <div style={{ padding: '4rem', textAlign: 'center', background: 'white', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)' }}>
                <i className="fas fa-hammer" style={{ fontSize: '3rem', color: '#d1d3e2', marginBottom: '1.5rem' }}></i>
                <h3 style={{ color: '#5a5c69', marginBottom: '1rem' }}>Work in Progress</h3>
                <p style={{ color: '#858796', maxWidth: '500px', margin: '0 auto' }}>
                    The <strong>{title}</strong> functionality is currently being developed. Please check back later for updates.
                </p>
            </div>
        </div>
    );
};

export default PlaceholderPage;
