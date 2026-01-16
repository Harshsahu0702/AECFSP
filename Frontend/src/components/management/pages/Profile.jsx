import React from 'react';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <p className="page-subtitle" style={{ margin: 0 }}>View your management user information</p>
                <button className="edit-profile-btn" style={{ margin: 0 }}>
                    <i className="fas fa-edit"></i> Edit Profile
                </button>
            </div>

            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-avatar">
                        <div className="avatar-circle">HR</div>
                    </div>
                    <div className="profile-info">
                        <h2>Harsh Ray</h2>
                        <p className="user-identifier">elvishray007@gmail.com (host)</p>
                    </div>
                </div>

                <div className="profile-details">
                    <div className="details-grid">
                        <div className="detail-item">
                            <div className="detail-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="detail-content">
                                <label>Email</label>
                                <input type="email" value="elvishray007@gmail.com" readOnly />
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="detail-content">
                                <label>Phone Number</label>
                                <input type="tel" value="9002555217" readOnly />
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">
                                <i className="fab fa-whatsapp"></i>
                            </div>
                            <div className="detail-content">
                                <label>WhatsApp Number</label>
                                <input type="tel" value="9002555217" readOnly />
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">
                                <i className="fas fa-user-circle"></i>
                            </div>
                            <div className="detail-content">
                                <label>Role</label>
                                <input type="text" value="Management" readOnly />
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <div className="detail-content">
                                <label>Account Status</label>
                                <input type="text" value="N/A" readOnly />
                            </div>
                        </div>
                    </div>

                    <div className="security-section">
                        <h3>Account Security</h3>
                        <button className="change-password-btn">
                            <i className="fas fa-key"></i> Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
