import React from 'react';

const PassedOutStudents = () => {
    return (
        <div className="dashboard-content">
            <div className="page-header" style={{ marginBottom: '2rem' }}>
                <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-user-graduate" style={{ color: '#4e73df', opacity: 0.7 }}></i>
                    Passed Out Students
                </h1>
                <p className="page-subtitle" style={{ color: '#858796', marginLeft: '40px' }}>View and manage records of students who have completed the program.</p>
            </div>

            <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: '#f8f9fc', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                    <i className="fas fa-user-clock" style={{ fontSize: '3rem', color: '#d1d3e2' }}></i>
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#5a5c69', marginBottom: '0.5rem' }}>No Records Found</h3>
                <p style={{ fontSize: '0.9rem', color: '#858796', textAlign: 'center', maxWidth: '400px' }}>
                    There are currently no students marked as 'Passed Out' in the system. Once a batch completes the FSP, students will appear here.
                </p>
            </div>
        </div>
    );
};

export default PassedOutStudents;
