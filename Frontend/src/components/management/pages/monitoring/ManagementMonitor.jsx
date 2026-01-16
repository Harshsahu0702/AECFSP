import React from 'react';

const ManagementMonitor = () => {
    return (
        <div className="management-container">
            <div className="page-header">
                <p className="page-subtitle">View all registered management (host) accounts.</p>
            </div>

            <div className="management-card">
                <div className="card-header">
                    <h2>Management Accounts</h2>
                    <p>A list of all management users in the FSP system.</p>
                </div>

                <div className="management-table-container">
                    <table className="management-table">
                        <thead>
                            <tr>
                                <th>Host ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>7rnNzeTAHdXhpn4Ec...</td>
                                <td>Harsh Agarwalla</td>
                                <td>pappua088@gmail.com</td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                            <tr>
                                <td>EeYksU7yyvd7tgYl3n...</td>
                                <td>Harsh Ray</td>
                                <td>elvishray007@gmail.com</td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                            <tr>
                                <td>zSZ8n5BuhnTDIV1sZ...</td>
                                <td>Sanjay</td>
                                <td>sanjay041024@gmail.com</td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManagementMonitor;
