import React from 'react';

const ViewAttendance = () => {
    return (
        <div className="dashboard-content">
            <div className="page-header" style={{ marginBottom: '2rem' }}>
                <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-list-check" style={{ color: '#4e73df' }}></i>
                    View Attendance Records
                </h1>
                <p className="page-subtitle" style={{ color: '#858796', marginLeft: '45px' }}>Monitor attendance across all batches and date ranges.</p>
            </div>

            <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', margin: '0 0 0.5rem' }}>Filters</h3>
                <p style={{ fontSize: '0.9rem', color: '#858796', margin: '0 0 1.5rem' }}>Refine the attendance records by batch and date range.</p>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#4a4b65', marginBottom: '0.5rem' }}>Batch</label>
                        <select style={{ width: '100%', padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe', color: '#5a5c69' }}>
                            <option>All My Batches</option>
                            <option>Batch A</option>
                            <option>Batch B</option>
                        </select>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#4a4b65', marginBottom: '0.5rem' }}>Date Range</label>
                        <div style={{ display: 'flex', alignItems: 'center', background: '#e8f0fe', border: '1px solid #d1d3e2', borderRadius: '0.35rem', padding: '0.75rem', color: '#5a5c69' }}>
                            <i className="far fa-calendar-alt" style={{ marginRight: '0.5rem' }}></i>
                            <span>Sep 10, 2025 - Oct 09, 2025</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', margin: '0 0 0.5rem' }}>Attendance Summary</h3>
                <p style={{ fontSize: '0.9rem', color: '#858796', margin: '0 0 2rem' }}>Calculated attendance percentages based on the selected filters.</p>

                <div className="table-responsive" style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead style={{ borderBottom: '2px solid #e3e6f0' }}>
                            <tr>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Batch Name</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Topic</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Students</th>
                                <th style={{ padding: '1rem', textAlign: 'center', color: '#858796', fontWeight: 600 }}>Attendance (%)</th>
                                <th style={{ padding: '1rem', textAlign: 'right', color: '#858796', fontWeight: 600 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="5" style={{ padding: '3rem', textAlign: 'center', color: '#858796' }}>
                                    No attendance records found for the selected filters.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewAttendance;
