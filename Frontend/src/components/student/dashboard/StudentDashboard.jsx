import React from 'react';

const StudentDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="page-header">
                <p className="page-subtitle">Track batches, attendance and academics.</p>
            </div>

            {/* Stats Section */}
            <div className="stats-section">
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #28A745 0%, #1E7E34 100%)' }}>
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Attendance (This Month)</h3>
                            <div className="stat-value">92%</div>
                            <div className="stat-description">Keep it up!</div>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)' }}>
                            <i className="fas fa-layer-group"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Sessions Attended</h3>
                            <div className="stat-value">12</div>
                            <div className="stat-description">Total sessions</div>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)' }}>
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Late Arrivals</h3>
                            <div className="stat-value">1</div>
                            <div className="stat-description">Be on time</div>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #DC3545 0%, #C82333 100%)' }}>
                            <i className="fas fa-times-circle"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Absences</h3>
                            <div className="stat-value">0</div>
                            <div className="stat-description">Good record</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="actions-section">
                <div className="section-header">
                    <h2>My Assigned Batches</h2>
                    <p>Details about your current Finishing School Program batches.</p>
                </div>

                <div className="action-card" style={{ textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div className="action-icon" style={{ margin: '0', width: '50px', height: '50px', fontSize: '1.2rem' }}>
                        <i className="fas fa-info"></i>
                    </div>
                    <div>
                        <h3 style={{ marginBottom: '5px' }}>No Batch Assigned</h3>
                        <p style={{ margin: '0' }}>You are not currently assigned to any batch. Please contact administration if this is an error.</p>
                    </div>
                </div>
            </div>

            <div className="actions-section">
                <div className="section-header">
                    <h2>My Attendance Records</h2>
                    <p>Your attendance for recent FSP sessions in your current batch.</p>
                </div>

                <div className="action-card" style={{ textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div className="action-icon" style={{ margin: '0', width: '50px', height: '50px', fontSize: '1.2rem' }}>
                        <i className="fas fa-info"></i>
                    </div>
                    <div>
                        <h3 style={{ marginBottom: '5px' }}>No Batch Assigned</h3>
                        <p style={{ margin: '0' }}>Attendance records cannot be shown as you are not assigned to a batch.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
