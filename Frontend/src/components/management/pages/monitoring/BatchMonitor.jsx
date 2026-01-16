import React from 'react';

const BatchMonitor = () => {
    return (
        <div className="batch-container">
            <div className="page-header">
                <p className="page-subtitle">Oversee all Finishing School Program batches across the system.</p>
            </div>

            <div className="batch-card">
                <div className="card-header">
                    <h2>All System Batches</h2>
                    <p>A comprehensive list of current, scheduled, and completed FSP batches.</p>
                </div>

                <div className="batch-table-container">
                    <table className="batch-table">
                        <thead>
                            <tr>
                                <th>Batch Name</th>
                                <th>Departments</th>
                                <th>Topic</th>
                                <th>Teachers</th>
                                <th>Room</th>
                                <th>Students</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="empty-row">
                                <td colSpan="8" className="empty-message">
                                    No batches found in the system.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BatchMonitor;
