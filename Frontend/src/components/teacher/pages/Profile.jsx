import React from 'react';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="page-header">
                <div className="page-header-title" style={{ display: 'block' }}>
                    <h1>My Profile</h1>
                    <p className="page-subtitle" style={{ marginLeft: 0 }}>Update your personal information.</p>
                </div>
            </div>

            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-avatar">
                        <div className="avatar-circle">T</div> {/* Placeholder for Teacher Avatar */}
                    </div>
                    <div className="profile-info">
                        <h2>John Doe</h2>
                        <p className="user-identifier">Computer Science Department</p>
                    </div>
                </div>

                <div className="profile-details">
                    <div className="details-grid">
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fas fa-user"></i></div>
                            <div className="detail-content">
                                <label>Username</label>
                                <input type="text" defaultValue="johndoe" />
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fas fa-envelope"></i></div>
                            <div className="detail-content">
                                <label>Email</label>
                                <input type="email" defaultValue="johndoe@example.com" />
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fas fa-phone"></i></div>
                            <div className="detail-content">
                                <label>Phone Number</label>
                                <input type="tel" defaultValue="+1 234 567 890" />
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fas fa-building"></i></div>
                            <div className="detail-content">
                                <label>Department</label>
                                <input type="text" defaultValue="Computer Science" />
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fab fa-whatsapp"></i></div>
                            <div className="detail-content">
                                <label>WhatsApp Number</label>
                                <input type="tel" defaultValue="+1 234 567 890" />
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-icon"><i className="fas fa-check-circle"></i></div>
                            <div className="detail-content">
                                <label>Account Status</label>
                                <input type="text" value="Active" disabled style={{ color: '#28a745', fontWeight: 'bold' }} />
                            </div>
                        </div>
                    </div>

                    <div className="profile-actions" style={{ marginTop: '20px', gap: '10px' }}>
                        <button className="change-password-btn" style={{ background: '#6c757d', color: '#fff' }}>Cancel</button>
                        <button className="change-password-btn" style={{ background: '#007bff', color: '#fff' }}>Save Changes</button>
                    </div>

                    <div className="security-section" style={{ marginTop: '30px' }}>
                        <h3>Account Security</h3>
                        <p style={{ color: '#666', marginBottom: '15px' }}>Secure your account with a strong password.</p>
                        <button className="change-password-btn">Change Password</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
