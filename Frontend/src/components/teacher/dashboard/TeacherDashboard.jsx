import React from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="page-header">
                <p className="page-subtitle">Manage your FSP activities and student progress.</p>
            </div>

            {/* Summary Cards */}
            <div className="stats-section">
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)' }}>
                            <i className="fas fa-layer-group"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Active Batches</h3>
                            <div className="stat-value">5</div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #28A745 0%, #1E7E34 100%)' }}>
                            <i className="fas fa-user-graduate"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Students Enrolled</h3>
                            <div className="stat-value">124</div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #FD7E14 0%, #E67E22 100%)' }}>
                            <i className="fas fa-calendar-day"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Today's Classes</h3>
                            <div className="stat-value">3</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="actions-section">
                <div className="section-header">
                    <h2>Quick Actions</h2>
                </div>
                <div className="actions-grid">
                    <Link to="/teacher/assigned-batches" className="action-card" style={{ textDecoration: 'none' }}>
                        <div className="action-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3>View Assigned Batches</h3>
                        <p>Check details of batches you are teaching.</p>
                    </Link>
                    <Link to="/teacher/timetable" className="action-card" style={{ textDecoration: 'none' }}>
                        <div className="action-icon">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <h3>View Timetables</h3>
                        <p>See your class schedule for the week.</p>
                    </Link>
                    <Link to="/teacher/reports" className="action-card" style={{ textDecoration: 'none' }}>
                        <div className="action-icon">
                            <i className="fas fa-chart-bar"></i>
                        </div>
                        <h3>View Performance Reports</h3>
                        <p>Analyze student performance and attendance.</p>
                    </Link>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="actions-section">
                <div className="section-header">
                    <h2>Recent Activity</h2>
                </div>
                <div className="action-card" style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <div style={{ color: '#999', fontSize: '3rem', marginBottom: '10px' }}>
                        <i className="fas fa-inbox"></i>
                    </div>
                    <h3 style={{ marginBottom: '5px' }}>No recent activity to display</h3>
                    <p>Your recent activities will appear here</p>
                </div>
            </div>

        </div>
    );
};

export default TeacherDashboard;
