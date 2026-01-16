import React, { useState } from 'react';

const ManageAttendance = () => {
    const [showModal, setShowModal] = useState(false);

    // Sample student data for the modal
    const [students, setStudents] = useState([
        { id: 1, name: 'John Smith', roll: 'STU001', status: 'present' },
        { id: 2, name: 'Sarah Johnson', roll: 'STU002', status: 'absent' },
        { id: 3, name: 'Michael Brown', roll: 'STU003', status: 'late' },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setStudents(students.map(student =>
            student.id === id ? { ...student, status: newStatus } : student
        ));
    };

    return (
        <div className="attendance-container" style={{ background: 'white', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1)', overflow: 'hidden' }}>
            <div className="attendance-header" style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e3e6f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.25rem', color: '#4a4b65', margin: 0 }}>Mark Attendance</h2>
                <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                    <i className="fas fa-plus"></i> Add New Attendance
                </button>
            </div>

            <div className="attendance-filters" style={{ padding: '1rem 1.5rem', background: '#f8f9fc', borderBottom: '1px solid #e3e6f0', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', minWidth: '200px', flex: 1 }}>
                    <label htmlFor="batch" style={{ fontSize: '0.8rem', color: '#6e707e', marginBottom: '0.25rem' }}>Batch</label>
                    <select id="batch" className="form-control" style={{ padding: '0.5rem 1rem', border: '1px solid #d1d3e2', borderRadius: '0.35rem', fontSize: '0.9rem' }}>
                        <option>Select Batch</option>
                        <option>Batch A (2023-24)</option>
                        <option>Batch B (2023-24)</option>
                        <option>Batch C (2023-24)</option>
                    </select>
                </div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', minWidth: '200px', flex: 1 }}>
                    <label htmlFor="date" style={{ fontSize: '0.8rem', color: '#6e707e', marginBottom: '0.25rem' }}>Date</label>
                    <input type="date" id="date" className="form-control" defaultValue={new Date().toISOString().split('T')[0]} style={{ padding: '0.5rem 1rem', border: '1px solid #d1d3e2', borderRadius: '0.35rem', fontSize: '0.9rem' }} />
                </div>
            </div>

            <div className="table-responsive" style={{ margin: '1rem' }}>
                <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '0.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <i className="fas fa-calendar-check" style={{ fontSize: '2.5rem', color: '#6c757d' }}></i>
                        <h3 style={{ color: '#4a4b65', margin: 0 }}>Mark Attendance</h3>
                        <p style={{ color: '#6c757d', margin: 0, maxWidth: '400px', textAlign: 'center' }}>
                            Please select one of your assigned batches and a date to mark attendance.
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal show" style={{ display: 'block', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000, overflowY: 'auto' }}>
                    <div className="modal-dialog" style={{ maxWidth: '600px', margin: '1.75rem auto' }}>
                        <div className="modal-content" style={{ backgroundColor: '#fff', borderRadius: '0.5rem', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)' }}>
                            <div className="modal-header" style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e3e6f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h5 className="modal-title" style={{ margin: 0, fontSize: '1.25rem', color: '#4a4b65' }}>Add New Attendance</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', fontWeight: 'bold', color: '#6e707e', cursor: 'pointer', padding: '0.5rem', lineHeight: 1 }}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" style={{ padding: '1.5rem' }}>
                                <form>
                                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Select Batch</label>
                                        <select className="form-control" required style={{ width: '100%', padding: '0.375rem 0.75rem', border: '1px solid #ced4da', borderRadius: '0.25rem' }}>
                                            <option value="">Select Batch</option>
                                            <option value="batch1">Batch A (2023-24)</option>
                                            <option value="batch2">Batch B (2023-24)</option>
                                            <option value="batch3">Batch C (2023-24)</option>
                                        </select>
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Select Subject</label>
                                        <select className="form-control" required style={{ width: '100%', padding: '0.375rem 0.75rem', border: '1px solid #ced4da', borderRadius: '0.25rem' }}>
                                            <option value="">Select Subject</option>
                                            <option value="math">Mathematics</option>
                                            <option value="physics">Physics</option>
                                            <option value="chemistry">Chemistry</option>
                                        </select>
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Date</label>
                                        <input type="date" className="form-control" required defaultValue={new Date().toISOString().split('T')[0]} style={{ width: '100%', padding: '0.375rem 0.75rem', border: '1px solid #ced4da', borderRadius: '0.25rem' }} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Students</label>
                                        <div className="students-list" style={{ border: '1px solid #e3e6f0', borderRadius: '0.35rem', maxHeight: '300px', overflowY: 'auto' }}>
                                            {students.map(student => (
                                                <div key={student.id} className="student-item" style={{ padding: '1rem', borderBottom: '1px solid #e3e6f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>{student.id}. {student.name} ({student.roll})</span>
                                                    <div className="btn-group" style={{ display: 'flex', gap: '0.5rem' }}>
                                                        <button
                                                            type="button"
                                                            className={`btn-status present ${student.status === 'present' ? 'active' : ''}`}
                                                            onClick={() => handleStatusChange(student.id, 'present')}
                                                            style={{
                                                                padding: '0.25rem 0.75rem', border: '1px solid #d1d3e2', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
                                                                background: student.status === 'present' ? '#d4edda' : '#fff',
                                                                color: student.status === 'present' ? '#155724' : '#155724',
                                                                borderColor: '#c3e6cb'
                                                            }}
                                                        >Present</button>
                                                        <button
                                                            type="button"
                                                            className={`btn-status absent ${student.status === 'absent' ? 'active' : ''}`}
                                                            onClick={() => handleStatusChange(student.id, 'absent')}
                                                            style={{
                                                                padding: '0.25rem 0.75rem', border: '1px solid #d1d3e2', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
                                                                background: student.status === 'absent' ? '#f8d7da' : '#fff',
                                                                color: student.status === 'absent' ? '#721c24' : '#721c24',
                                                                borderColor: '#f5c6cb'
                                                            }}
                                                        >Absent</button>
                                                        <button
                                                            type="button"
                                                            className={`btn-status late ${student.status === 'late' ? 'active' : ''}`}
                                                            onClick={() => handleStatusChange(student.id, 'late')}
                                                            style={{
                                                                padding: '0.25rem 0.75rem', border: '1px solid #d1d3e2', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
                                                                background: student.status === 'late' ? '#fff3cd' : '#fff',
                                                                color: student.status === 'late' ? '#856404' : '#856404',
                                                                borderColor: '#ffeeba'
                                                            }}
                                                        >Late</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ padding: '1rem 1.5rem', borderTop: '1px solid #e3e6f0', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)} style={{ background: 'white', border: '1px solid #e3e6f0', color: '#6e707e', padding: '0.5rem 1rem', borderRadius: '0.35rem', cursor: 'pointer' }}>Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={() => { alert('Attendance Saved!'); setShowModal(false); }} style={{ background: '#4e73df', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.35rem', cursor: 'pointer' }}>Save Attendance</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageAttendance;
