import React from 'react';

const Timetable = () => {
    return (
        <div className="dashboard-content">
            <div className="page-header" style={{ marginBottom: '2rem' }}>
                <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-calendar-alt" style={{ color: '#4e73df' }}></i>
                    Timetable Overview (Admin)
                </h1>
                <p className="page-subtitle" style={{ color: '#858796', marginLeft: '45px' }}>View all FSP batch timetables across departments, including assigned teachers and batch details.</p>
            </div>

            <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)', minHeight: '300px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', margin: '0 0 0.5rem' }}>All Batch Timetables</h3>
                <p style={{ fontSize: '0.9rem', color: '#858796', margin: '0 0 3rem' }}>Expand each batch to see its detailed schedule, assigned teacher, and department.</p>

                <div style={{ textAlign: 'center', color: '#858796' }}>
                    No batches with schedules found in the system. Configure batches to see them here.
                </div>
            </div>
        </div>
    );
};

export default Timetable;
