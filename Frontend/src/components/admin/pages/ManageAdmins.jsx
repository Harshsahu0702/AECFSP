import React from 'react';
import { Link } from 'react-router-dom';

const ManageAdmins = () => {
    return (
        <div className="dashboard-content">
            <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-user-shield" style={{ color: '#4e73df' }}></i>
                        Manage Administrators
                    </h1>
                    <p className="page-subtitle" style={{ color: '#858796', marginLeft: '40px' }}>View, add, or edit administrator accounts for the FSP system.</p>
                </div>
                <Link to="/admin/users/register" className="btn btn-primary" style={{ background: '#2e59d9', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.35rem', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fas fa-user-plus"></i> Add New Admin
                </Link>
            </div>

            <div className="table-container" style={{ background: 'white', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #e3e6f0' }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', margin: 0 }}>Administrator List</h3>
                    <p style={{ fontSize: '0.85rem', color: '#858796', margin: '0.5rem 0 0' }}>A list of all registered administrators. Pending accounts must be approved by Management.</p>
                </div>

                <div className="table-responsive" style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead style={{ background: '#f8f9fc', borderBottom: '2px solid #e3e6f0' }}>
                            <tr>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Admin ID</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Name</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Email</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Username</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#858796', fontWeight: 600 }}>Status</th>
                                <th style={{ padding: '1rem', textAlign: 'center', color: '#858796', fontWeight: 600 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Row 1 */}
                            <tr style={{ borderBottom: '1px solid #e3e6f0' }}>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>2KaAUOS...</td>
                                <td style={{ padding: '1rem', fontWeight: 600, color: '#5a5c69' }}>Amit Rai</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>amitrai2212@gmail.com</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>amit_rai_admin</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{ background: '#2e59d9', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 600 }}>Active</span>
                                </td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                    <button style={{ background: 'none', border: 'none', color: '#d1d3e2', cursor: 'pointer', fontSize: '1rem' }}>...</button>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr style={{ borderBottom: '1px solid #e3e6f0' }}>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>Tu7UDH2...</td>
                                <td style={{ padding: '1rem', fontWeight: 600, color: '#5a5c69' }}>Harsh Agarwalla</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>harshagarwalla292@gmail.com</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>harsh_agarwalla_admin</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{ background: '#2e59d9', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 600 }}>Active</span>
                                </td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                    <button style={{ background: 'none', border: 'none', color: '#d1d3e2', cursor: 'pointer', fontSize: '1rem' }}>...</button>
                                </td>
                            </tr>
                            {/* Row 3 */}
                            <tr style={{ borderBottom: '1px solid #e3e6f0' }}>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>dJyRGYUY...</td>
                                <td style={{ padding: '1rem', fontWeight: 600, color: '#5a5c69' }}>Harsh Ray</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>harshray2007@gmail.com</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>harsh_admin</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{ background: '#2e59d9', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 600 }}>Active</span>
                                </td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                    <button style={{ background: 'none', border: 'none', color: '#d1d3e2', cursor: 'pointer', fontSize: '1rem' }}>...</button>
                                </td>
                            </tr>
                            {/* Row 4 */}
                            <tr style={{ borderBottom: '1px solid #e3e6f0' }}>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>fBRpjtx1iR...</td>
                                <td style={{ padding: '1rem', fontWeight: 600, color: '#5a5c69' }}>Sanjay Sharma</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>sanjaycold499@gmail.com</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>sanjay_sharma_admin</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{ background: '#2e59d9', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 600 }}>Active</span>
                                </td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                    <button style={{ background: 'none', border: 'none', color: '#d1d3e2', cursor: 'pointer', fontSize: '1rem' }}>...</button>
                                </td>
                            </tr>
                            {/* Row 5 */}
                            <tr style={{ borderBottom: '1px solid #e3e6f0' }}>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>sR5REGQ...</td>
                                <td style={{ padding: '1rem', fontWeight: 600, color: '#5a5c69' }}>Rajendra Pattanayak</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>raj2105pattanayak@gmail.com</td>
                                <td style={{ padding: '1rem', color: '#5a5c69' }}>rp001</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{ background: '#2e59d9', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 600 }}>Active</span>
                                </td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                    <button style={{ background: 'none', border: 'none', color: '#d1d3e2', cursor: 'pointer', fontSize: '1rem' }}>...</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAdmins;
