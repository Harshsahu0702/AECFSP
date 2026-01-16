import React from 'react';

const Timetable = () => {
    return (
        <div className="dashboard-content">
            <div className="timetable-container" style={{ background: 'white', borderRadius: '4px', boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1)', margin: '1.25rem 0' }}>
                <div className="timetable-header" style={{ padding: '1.5rem 1.25rem', borderBottom: '1px solid #e3e6f0', backgroundColor: '#f8f9fc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600, color: '#4a4b65' }}>Schedule Timetable Sessions</h1>
                </div>

                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '2rem', color: '#6c757d', fontSize: '1.1rem' }}>
                        Overview of scheduled sessions for your batches
                    </p>

                    <div style={{ backgroundColor: '#f8f9fc', borderRadius: '0.35rem', padding: '2rem', margin: '0 auto', maxWidth: '600px' }}>
                        <i className="fas fa-calendar-times" style={{ fontSize: '3rem', color: '#dddfeb', marginBottom: '1rem' }}></i>
                        <h3 style={{ color: '#5a5c69', marginBottom: '1rem' }}>No Timetable Sessions Found</h3>
                        <p style={{ color: '#858796', marginBottom: 0 }}>
                            No timetable sessions found for your assigned batches. Batches must be configured with days and times to appear here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timetable;
