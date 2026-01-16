import React from 'react';

const ManageAcademics = () => {
    return (
        <div className="dashboard-content">
            <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-book" style={{ color: '#4e73df' }}></i>
                        Manage Academics
                    </h1>
                    <p className="page-subtitle" style={{ color: '#858796', marginLeft: '45px' }}>View, add, or edit student test scores and academic records.</p>
                </div>
                <button style={{ background: '#2e59d9', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.35rem', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fas fa-file-excel"></i> Download as Excel
                </button>
            </div>

            <div className="card" style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', margin: '0 0 0.5rem' }}>Filter Students & Records</h3>
                <p style={{ fontSize: '0.85rem', color: '#858796', margin: '0 0 1.5rem' }}>Use the filters below to refine the student list and the data for Excel export.</p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#4a4b65', marginBottom: '0.5rem' }}>Department</label>
                        <select style={{ width: '100%', padding: '0.5rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#eaecf4' }}>
                            <option>All Departments</option>
                            <option>CSE</option>
                            <option>IT</option>
                            <option>ECE</option>
                        </select>
                    </div>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#4a4b65', marginBottom: '0.5rem' }}>Filter by Percentage Type</label>
                        <select style={{ width: '100%', padding: '0.5rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe' }}>
                            <option>Class 12th %</option>
                            <option>Class 10th %</option>
                        </select>
                    </div>
                    <div style={{ flex: 1, minWidth: '100px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#4a4b65', marginBottom: '0.5rem' }}>Min %</label>
                        <input type="text" placeholder="e.g., 60" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: '100px' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#4a4b65', marginBottom: '0.5rem' }}>Max %</label>
                        <input type="text" placeholder="e.g., 100" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe' }} />
                    </div>
                </div>

                <div className="table-responsive" style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead style={{ borderBottom: '2px solid #e3e6f0' }}>
                            <tr>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Student Name</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Student ID</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Department</th>
                                <th style={{ padding: '1rem', textAlign: 'center', color: '#858796', fontWeight: 600 }}>10th %</th>
                                <th style={{ padding: '1rem', textAlign: 'center', color: '#858796', fontWeight: 600 }}>12th %</th>
                                <th style={{ padding: '1rem', textAlign: 'right', color: '#858796', fontWeight: 600 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #e3e6f0' }}>
                                <td style={{ padding: '1rem', fontWeight: 600, color: '#5a5c69' }}>Debosmita Sinha</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>AEC/2023/0019</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>Information Technology (IT)</td>
                                <td style={{ padding: '1rem', textAlign: 'center', color: '#5a5c69' }}>N/A</td>
                                <td style={{ padding: '1rem', textAlign: 'center', color: '#5a5c69' }}>N/A</td>
                                <td style={{ padding: '1rem', textAlign: 'right' }}>
                                    <button style={{ background: '#e8f0fe', color: '#4e73df', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '0.35rem', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }}>
                                        <i className="fas fa-user-edit" style={{ marginRight: '0.3rem' }}></i> Manage Tests
                                    </button>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e3e6f0' }}>
                                <td style={{ padding: '1rem', fontWeight: 600, color: '#5a5c69' }}>Anushka Sinha</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>AEC/2023/0034</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>Information Technology (IT)</td>
                                <td style={{ padding: '1rem', textAlign: 'center', color: '#5a5c69' }}>N/A</td>
                                <td style={{ padding: '1rem', textAlign: 'center', color: '#5a5c69' }}>N/A</td>
                                <td style={{ padding: '1rem', textAlign: 'right' }}>
                                    <button style={{ background: '#e8f0fe', color: '#4e73df', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '0.35rem', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }}>
                                        <i className="fas fa-user-edit" style={{ marginRight: '0.3rem' }}></i> Manage Tests
                                    </button>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e3e6f0' }}>
                                <td style={{ padding: '1rem', fontWeight: 600, color: '#5a5c69' }}>Abhinaw Kumar Ram</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>AEC/2023/0079</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>Information Technology (IT)</td>
                                <td style={{ padding: '1rem', textAlign: 'center', color: '#5a5c69' }}>N/A</td>
                                <td style={{ padding: '1rem', textAlign: 'center', color: '#5a5c69' }}>N/A</td>
                                <td style={{ padding: '1rem', textAlign: 'right' }}>
                                    <button style={{ background: '#e8f0fe', color: '#4e73df', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '0.35rem', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }}>
                                        <i className="fas fa-user-edit" style={{ marginRight: '0.3rem' }}></i> Manage Tests
                                    </button>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e3e6f0' }}>
                                <td style={{ padding: '1rem', fontWeight: 600, color: '#5a5c69' }}>Andrew Honor</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>AEC/2023/0201</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>Information Technology (IT)</td>
                                <td style={{ padding: '1rem', textAlign: 'center', color: '#5a5c69' }}>N/A</td>
                                <td style={{ padding: '1rem', textAlign: 'center', color: '#5a5c69' }}>N/A</td>
                                <td style={{ padding: '1rem', textAlign: 'right' }}>
                                    <button style={{ background: '#e8f0fe', color: '#4e73df', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '0.35rem', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }}>
                                        <i className="fas fa-user-edit" style={{ marginRight: '0.3rem' }}></i> Manage Tests
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAcademics;
