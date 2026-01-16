import React from 'react';

const WebsiteStatus = () => {
    return (
        <div className="status-container">
            <div className="page-header">
                <p className="page-subtitle">View overall website health, uptime, and performance metrics.</p>
            </div>

            <div className="status-card">
                <div className="status-header">
                    <div className="status-overview">
                        <i className="fas fa-check-circle status-icon operational"></i>
                        <div className="status-info">
                            <h2>Overall Status: Operational</h2>
                            <p>Last checked: {new Date().toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                <div className="metrics-grid">
                    <div className="metric-card">
                        <div className="metric-icon">
                            <i className="fas fa-server"></i>
                        </div>
                        <div className="metric-content">
                            <h3>Average Response Time</h3>
                            <div className="metric-value">120ms</div>
                        </div>
                    </div>

                    <div className="metric-card">
                        <div className="metric-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="metric-content">
                            <h3>Active Users (Simulated)</h3>
                            <div className="metric-value">40</div>
                        </div>
                    </div>
                </div>

                <div className="events-section">
                    <h3>Recent Events/Logs</h3>
                    <p>No critical events logged in the last 24 hours. System is stable.</p>
                </div>
            </div>
        </div>
    );
};

export default WebsiteStatus;
