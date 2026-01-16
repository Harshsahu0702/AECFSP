import React from 'react';

const AssignedBatches = () => {
    return (
        <div className="approval-container" style={{ maxWidth: '100%' }}>
            <div className="page-header">
                <div className="page-header-title" style={{ display: 'block' }}>
                    <h1>My Assigned Batches</h1>
                    <p className="page-subtitle" style={{ marginLeft: 0 }}>Manage the batches assigned to you.</p>
                </div>
            </div>

            <div className="approval-card">
                <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Assigned Batches</h2>
                    <div className="batch-actions" style={{ display: 'flex', gap: '10px' }}>
                        <button className="edit-profile-btn"><i className="fas fa-download"></i> Export</button>
                        <button className="edit-profile-btn"><i className="fas fa-print"></i> Print</button>
                    </div>
                </div>

                <div className="batch-filters" style={{ padding: '15px 0', borderBottom: '1px solid #eee', marginBottom: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <div className="search-box" style={{ flex: 1, minWidth: '200px' }}>
                        <input type="text" placeholder="Search batches..." style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    </div>
                    <select style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}>
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                    <select style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}>
                        <option>All Courses</option>
                        <option>Computer Science</option>
                        <option>Information Technology</option>
                    </select>
                </div>

                <div className="empty-state">
                    <i className="fas fa-inbox"></i>
                    <h3>No batches assigned yet</h3>
                    <p>You don't have any assigned batches at the moment.</p>
                </div>

                <div className="pagination" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                    <div className="pagination-info" style={{ color: '#666', fontSize: '0.9rem' }}>
                        Showing 0 to 0 of 0 entries
                    </div>
                    <div className="pagination-controls" style={{ display: 'flex', gap: '5px' }}>
                        <button style={{ padding: '5px 10px', border: '1px solid #ddd', background: '#fff', borderRadius: '4px', cursor: 'not-allowed' }} disabled><i className="fas fa-chevron-left"></i></button>
                        <button style={{ padding: '5px 10px', border: '1px solid #007bff', background: '#007bff', color: '#fff', borderRadius: '4px' }}>1</button>
                        <button style={{ padding: '5px 10px', border: '1px solid #ddd', background: '#fff', borderRadius: '4px', cursor: 'not-allowed' }} disabled><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignedBatches;
