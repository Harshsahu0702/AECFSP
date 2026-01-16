import React from 'react';

const Attendance = () => {
    return (
        <div className="attendance-container">
            <div className="page-header">
                <div className="page-header-title" style={{ display: 'block' }}>
                    <h1>Attendance Calendar</h1>
                    <p className="page-subtitle" style={{ marginLeft: 0 }}>See your monthly attendance at a glance.</p>
                </div>
            </div>

            <div className="approval-card">
                <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Calendar Overview</h2>
                    <div style={{ display: 'flex', gap: '15px', fontSize: '13px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28a745' }}></span> Present</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffc107' }}></span> Late</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#dc3545' }}></span> Absent</div>
                    </div>
                </div>

                {/* Calendar Placeholder */}
                <div style={{
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f8fafc',
                    borderRadius: '8px',
                    border: '1px dashed #cbd5e1',
                    color: '#64748b'
                }}>
                    <i className="fas fa-calendar" style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#94a3b8' }}></i>
                    <p style={{ fontWeight: 500 }}>Calendar Component Integration Needed</p>
                    <p style={{ fontSize: '0.9rem' }}>This area will display the interactive attendance calendar.</p>
                </div>
            </div>

            <div className="approval-card" style={{ marginTop: '20px' }}>
                <div className="card-header">
                    <h2>Detailed Log for Current Month</h2>
                </div>
                <div className="empty-state" style={{ padding: '30px 20px' }}>
                    <i className="fas fa-clipboard-list" style={{ marginBottom: '15px', display: 'block' }}></i>
                    <h3>No Records</h3>
                    <p>No attendance records found for you in this month.</p>
                </div>
            </div>
        </div>
    );
};

export default Attendance;
