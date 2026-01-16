import React from 'react';

const Reports = () => {
    return (
        <div className="dashboard-content">
            {/* Report Configuration Section */}
            <div className="reports-container" style={{ background: 'white', borderRadius: '4px', boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1)', margin: '1.25rem 0' }}>
                <div className="reports-header" style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #e3e6f0', backgroundColor: '#f8f9fc' }}>
                    <h2 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#4a4b65' }}>Report Configuration</h2>
                </div>

                <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        {/* Batch-wise Attendance Report */}
                        <div style={{ backgroundColor: '#f8f9fc', borderRadius: '0.35rem', padding: '1.5rem' }}>
                            <h3 style={{ marginTop: 0, marginBottom: '1rem', color: '#4a4b65', fontSize: '0.95rem', fontWeight: 600 }}>
                                <i className="fas fa-users" style={{ marginRight: '0.5rem', color: '#4e73df' }}></i>
                                Batch-wise Attendance Report
                            </h3>
                            <div>
                                <select className="form-control" style={{ width: '100%', padding: '0.375rem 0.75rem', border: '1px solid #d1d3e2', borderRadius: '0.35rem', fontSize: '0.9rem' }}>
                                    <option value="">-- Select Batch --</option>
                                    <option value="batch1">Batch A (2023-24)</option>
                                    <option value="batch2">Batch B (2023-24)</option>
                                    <option value="batch3">Batch C (2023-24)</option>
                                </select>
                            </div>
                        </div>

                        {/* All Batches Report */}
                        <div style={{ backgroundColor: '#f8f9fc', borderRadius: '0.35rem', padding: '1.5rem' }}>
                            <h3 style={{ marginTop: 0, marginBottom: '1rem', color: '#4a4b65', fontSize: '0.95rem', fontWeight: 600 }}>
                                <i className="fas fa-layer-group" style={{ marginRight: '0.5rem', color: '#1cc88a' }}></i>
                                All Batches Report
                            </h3>
                            <div>
                                <select className="form-control" style={{ width: '100%', padding: '0.375rem 0.75rem', border: '1px solid #d1d3e2', borderRadius: '0.35rem', fontSize: '0.9rem' }}>
                                    <option value="">-- All My Batches  --</option>
                                    <option value="summary">Summary Report</option>
                                    <option value="detailed">Detailed Report</option>
                                    <option value="monthly">Monthly Summary</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Batch-wise Attendance Overview Section */}
            <div className="reports-container" style={{ background: 'white', borderRadius: '4px', boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1)', margin: '1.25rem 0' }}>
                <div className="reports-header" style={{ padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e3e6f0', backgroundColor: '#f8f9fc' }}>
                    <h2 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#4a4b65' }}>
                        Batch-wise Attendance Overview
                    </h2>
                    <div>
                        <button className="btn btn-outline-primary btn-sm" style={{ marginRight: '0.5rem', background: 'white', color: '#4e73df', border: '1px solid #4e73df', padding: '0.25rem 0.5rem', borderRadius: '0.2rem', cursor: 'pointer' }}>
                            <i className="fas fa-download"></i> Export
                        </button>
                        <button className="btn btn-outline-primary btn-sm" style={{ background: 'white', color: '#4e73df', border: '1px solid #4e73df', padding: '0.25rem 0.5rem', borderRadius: '0.2rem', cursor: 'pointer' }}>
                            <i className="fas fa-print"></i> Print
                        </button>
                    </div>
                </div>

                <div style={{
                    padding: '2rem', textAlign: 'center',
                    backgroundColor: '#f8f9fc',
                    borderRadius: '0 0 0.35rem 0.35rem',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <i className="fas fa-clipboard-list" style={{ fontSize: '3rem', color: '#dddfeb', marginBottom: '1rem' }}></i>
                    <h3 style={{ color: '#5a5c69', marginBottom: '0.5rem' }}>No Attendance Data Available</h3>
                    <p style={{ color: '#858796', margin: 0, maxWidth: '500px' }}>
                        No attendance data available for the selected batches. Please generate a report using the configuration options above.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Reports;
