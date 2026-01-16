import React, { useState } from 'react';

const PromoteStudents = () => {
    const [selectedStudents, setSelectedStudents] = useState([]);

    const toggleStudent = (id) => {
        if (selectedStudents.includes(id)) {
            setSelectedStudents(selectedStudents.filter(sid => sid !== id));
        } else {
            setSelectedStudents([...selectedStudents, id]);
        }
    };

    return (
        <div className="dashboard-content">
            <div className="dashboard-card" style={{ background: '#fff', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)', padding: '1.5rem', marginBottom: '2rem' }}>
                <div className="page-header" style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e3e6f0' }}>
                    <h1 className="page-title" style={{ color: '#4a4b65', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Filter Students</h1>
                    <p className="page-subtitle" style={{ color: '#6e707e', fontSize: '0.9rem', margin: 0 }}>Use the filters to narrow down the list of students. You can only promote students from one academic year at a time.</p>
                </div>

                <div className="filters-container" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
                    <div className="filter-group" style={{ flex: 1, minWidth: '200px' }}>
                        <label htmlFor="department" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#4a4b65' }}>Department</label>
                        <select id="department" className="form-select" style={{ padding: '0.5rem 1rem', border: '1px solid #d1d3e2', borderRadius: '0.35rem', fontSize: '0.9rem', width: '100%', height: 'auto', backgroundColor: '#fff' }}>
                            <option value="">All Departments</option>
                            <option value="cse">Computer Science</option>
                            <option value="ece">Electronics & Communication</option>
                            <option value="me">Mechanical</option>
                            <option value="ce">Civil</option>
                            <option value="ee">Electrical</option>
                        </select>
                    </div>

                    <div className="filter-group" style={{ flex: 1, minWidth: '200px' }}>
                        <label htmlFor="academicYear" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#4a4b65' }}>Academic Year</label>
                        <select id="academicYear" className="form-select" style={{ padding: '0.5rem 1rem', border: '1px solid #d1d3e2', borderRadius: '0.35rem', fontSize: '0.9rem', width: '100%', height: 'auto', backgroundColor: '#fff' }}>
                            <option value="">All Years</option>
                            <option value="2023">2023-24</option>
                            <option value="2022">2022-23</option>
                            <option value="2021">2021-22</option>
                        </select>
                    </div>

                    <div className="filter-group" style={{ flex: '0 0 auto', marginLeft: 'auto' }}>
                        <label>&nbsp;</label>
                        <button className="btn btn-primary" style={{ background: '#1cc88a', borderColor: '#1cc88a', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.35rem', fontSize: '0.9rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #1cc88a', fontWeight: 500 }}>
                            <i className="fas fa-arrow-up"></i>
                            Promote Selected
                        </button>
                    </div>
                </div>

                <div className="table-responsive" style={{ overflowX: 'auto', borderRadius: '0.35rem', border: '1px solid #e3e6f0' }}>
                    <table className="students-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '24px', padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fc', color: '#4a4b65', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', borderBottom: '1px solid #e3e6f0' }}></th>
                                <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fc', color: '#4a4b65', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', borderBottom: '1px solid #e3e6f0' }}>Student Name</th>
                                <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fc', color: '#4a4b65', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', borderBottom: '1px solid #e3e6f0' }}>Student ID</th>
                                <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fc', color: '#4a4b65', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', borderBottom: '1px solid #e3e6f0' }}>Department</th>
                                <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fc', color: '#4a4b65', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', borderBottom: '1px solid #e3e6f0' }}>Current Year</th>
                                <th style={{ padding: '1rem', textAlign: 'left', backgroundColor: '#f8f9fc', color: '#4a4b65', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', borderBottom: '1px solid #e3e6f0' }}>Next Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                onClick={() => toggleStudent(1)}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: selectedStudents.includes(1) ? '#f0f7ff' : 'transparent',
                                    borderBottom: '1px solid #e3e6f0'
                                }}
                            >
                                <td className="checkbox-container" style={{ padding: '1rem', width: '24px' }}>
                                    <div className="checkbox" style={{
                                        width: '18px', height: '18px', border: selectedStudents.includes(1) ? '2px solid #4e73df' : '2px solid #d1d3e2', borderRadius: '0.25rem',
                                        backgroundColor: selectedStudents.includes(1) ? '#4e73df' : 'transparent',
                                        position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {selectedStudents.includes(1) && <span style={{ color: 'white', fontSize: '0.8em' }}>✓</span>}
                                    </div>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <div className="student-name" style={{ fontWeight: 600, color: '#4a4b65', marginBottom: '0.25rem' }}>John Smith</div>
                                    <div className="student-id" style={{ fontSize: '0.8rem', color: '#6e707e' }}>john.smith@example.com</div>
                                </td>
                                <td style={{ padding: '1rem' }}>STU001</td>
                                <td style={{ padding: '1rem' }}>Computer Science</td>
                                <td style={{ padding: '1rem' }}><span className="badge" style={{ display: 'inline-block', padding: '0.35em 0.65em', fontSize: '0.75em', fontWeight: 600, borderRadius: '0.25rem', backgroundColor: '#e6f3ff', color: '#0d6efd' }}>3rd Year</span></td>
                                <td style={{ padding: '1rem' }}><span className="badge" style={{ display: 'inline-block', padding: '0.35em 0.65em', fontSize: '0.75em', fontWeight: 600, borderRadius: '0.25rem', backgroundColor: '#e6f7ed', color: '#10b759' }}>4th Year</span></td>
                            </tr>
                            <tr
                                onClick={() => toggleStudent(2)}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: selectedStudents.includes(2) ? '#f0f7ff' : 'transparent',
                                    borderBottom: '1px solid #e3e6f0'
                                }}
                            >
                                <td className="checkbox-container" style={{ padding: '1rem', width: '24px' }}>
                                    <div className="checkbox" style={{
                                        width: '18px', height: '18px', border: selectedStudents.includes(2) ? '2px solid #4e73df' : '2px solid #d1d3e2', borderRadius: '0.25rem',
                                        backgroundColor: selectedStudents.includes(2) ? '#4e73df' : 'transparent',
                                        position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {selectedStudents.includes(2) && <span style={{ color: 'white', fontSize: '0.8em' }}>✓</span>}
                                    </div>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <div className="student-name" style={{ fontWeight: 600, color: '#4a4b65', marginBottom: '0.25rem' }}>Sarah Johnson</div>
                                    <div className="student-id" style={{ fontSize: '0.8rem', color: '#6e707e' }}>sarah.j@example.com</div>
                                </td>
                                <td style={{ padding: '1rem' }}>STU002</td>
                                <td style={{ padding: '1rem' }}>Electronics</td>
                                <td style={{ padding: '1rem' }}><span className="badge" style={{ display: 'inline-block', padding: '0.35em 0.65em', fontSize: '0.75em', fontWeight: 600, borderRadius: '0.25rem', backgroundColor: '#e6f3ff', color: '#0d6efd' }}>2nd Year</span></td>
                                <td style={{ padding: '1rem' }}><span className="badge" style={{ display: 'inline-block', padding: '0.35em 0.65em', fontSize: '0.75em', fontWeight: 600, borderRadius: '0.25rem', backgroundColor: '#e6f7ed', color: '#10b759' }}>3rd Year</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PromoteStudents;
