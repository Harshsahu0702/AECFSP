import React from 'react';

const Profile = () => {
    return (
        <div className="dashboard-content">
            <div className="profile-container" style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                <div className="profile-card" style={{ background: 'white', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)', width: '100%', maxWidth: '800px', padding: '2rem', textAlign: 'center' }}>
                    <div className="profile-avatar" style={{ width: '100px', height: '100px', background: '#e3e6f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#4e73df', margin: '0 auto 1rem' }}>
                        RP
                    </div>
                    <h2 style={{ margin: '0 0 0.5rem', color: '#4a4b65' }}>Rajendra Pattanayak</h2>
                    <p style={{ margin: '0 0 0.25rem', color: '#858796' }}>raj2105pattanayak@gmail.com (admin)</p>
                    <p style={{ margin: '0 0 1.5rem', color: '#858796', fontSize: '0.9rem' }}>Username: @rp001</p>

                    <button style={{ background: '#4e73df', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.35rem', cursor: 'not-allowed', opacity: 0.7, marginBottom: '2rem' }}>
                        <i className="fas fa-image" style={{ marginRight: '0.5rem' }}></i>
                        Change Photo (Not Implemented)
                    </button>

                    <div className="profile-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', textAlign: 'left' }}>
                        <div className="form-group">
                            <label style={{ display: 'block', color: '#858796', fontSize: '0.85rem', marginBottom: '0.5rem' }}><i className="far fa-user-circle"></i> Username</label>
                            <input type="text" value="rp001" disabled style={{ width: '100%', padding: '0.75rem', border: '1px solid #e3e6f0', borderRadius: '0.35rem', background: '#f8f9fc', color: '#6e707e' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', color: '#858796', fontSize: '0.85rem', marginBottom: '0.5rem' }}><i className="far fa-envelope"></i> Email</label>
                            <input type="text" value="raj2105pattanayak@gmail.com" disabled style={{ width: '100%', padding: '0.75rem', border: '1px solid #e3e6f0', borderRadius: '0.35rem', background: '#f8f9fc', color: '#6e707e' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', color: '#858796', fontSize: '0.85rem', marginBottom: '0.5rem' }}><i className="fas fa-phone"></i> Phone Number</label>
                            <input type="text" value="N/A" disabled style={{ width: '100%', padding: '0.75rem', border: '1px solid #e3e6f0', borderRadius: '0.35rem', background: '#f8f9fc', color: '#6e707e' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', color: '#858796', fontSize: '0.85rem', marginBottom: '0.5rem' }}><i className="fab fa-whatsapp"></i> WhatsApp Number</label>
                            <input type="text" value="N/A" disabled style={{ width: '100%', padding: '0.75rem', border: '1px solid #e3e6f0', borderRadius: '0.35rem', background: '#f8f9fc', color: '#6e707e' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', color: '#858796', fontSize: '0.85rem', marginBottom: '0.5rem' }}><i className="fas fa-shield-alt"></i> Role</label>
                            <input type="text" value="admin" disabled style={{ width: '100%', padding: '0.75rem', border: '1px solid #e3e6f0', borderRadius: '0.35rem', background: '#f8f9fc', color: '#6e707e' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', color: '#858796', fontSize: '0.85rem', marginBottom: '0.5rem' }}><i className="fas fa-toggle-on"></i> Account Status</label>
                            <input type="text" value="Active" disabled style={{ width: '100%', padding: '0.75rem', border: '1px solid #e3e6f0', borderRadius: '0.35rem', background: '#f8f9fc', color: '#1cc88a', fontWeight: 'bold' }} />
                        </div>
                    </div>

                    <div className="account-security" style={{ marginTop: '2rem', textAlign: 'left', background: '#e8f4fd', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid #4e73df' }}>
                        <h3 style={{ margin: '0 0 1rem', fontSize: '1rem', color: '#4a4b65' }}>Account Security</h3>
                        <button style={{ background: 'white', color: '#4e73df', border: '1px solid #4e73df', padding: '0.5rem 1rem', borderRadius: '0.35rem', cursor: 'pointer', fontWeight: 600 }}>
                            Change Password
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
