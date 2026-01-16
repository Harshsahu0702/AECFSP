import React from 'react';

const Reports = () => {
    return (
        <div className="dashboard-content">
            <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-chart-bar" style={{ color: '#4e73df' }}></i>
                        Admin View Reports
                    </h1>
                    <p className="page-subtitle" style={{ color: '#858796', marginLeft: '45px' }}>Analyze system-wide attendance and performance data.</p>
                </div>
                <button style={{ background: '#6c757d', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.35rem', fontSize: '0.9rem', cursor: 'not-allowed', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }}>
                    <i className="fas fa-download"></i> Download Detailed Report (WIP)
                </button>
            </div>

            <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', margin: '0 0 1.5rem' }}>Report Configuration</h3>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <select style={{ flex: 1, padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe', minWidth: '200px', color: '#4a4b65' }}>
                        <option>Batch-wise Attendance</option>
                        <option>Performance Reports</option>
                    </select>
                    <select style={{ flex: 1, padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe', minWidth: '200px', color: '#4a4b65' }}>
                        <option>All Batches</option>
                    </select>
                    <select style={{ flex: 1, padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe', minWidth: '200px', color: '#4a4b65' }}>
                        <option>All Departments</option>
                    </select>
                </div>
            </div>

            <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)', minHeight: '300px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', margin: '0 0 2rem' }}>Batch-wise Attendance Overview</h3>

                <div style={{ textAlign: 'center', color: '#858796', marginTop: '4rem' }}>
                    No attendance data available for the selected filters.
                </div>
            </div>
        </div>
    );
};

export default Reports;
