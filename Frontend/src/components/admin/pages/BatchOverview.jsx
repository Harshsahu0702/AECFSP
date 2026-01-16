import React from 'react';
import { Link } from 'react-router-dom';

const BatchOverview = () => {
    return (
        <div className="dashboard-content">
            <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-layer-group" style={{ color: '#4e73df', opacity: 0.7 }}></i>
                        Batch Overview
                    </h1>
                    <p className="page-subtitle" style={{ color: '#858796', marginLeft: '40px' }}>View and manage all Finishing School Program batches.</p>
                </div>
                <Link to="/admin/batches/create" className="btn btn-primary" style={{ background: '#2e59d9', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.35rem', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fas fa-plus"></i> Create New Batch
                </Link>
            </div>

            <div className="card" style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                    <button style={{ background: '#eaecf4', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.35rem', color: '#4a4b65', fontWeight: 600 }}>All Batches</button>
                    <button style={{ background: 'white', border: '1px solid #d1d3e2', padding: '0.5rem 1rem', borderRadius: '0.35rem', color: '#858796' }}>Active</button>
                    <button style={{ background: 'white', border: '1px solid #d1d3e2', padding: '0.5rem 1rem', borderRadius: '0.35rem', color: '#858796' }}>Upcoming</button>
                    <button style={{ background: 'white', border: '1px solid #d1d3e2', padding: '0.5rem 1rem', borderRadius: '0.35rem', color: '#858796' }}>Completed</button>
                </div>

                <div className="table-responsive">
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead style={{ borderBottom: '2px solid #e3e6f0' }}>
                            <tr>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796' }}>Batch Name</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796' }}>Topic</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796' }}>Teachers</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796' }}>Students</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796' }}>Status</th>
                                <th style={{ padding: '1rem', textAlign: 'center', color: '#858796' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="6" style={{ padding: '3rem', textAlign: 'center', color: '#858796' }}>
                                    No batches found. Click "Create New Batch" to get started.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BatchOverview;
