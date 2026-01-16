import React from 'react';

const TeacherMonitor = () => {
    return (
        <div className="teacher-container">
            <div className="page-header">
                <p className="page-subtitle">View all registered teacher accounts and their status.</p>
            </div>

            <div className="teacher-card">
                <div className="card-header">
                    <h2>Teacher Accounts</h2>
                    <p>A list of all teachers in the FSP system.</p>
                </div>

                <div className="teacher-table-container">
                    <table className="teacher-table">
                        <thead>
                            <tr>
                                <th>Teacher ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Department</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="highlighted-row">
                                <td>QkudKtu...</td>
                                <td>Rajwant</td>
                                <td>rajwant2024@gmail.com</td>
                                <td>Mechanical Engineering (ME)</td>
                                <td><span className="status-badge active">Active</span></td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                            <tr>
                                <td>a1x9ICKq...</td>
                                <td>Rajeev Singh</td>
                                <td>agarwallaharsh83@gmail.com</td>
                                <td>Computer Science & Engineering (AI & ML)</td>
                                <td><span className="status-badge active">Active</span></td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                            <tr>
                                <td>3mK9vX2...</td>
                                <td>Amit Rai</td>
                                <td>amitrai2212@gmail.com</td>
                                <td>Information Technology (IT)</td>
                                <td><span className="status-badge active">Active</span></td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                            <tr>
                                <td>7pL4wN8...</td>
                                <td>Dr. Evelyn Reed</td>
                                <td>evelyn.reed@example.com</td>
                                <td>Computer Science & Engineering (CSE)</td>
                                <td><span className="status-badge active">Active</span></td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                            <tr>
                                <td>9qM5xO1...</td>
                                <td>Mr. Samuel Chen</td>
                                <td>samuel.chen@example.com</td>
                                <td>Information Technology (IT)</td>
                                <td><span className="status-badge active">Active</span></td>
                                <td><i className="fas fa-ellipsis-v"></i></td>
                            </tr>
                            <tr>
                                <td>2rN6yP3...</td>
                                <td>joseph deniel</td>
                                <td>joseph.deniel@example.com</td>
                                <td>Information Technology (IT)</td>
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

export default TeacherMonitor;
