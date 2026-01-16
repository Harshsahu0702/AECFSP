import React from 'react';

const AdminMonitor = () => {
    return (
        <div className="admin-container">
            <div className="page-header">
                <div className="page-title">
                    <i className="fas fa-shield-alt"></i>
                    <h1>Monitor Administrators (Host)</h1>
                </div>

                <p className="page-subtitle">View all registered administrator accounts and their status.</p>
            </div>

            <div className="admin-card">
                <div className="card-header">
                    <h2>Administrator Accounts</h2>
                    <p>A list of all administrators in the FSP system.</p>
                </div>

                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Admin ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2KaAUOS...</td>
                                <td>Amit Rai</td>
                                <td>amitrai2212@gmail.com</td>
                                <td>amit_rai_admin</td>
                                <td><span className="status-badge active">Active</span></td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                            <tr>
                                <td>Tu7UDH2...</td>
                                <td>Harsh Agarwalla</td>
                                <td>harshagarwalla292@gmail.com</td>
                                <td>harsh_agarwalla_admin</td>
                                <td><span class="status-badge active">Active</span></td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                            <tr>
                                <td>dJyRGYUY...</td>
                                <td>Harsh Ray</td>
                                <td>harshray2007@gmail.com</td>
                                <td>harsh_admin</td>
                                <td><span className="status-badge active">Active</span></td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                            <tr>
                                <td>fBRpjtx1iR...</td>
                                <td>Sanjay Sharma</td>
                                <td>sanjaycold499@gmail.com</td>
                                <td>sanjay_sharma_admin</td>
                                <td><span className="status-badge active">Active</span></td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                            <tr>
                                <td>sR5REGO...</td>
                                <td>Rajendra Pattanayak</td>
                                <td>raj2105pattanayak@gmail.com</td>
                                <td>rp001</td>
                                <td><span className="status-badge active">Active</span></td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminMonitor;
