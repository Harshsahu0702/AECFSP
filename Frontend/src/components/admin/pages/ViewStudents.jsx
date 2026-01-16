import React from 'react';
import { Link } from 'react-router-dom';

const ViewStudents = () => {
    return (
        <div className="dashboard-content">
            <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-user-graduate" style={{ color: '#4e73df' }}></i>
                        View Students
                    </h1>
                    <p className="page-subtitle" style={{ color: '#858796', marginLeft: '40px' }}>Browse and search student records in the FSP system.</p>
                </div>
            </div>

            <div className="card" style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <input type="text" placeholder="Search by Name or ID..." style={{ flex: 1, padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#f8f9fc', minWidth: '250px' }} />
                    <select style={{ padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#f8f9fc', color: '#6e707e' }}>
                        <option>All Departments</option>
                        <option>CSE</option>
                        <option>IT</option>
                        <option>ECE</option>
                    </select>
                    <select style={{ padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#f8f9fc', color: '#6e707e' }}>
                        <option>All Years</option>
                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year</option>
                        <option>4th Year</option>
                    </select>
                    <button className="btn btn-primary" style={{ background: '#2e59d9', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.35rem', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="fas fa-search"></i> Search
                    </button>
                </div>
            </div>

            <div className="card" style={{ background: 'white', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                <div className="table-responsive" style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead style={{ background: '#f8f9fc', borderBottom: '2px solid #e3e6f0' }}>
                            <tr>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Student ID</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Name</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Department</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Email</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Phone</th>
                                <th style={{ padding: '1rem', textAlign: 'center', color: '#858796', fontWeight: 600 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Sample Row 1 */}
                            <tr style={{ borderBottom: '1px solid #e3e6f0' }}>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>AEC/2023/001</td>
                                <td style={{ padding: '1rem', fontWeight: 600, color: '#5a5c69' }}>Rahul Sharma</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>CSE</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>rahul.s@example.com</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>+91 9876543210</td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                    <button style={{ background: 'none', border: 'none', color: '#2e59d9', cursor: 'pointer', marginRight: '0.5rem' }} title="View Profile"><i className="fas fa-eye"></i></button>
                                    <button style={{ background: 'none', border: 'none', color: '#e74a3b', cursor: 'pointer' }} title="Delete"><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                            {/* Sample Row 2 */}
                            <tr style={{ borderBottom: '1px solid #e3e6f0' }}>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>AEC/2023/042</td>
                                <td style={{ padding: '1rem', fontWeight: 600, color: '#5a5c69' }}>Priya Patel</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>IT</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>priya.p@example.com</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>+91 8765432109</td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                    <button style={{ background: 'none', border: 'none', color: '#2e59d9', cursor: 'pointer', marginRight: '0.5rem' }} title="View Profile"><i className="fas fa-eye"></i></button>
                                    <button style={{ background: 'none', border: 'none', color: '#e74a3b', cursor: 'pointer' }} title="Delete"><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid #e3e6f0' }}>
                    <span style={{ fontSize: '0.85rem', color: '#858796' }}>Showing 2 of 150 students</span>
                </div>
            </div>
        </div>
    );
};

export default ViewStudents;
