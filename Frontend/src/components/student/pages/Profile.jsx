import React from 'react';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="page-header">
                <div className="page-header-title" style={{ display: 'block' }}>
                    <h1>My Profile</h1>
                    <p className="page-subtitle" style={{ marginLeft: 0 }}>Keep your profile up to date.</p>
                </div>
            </div>

            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-avatar">
                        <div className="avatar-circle">MA</div>
                    </div>
                    <div className="profile-info">
                        <h2>Mayank Agarwal</h2>
                        <p className="user-identifier">AEC/2024/0001</p>
                    </div>
                </div>

                <div className="profile-details">
                    <div className="details-grid">
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fas fa-envelope"></i></div>
                            <div className="detail-content">
                                <label>Email</label>
                                <input type="text" value="mayankagarwal2967@gmail.com" disabled />
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fas fa-phone"></i></div>
                            <div className="detail-content">
                                <label>Phone Number</label>
                                <input type="text" value="9988998266" disabled />
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fab fa-whatsapp"></i></div>
                            <div className="detail-content">
                                <label>WhatsApp Number</label>
                                <input type="text" value="9988998266" disabled />
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fas fa-building"></i></div>
                            <div className="detail-content">
                                <label>Department</label>
                                <input type="text" value="Information Technology (IT)" disabled />
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fas fa-layer-group"></i></div>
                            <div className="detail-content">
                                <label>Section</label>
                                <input type="text" value="N/A" disabled />
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fas fa-id-card"></i></div>
                            <div className="detail-content">
                                <label>Roll Number</label>
                                <input type="text" value="1425562626266266" disabled />
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fas fa-registered"></i></div>
                            <div className="detail-content">
                                <label>Registration Number</label>
                                <input type="text" value="15252552525356366" disabled />
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fas fa-check-circle"></i></div>
                            <div className="detail-content">
                                <label>Email Verified</label>
                                <input type="text" value="Yes" disabled />
                            </div>
                        </div>
                    </div>

                    <div className="security-section">
                        <h3>Academic Details</h3>
                        <div className="details-grid">
                            <div className="detail-item" style={{ background: '#f8f9fa', padding: '10px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                                <div className="detail-content">
                                    <label style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Class 12th</label>
                                    <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Board: ISC, Percentage: 86%</p>
                                </div>
                            </div>
                            <div className="detail-item" style={{ background: '#f8f9fa', padding: '10px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                                <div className="detail-content">
                                    <label style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Class 10th</label>
                                    <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Board: ICSE, Percentage: 92%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="security-section" style={{ marginTop: '20px' }}>
                        <h3>Account Security</h3>
                        <button className="change-password-btn">Change Password</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
