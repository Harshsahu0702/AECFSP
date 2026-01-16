import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Header Section */}
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff' }}>Admin Dashboard</h1>
                    <p className="page-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Oversee and manage the Finishing School Program.</p>
                </div>
                <Link to="/admin/users/register" className="btn btn-primary" style={{ background: '#2e59d9', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.35rem', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fas fa-user-plus"></i> Register New User
                </Link>
            </div>


            {/* Stats Cards */}
            <div className="stats-section" style={{ marginTop: '-20px' }}> {/* Adjust margin to pull up into the header area if header is styled differently, otherwise normal margin */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-content">
                            <div className="stat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="stat-label" style={{ textTransform: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Total Students</span>
                                <i className="fas fa-user-graduate" style={{ color: '#4e73df' }}></i>
                            </div>
                            <div className="stat-value" style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>141</div>
                            <div className="stat-description" style={{ fontSize: '0.8rem', color: '#858796' }}>System-wide count</div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-content">
                            <div className="stat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="stat-label" style={{ textTransform: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Active Teachers</span>
                                <i className="fas fa-chalkboard-teacher" style={{ color: '#1cc88a' }}></i>
                            </div>
                            <div className="stat-value" style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>6</div>
                            <div className="stat-description" style={{ fontSize: '0.8rem', color: '#858796' }}>System-wide count</div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-content">
                            <div className="stat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="stat-label" style={{ textTransform: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Total Batches</span>
                                <i className="fas fa-layer-group" style={{ color: '#6f42c1' }}></i>
                            </div>
                            <div className="stat-value" style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>0</div>
                            <div className="stat-description" style={{ fontSize: '0.8rem', color: '#858796' }}>System-wide count</div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-content">
                            <div className="stat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="stat-label" style={{ textTransform: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Tests Recorded</span>
                                <i className="fas fa-clipboard-list" style={{ color: '#f6c23e' }}></i>
                            </div>
                            <div className="stat-value" style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>0</div>
                            <div className="stat-description" style={{ fontSize: '0.8rem', color: '#858796' }}>System-wide count</div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-content">
                            <div className="stat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="stat-label" style={{ textTransform: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Active Admins</span>
                                <i className="fas fa-user-shield" style={{ color: '#e74a3b' }}></i>
                            </div>
                            <div className="stat-value" style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>5</div>
                            <div className="stat-description" style={{ fontSize: '0.8rem', color: '#858796' }}>System-wide count</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Administrative Actions */}
            <div className="actions-section" style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1)', marginTop: '2rem' }}>
                <div className="section-header" style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.25rem', color: '#4a4b65', margin: 0 }}>Administrative Actions</h2>
                    <p style={{ color: '#858796', fontSize: '0.9rem', margin: '0.5rem 0 0' }}>Key management functions for the system.</p>
                </div>

                <div className="actions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {/* Action Card 1 */}
                    <div className="action-card" style={{ display: 'flex', alignItems: 'center', padding: '1.5rem', background: '#f8f9fc', borderRadius: '0.5rem', gap: '1rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                        <div className="action-icon" style={{ background: '#e3e6f0', padding: '0.75rem', borderRadius: '0.35rem', color: '#4e73df' }}>
                            <i className="fas fa-chalkboard-teacher"></i>
                        </div>
                        <div className="action-details">
                            <h3 style={{ fontSize: '1rem', margin: '0 0 0.25rem', color: '#4a4b65' }}>Manage Teachers</h3>
                            <p style={{ fontSize: '0.85rem', color: '#858796', margin: 0 }}>Add, view, or edit teacher accounts.</p>
                        </div>
                    </div>

                    {/* Action Card 2 */}
                    <div className="action-card" style={{ display: 'flex', alignItems: 'center', padding: '1.5rem', background: '#f8f9fc', borderRadius: '0.5rem', gap: '1rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                        <div className="action-icon" style={{ background: '#e3e6f0', padding: '0.75rem', borderRadius: '0.35rem', color: '#4e73df' }}>
                            <i className="fas fa-user-shield"></i>
                        </div>
                        <div className="action-details">
                            <h3 style={{ fontSize: '1rem', margin: '0 0 0.25rem', color: '#4a4b65' }}>Manage Admins</h3>
                            <p style={{ fontSize: '0.85rem', color: '#858796', margin: 0 }}>Manage other administrator accounts.</p>
                        </div>
                    </div>

                    {/* Action Card 3 */}
                    <div className="action-card" style={{ display: 'flex', alignItems: 'center', padding: '1.5rem', background: '#f8f9fc', borderRadius: '0.5rem', gap: '1rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                        <div className="action-icon" style={{ background: '#e3e6f0', padding: '0.75rem', borderRadius: '0.35rem', color: '#4e73df' }}>
                            <i className="fas fa-user-graduate"></i>
                        </div>
                        <div className="action-details">
                            <h3 style={{ fontSize: '1rem', margin: '0 0 0.25rem', color: '#4a4b65' }}>View & Download Students</h3>
                            <p style={{ fontSize: '0.85rem', color: '#858796', margin: 0 }}>Browse student records and download personal data.</p>
                        </div>
                    </div>

                    {/* Action Card 4 */}
                    <div className="action-card" style={{ display: 'flex', alignItems: 'center', padding: '1.5rem', background: '#f8f9fc', borderRadius: '0.5rem', gap: '1rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                        <div className="action-icon" style={{ background: '#e3e6f0', padding: '0.75rem', borderRadius: '0.35rem', color: '#4e73df' }}>
                            <i className="fas fa-layer-group"></i>
                        </div>
                        <div className="action-details">
                            <h3 style={{ fontSize: '1rem', margin: '0 0 0.25rem', color: '#4a4b65' }}>View Batches & Timetables</h3>
                            <p style={{ fontSize: '0.85rem', color: '#858796', margin: 0 }}>Oversee all program batches and their schedules.</p>
                        </div>
                    </div>
                    {/* Action Card 5 */}
                    <div className="action-card" style={{ display: 'flex', alignItems: 'center', padding: '1.5rem', background: '#f8f9fc', borderRadius: '0.5rem', gap: '1rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                        <div className="action-icon" style={{ background: '#e3e6f0', padding: '0.75rem', borderRadius: '0.35rem', color: '#4e73df' }}>
                            <i className="fas fa-clipboard-check"></i>
                        </div>
                        <div className="action-details">
                            <h3 style={{ fontSize: '1rem', margin: '0 0 0.25rem', color: '#4a4b65' }}>Manage Attendance</h3>
                            <p style={{ fontSize: '0.85rem', color: '#858796', margin: 0 }}>Mark and manage student attendance.</p>
                        </div>
                    </div>
                    {/* Action Card 6 */}
                    <div className="action-card" style={{ display: 'flex', alignItems: 'center', padding: '1.5rem', background: '#f8f9fc', borderRadius: '0.5rem', gap: '1rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                        <div className="action-icon" style={{ background: '#e3e6f0', padding: '0.75rem', borderRadius: '0.35rem', color: '#4e73df' }}>
                            <i className="fas fa-book"></i>
                        </div>
                        <div className="action-details">
                            <h3 style={{ fontSize: '1rem', margin: '0 0 0.25rem', color: '#4a4b65' }}>Manage Academics</h3>
                            <p style={{ fontSize: '0.85rem', color: '#858796', margin: 0 }}>Track and manage student test scores.</p>
                        </div>
                    </div>

                    {/* Action Card 7 */}
                    <div className="action-card" style={{ display: 'flex', alignItems: 'center', padding: '1.5rem', background: '#f8f9fc', borderRadius: '0.5rem', gap: '1rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                        <div className="action-icon" style={{ background: '#e3e6f0', padding: '0.75rem', borderRadius: '0.35rem', color: '#4e73df' }}>
                            <i className="fas fa-cog"></i>
                        </div>
                        <div className="action-details">
                            <h3 style={{ fontSize: '1rem', margin: '0 0 0.25rem', color: '#4a4b65' }}>System Settings</h3>
                            <p style={{ fontSize: '0.85rem', color: '#858796', margin: 0 }}>Configure overall system settings.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;
