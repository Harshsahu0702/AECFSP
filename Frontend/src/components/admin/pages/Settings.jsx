import React, { useState } from 'react';

const Settings = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [batchAlerts, setBatchAlerts] = useState(true);
    const [mfa, setMfa] = useState(false);

    return (
        <div className="dashboard-content">
            <div className="page-header" style={{ marginBottom: '2rem' }}>
                <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-cog" style={{ color: '#4e73df' }}></i>
                    System Settings
                </h1>
                <p className="page-subtitle" style={{ color: '#858796', marginLeft: '45px' }}>Configure global settings for the FSP application.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {/* Notification Settings */}
                <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="far fa-bell"></i> Notification Settings
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#858796', marginBottom: '1.5rem' }}>Manage system-wide notification preferences.</p>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <div>
                                <h5 style={{ fontSize: '0.9rem', color: '#4a4b65', margin: 0 }}>Email Notifications</h5>
                                <p style={{ fontSize: '0.75rem', color: '#858796', margin: 0 }}>Enable or disable email notifications for all users.</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" checked={emailNotifications} onChange={() => setEmailNotifications(!emailNotifications)} />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h5 style={{ fontSize: '0.9rem', color: '#4a4b65', margin: 0 }}>Batch Update Alerts</h5>
                                <p style={{ fontSize: '0.75rem', color: '#858796', margin: 0 }}>Notify students and teachers of batch changes.</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" checked={batchAlerts} onChange={() => setBatchAlerts(!batchAlerts)} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <button style={{ width: '100%', background: '#19355e', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '0.35rem', fontWeight: 600, cursor: 'pointer' }}>
                        Save Notification Settings
                    </button>
                </div>

                {/* Security Settings */}
                <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="fas fa-lock"></i> Security Settings
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#858796', marginBottom: '1.5rem' }}>Manage system security configurations.</p>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <div style={{ maxWidth: '70%' }}>
                                <h5 style={{ fontSize: '0.9rem', color: '#4a4b65', margin: 0 }}>Multi-Factor Authentication</h5>
                                <p style={{ fontSize: '0.75rem', color: '#858796', margin: 0 }}>Require MFA for admin and teacher accounts.</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" checked={mfa} onChange={() => setMfa(!mfa)} />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div>
                            <h5 style={{ fontSize: '0.9rem', color: '#4a4b65', margin: '0 0 0.3rem' }}>Session Timeout (minutes)</h5>
                            <p style={{ fontSize: '0.75rem', color: '#858796', margin: '0 0 0.5rem' }}>Set idle session timeout duration.</p>
                            <input type="number" defaultValue="30" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2' }} />
                        </div>
                    </div>

                    <button style={{ width: '100%', background: '#19355e', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '0.35rem', fontWeight: 600, cursor: 'pointer' }}>
                        Save Security Settings
                    </button>
                </div>

                {/* Appearance Settings */}
                <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="fas fa-palette"></i> Appearance Settings
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#858796', marginBottom: '1.5rem' }}>Customize appearance (Branding options).</p>

                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ fontSize: '0.85rem', color: '#858796', lineHeight: '1.6' }}>
                            Appearance settings (e.g., logo upload, theme color adjustments) are currently managed via theme files. Advanced customization options will be available here in future updates.
                        </p>
                    </div>

                    <button style={{ width: '100%', background: '#858796', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '0.35rem', fontWeight: 600, cursor: 'not-allowed', opacity: 0.8 }}>
                        Update Appearance (Coming Soon)
                    </button>
                </div>
            </div>

            <style>{`
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 44px;
                    height: 24px;
                }
                .switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }
                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #ccc;
                    -webkit-transition: .4s;
                    transition: .4s;
                }
                .slider:before {
                    position: absolute;
                    content: "";
                    height: 18px;
                    width: 18px;
                    left: 3px;
                    bottom: 3px;
                    background-color: white;
                    -webkit-transition: .4s;
                    transition: .4s;
                }
                input:checked + .slider {
                    background-color: #19355e;
                }
                input:focus + .slider {
                    box-shadow: 0 0 1px #19355e;
                }
                input:checked + .slider:before {
                    -webkit-transform: translateX(20px);
                    -ms-transform: translateX(20px);
                    transform: translateX(20px);
                }
                .slider.round {
                    border-radius: 34px;
                }
                .slider.round:before {
                    border-radius: 50%;
                }
            `}</style>
        </div>
    );
};

export default Settings;
