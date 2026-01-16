import React from 'react';

const BulkCreateStudents = () => {
    return (
        <div className="dashboard-content">
            <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8f9fc', padding: '1rem 0' }}>
                <div>
                    <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-cloud-upload-alt" style={{ color: '#4e73df' }}></i>
                        Bulk Create Students
                    </h1>
                    <p className="page-subtitle" style={{ color: '#858796', marginLeft: '40px' }}>Upload an Excel or CSV file to create multiple student accounts at once.</p>
                </div>
                <button style={{ background: 'white', color: '#4e73df', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.35rem', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fas fa-download"></i> Download Template
                </button>
            </div>

            <div className="upload-section" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div className="upload-card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', marginBottom: '1rem' }}>Upload Student Data File</h3>
                    <p style={{ fontSize: '0.9rem', color: '#858796', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                        Download the template to ensure your file has the correct columns. The default password for all new users will be 'Password@123'. Students will be prompted to change it on first login.
                    </p>

                    <div className="file-input-group" style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontWeight: 600, color: '#4a4b65', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Select File (.xlsx, .csv, .ods, .tsv)</label>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="file-upload" className="custom-file-upload" style={{
                                border: '1px solid #d1d3e2',
                                display: 'inline-block',
                                padding: '0.75rem 1rem',
                                cursor: 'pointer',
                                background: '#eaecf4',
                                borderRadius: '0.35rem',
                                color: '#4a4b65',
                                width: '100%',
                                maxWidth: '400px'
                            }}>
                                Choose File No file chosen
                            </label>
                            <input id="file-upload" type="file" style={{ display: 'none' }} />
                        </div>
                    </div>

                    <button className="btn btn-primary" style={{ background: '#6c757d', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.35rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                        <i className="fas fa-cloud-upload-alt"></i> Upload and Create Accounts
                    </button>
                </div>

                <div className="guide-card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', border: '1px solid #f6c23e', marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: '#4a4b65', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="fas fa-table" style={{ color: '#4a4b65' }}></i> Template Column Guide
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#858796', marginBottom: '1.5rem' }}>Your spreadsheet must have the following columns. The order does not matter.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', fontSize: '0.9rem', color: '#4a4b65', fontWeight: 600 }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}>- Student Name</li>
                            <li style={{ marginBottom: '0.5rem' }}>- University Roll No.</li>
                            <li style={{ marginBottom: '0.5rem' }}>- Department</li>
                            <li style={{ marginBottom: '0.5rem' }}>- Current Academic Year</li>
                            <li style={{ marginBottom: '0.5rem' }}>- WhatsApp No.</li>
                        </ul>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}>- Student ID</li>
                            <li style={{ marginBottom: '0.5rem' }}>- University Registration No.</li>
                            <li style={{ marginBottom: '0.5rem' }}>- Admission Year</li>
                            <li style={{ marginBottom: '0.5rem' }}>- Email</li>
                            <li style={{ marginBottom: '0.5rem' }}>- Phone No.</li>
                        </ul>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#858796', marginTop: '1.5rem', padding: '1rem', background: '#f8f9fc', borderRadius: '0.35rem' }}>
                        Note: 'Department' value must be a valid key from the system (e.g., 'CSE', 'IT', 'ECE'). Any 'Timestamp' and 'Email Address' columns from Google Forms will be ignored.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default BulkCreateStudents;
