import React from 'react';

const ViewAttendance = () => {
    return (
        <div className="dashboard-content">
            <div className="attendance-container" style={{ background: 'white', borderRadius: '8px', boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1)', margin: '1.5rem 0', overflow: 'hidden' }}>
                <div className="filters-section" style={{ background: 'white', borderRadius: '8px', marginBottom: '2rem', overflow: 'hidden' }}>
                    <div className="filters-header" style={{ padding: '1.5rem 2rem 0.5rem', borderBottom: '1px solid #e3e6f0', background: 'linear-gradient(135deg, #f8f9fc 0%, #e9ecf5 100%)' }}>
                        <h1 style={{ fontSize: '1.5rem', color: '#2e2e48', margin: '0 0 0.5rem 0', fontWeight: 600 }}>Filters</h1>
                        <div className="filter-help-text" style={{ color: '#4a5568', margin: '1rem 0 1.5rem', fontSize: '1rem', lineHeight: 1.6, display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #4e73df', width: '100%', boxSizing: 'border-box' }}>
                            <i className="fas fa-info-circle" style={{ color: '#4e73df', marginTop: '0.1rem', fontSize: '1.1rem' }}></i>
                            <p style={{ margin: 0 }}>Refine the attendance records by selecting a batch and date range.</p>
                        </div>
                    </div>

                    <div className="filters-container" style={{ display: 'flex', padding: '1.5rem 2rem 2rem', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'flex-end', background: '#fff' }}>
                        <div className="filter-group" style={{ display: 'flex', flexDirection: 'column', minWidth: '280px', flex: '1 1 250px', marginBottom: '0.5rem' }}>
                            <label htmlFor="batch" style={{ fontSize: '0.9rem', color: '#4a4b65', marginBottom: '0.5rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}><i className="fas fa-users"></i> Batch</label>
                            <select id="batch" className="form-control" style={{ padding: '0.85rem 1.25rem', border: '1px solid #d1d3e2', borderRadius: '8px', fontSize: '1.05rem', height: 'auto', minHeight: '52px', transition: 'all 0.2s ease', backgroundColor: '#f8f9fc', marginTop: '0.5rem' }}>
                                <option value="">Select Batch</option>
                                <option value="1">Batch 2023-24 (A)</option>
                                <option value="2">Batch 2023-24 (B)</option>
                                <option value="3">Batch 2022-23 (A)</option>
                            </select>
                        </div>
                        <div className="filter-group" style={{ display: 'flex', flexDirection: 'column', minWidth: '280px', flex: '1 1 250px', marginBottom: '0.5rem' }}>
                            <label htmlFor="fromDate" style={{ fontSize: '0.9rem', color: '#4a4b65', marginBottom: '0.5rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}><i className="far fa-calendar-alt"></i> From Date</label>
                            <input type="date" id="fromDate" className="form-control" style={{ padding: '0.85rem 1.25rem', border: '1px solid #d1d3e2', borderRadius: '8px', fontSize: '1.05rem', height: 'auto', minHeight: '52px', transition: 'all 0.2s ease', backgroundColor: '#f8f9fc', marginTop: '0.5rem' }} />
                        </div>
                        <div className="filter-group" style={{ display: 'flex', flexDirection: 'column', minWidth: '280px', flex: '1 1 250px', marginBottom: '0.5rem' }}>
                            <label htmlFor="toDate" style={{ fontSize: '0.9rem', color: '#4a4b65', marginBottom: '0.5rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}><i className="far fa-calendar-check"></i> To Date</label>
                            <input type="date" id="toDate" className="form-control" style={{ padding: '0.85rem 1.25rem', border: '1px solid #d1d3e2', borderRadius: '8px', fontSize: '1.05rem', height: 'auto', minHeight: '52px', transition: 'all 0.2s ease', backgroundColor: '#f8f9fc', marginTop: '0.5rem' }} />
                        </div>
                    </div>
                </div>

                {/* Attendance Summary Section */}
                <div className="summary-section" style={{ background: 'white', borderRadius: '12px', boxShadow: '0 0.25rem 1.5rem 0 rgba(0, 0, 0, 0.05)', margin: '2.5rem 0', overflow: 'hidden' }}>
                    <div className="summary-header" style={{ padding: '2rem 2.5rem 1.5rem', borderBottom: '1px solid #f0f2f5' }}>
                        <h2 style={{ color: '#2e2e48', fontSize: '1.75rem', margin: '0 0 1.25rem 0', fontWeight: 600, letterSpacing: '-0.3px', lineHeight: 1.3 }}>Attendance Summary</h2>
                        <p className="summary-note" style={{ color: '#4a5568', margin: '1rem 0 0', fontSize: '1rem', lineHeight: 1.6, display: 'flex', alignItems: 'flexStart', gap: '0.75rem', backgroundColor: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '4px solid #4e73df' }}>
                            <i className="fas fa-info-circle" style={{ color: '#4e73df', marginTop: '0.1rem', fontSize: '1.1rem' }}></i>
                            Calculated attendance percentage is based on selected filters
                        </p>
                    </div>

                    <div className="table-responsive" style={{ padding: '1.5rem 2.5rem 2.5rem', width: '100%', overflowX: 'auto' }}>
                        <table className="summary-table" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', backgroundColor: '#f8f9fc', color: '#4a4b65', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.5px', borderBottom: '2px solid #e3e6f0' }}>Batch Name</th>
                                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', backgroundColor: '#f8f9fc', color: '#4a4b65', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.5px', borderBottom: '2px solid #e3e6f0' }}>Topic</th>
                                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', backgroundColor: '#f8f9fc', color: '#4a4b65', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.5px', borderBottom: '2px solid #e3e6f0' }}>Students</th>
                                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', backgroundColor: '#f8f9fc', color: '#4a4b65', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.5px', borderBottom: '2px solid #e3e6f0' }}>Attendance</th>
                                    <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', backgroundColor: '#f8f9fc', color: '#4a4b65', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.5px', borderBottom: '2px solid #e3e6f0' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="5" className="no-records" style={{ padding: '3.5rem 2rem', textAlign: 'center', color: '#6c757d', fontStyle: 'italic', backgroundColor: '#fcfcfd', borderRadius: '8px', margin: '1rem 0' }}>
                                        <i className="far fa-folder-open" style={{ fontSize: '2.5rem', color: '#d1d3e2', marginBottom: '1rem', display: 'block' }}></i>
                                        <p style={{ fontSize: '1.1rem', margin: '0.5rem 0 0', color: '#6c757d' }}>No attendance records found for the selected filters</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="pagination" style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', borderTop: '1px solid #e3e6f0', gap: '0.5rem' }}>
                <button disabled style={{ padding: '0.5rem 0.75rem', border: '1px solid #d1d3e2', background: 'white', borderRadius: '0.35rem', cursor: 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '2.5rem', opacity: 0.5 }}><i className="fas fa-chevron-left"></i></button>
                <button className="active" style={{ padding: '0.5rem 0.75rem', border: '1px solid #4e73df', background: '#4e73df', color: 'white', borderRadius: '0.35rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '2.5rem' }}>1</button>
                <button style={{ padding: '0.5rem 0.75rem', border: '1px solid #d1d3e2', background: 'white', borderRadius: '0.35rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '2.5rem' }}>2</button>
                <button style={{ padding: '0.5rem 0.75rem', border: '1px solid #d1d3e2', background: 'white', borderRadius: '0.35rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '2.5rem' }}>3</button>
                <button style={{ padding: '0.5rem 0.75rem', border: '1px solid #d1d3e2', background: 'white', borderRadius: '0.35rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '2.5rem' }}><i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
    );
};

export default ViewAttendance;
