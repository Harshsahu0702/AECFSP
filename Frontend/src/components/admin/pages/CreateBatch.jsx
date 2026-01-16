import React from 'react';

const CreateBatch = () => {
    return (
        <div className="dashboard-content">
            <div className="page-header" style={{ marginBottom: '2rem' }}>
                <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: '#4a4b65', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-plus-circle" style={{ color: '#4e73df', opacity: 0.7 }}></i>
                    Create New Batch
                </h1>
                <p className="page-subtitle" style={{ color: '#858796', marginLeft: '40px' }}>Fill out the details below to create a new batch in a single step.</p>
            </div>

            <div className="create-batch-container" style={{ maxWidth: '800px', margin: '0 0 2rem' }}>
                <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.15rem 1.75rem 0 rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#4a4b65', margin: '0 0 0.5rem' }}>New Batch Details</h3>
                    <p style={{ fontSize: '0.9rem', color: '#858796', margin: '0 0 2rem' }}>Configure the new batch including its topic, schedule, and assigned teachers.</p>

                    <form>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.85rem' }}>Batch Name</label>
                                <input type="text" className="form-control" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#eaecf4' }} />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.85rem' }}>Topic / Module Name</label>
                                <input type="text" className="form-control" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe' }} />
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.85rem' }}>Assign Teachers</label>
                            <p style={{ fontSize: '0.8rem', color: '#858796', margin: '0 0 1rem' }}>Select one or more teachers for this batch.</p>

                            <div className="teachers-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', border: '1px solid #d1d3e2', padding: '1.5rem', borderRadius: '0.35rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65', cursor: 'pointer' }}>
                                    <input type="checkbox" /> Rajwant (Mechanical Engineering (ME))
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65', cursor: 'pointer' }}>
                                    <input type="checkbox" /> Rajeev Singh (Computer Science & Engineering (AI & ML))
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65', cursor: 'pointer' }}>
                                    <input type="checkbox" /> Amit Rai (Information Technology (IT))
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65', cursor: 'pointer' }}>
                                    <input type="checkbox" /> Dr. Evelyn Reed (Computer Science & Engineering (CSE))
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65', cursor: 'pointer' }}>
                                    <input type="checkbox" /> Mr. Samuel Chen (Information Technology (IT))
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65', cursor: 'pointer' }}>
                                    <input type="checkbox" /> joseph deniel (Information Technology (IT))
                                </label>
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '2rem', borderTop: '1px solid #e3e6f0', paddingTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.1rem', color: '#4a4b65', margin: '0 0 0.5rem' }}>Student Filtering</h3>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.85rem' }}>Filter by Departments</label>
                                <p style={{ fontSize: '0.8rem', color: '#858796', margin: '0 0 0.5rem' }}>Select one or more departments to see available students.</p>
                                <div className="departments-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', border: '1px solid #d1d3e2', padding: '1rem', borderRadius: '0.35rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65' }}><input type="checkbox" /> Computer Science & Engineering (CSE)</label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65' }}><input type="checkbox" /> Information Technology (IT)</label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65' }}><input type="checkbox" /> Electronics & Communication Engineering (ECE)</label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65' }}><input type="checkbox" /> Electrical Engineering (EE)</label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65' }}><input type="checkbox" /> Mechanical Engineering (ME)</label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65' }}><input type="checkbox" /> Civil Engineering (CE)</label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65' }}><input type="checkbox" /> Bachelor of Computer Application (BCA)</label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4a4b65' }}><input type="checkbox" /> Master of Computer Application (MCA)</label>
                                </div>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.85rem' }}>Filter by Academic Year</label>
                                <p style={{ fontSize: '0.8rem', color: '#858796', margin: '0 0 0.5rem' }}>Select a year to see available students.</p>
                                <select className="form-control" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe' }}>
                                    <option>All Years</option>
                                    <option>1st Year</option>
                                    <option>2nd Year</option>
                                    <option>3rd Year</option>
                                    <option>4th Year</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '2rem', borderTop: '1px solid #e3e6f0', paddingTop: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.85rem' }}>Assign Students</label>
                            <p style={{ fontSize: '0.8rem', color: '#858796', margin: '0 0 1rem' }}>Manually assign students to this batch or use the shareable link. The list is based on the filters above.</p>
                            <button type="button" style={{ width: '100%', padding: '1rem', border: '1px solid #d1d3e2', borderRadius: '0.5rem', background: '#e8f0fe', color: '#4a4b65', fontSize: '0.9rem', fontWeight: 600, textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <i className="fas fa-user-plus"></i> Assign Students (0 selected)
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem', borderTop: '1px solid #e3e6f0', paddingTop: '2rem' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.85rem' }}>Start Date</label>
                                <div style={{ position: 'relative' }}>
                                    <input type="date" className="form-control" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe' }} defaultValue="2025-10-09" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.85rem' }}>End Date</label>
                                <div style={{ position: 'relative' }}>
                                    <input type="date" className="form-control" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe' }} defaultValue="2025-10-09" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '2rem', border: '1px solid #d1d3e2', borderRadius: '0.5rem', padding: '1.5rem' }}>
                            <h4 style={{ fontSize: '1.1rem', color: '#4a4b65', margin: '0 0 1.5rem' }}>Batch Timings</h4>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <h5 style={{ fontSize: '0.9rem', color: '#4a4b65', margin: '0 0 0.5rem' }}>First Half</h5>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#6e707e', marginBottom: '0.3rem' }}>Start Time</label>
                                        <input type="time" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#6e707e', marginBottom: '0.3rem' }}>End Time</label>
                                        <input type="time" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe' }} />
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <h5 style={{ fontSize: '0.9rem', color: '#4a4b65', margin: '0 0 0.5rem' }}>Second Half (Optional)</h5>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#6e707e', marginBottom: '0.3rem' }}>Start Time</label>
                                        <input type="time" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', color: '#6e707e', marginBottom: '0.3rem' }}>End Time</label>
                                        <input type="time" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#4a4b65', fontSize: '0.85rem' }}>Room Number (Optional)</label>
                            <input type="text" placeholder="E.g., R101" className="form-control" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.35rem', border: '1px solid #d1d3e2', background: '#e8f0fe' }} />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', borderRadius: '0.35rem', background: '#19355e', color: 'white', border: 'none', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}>
                            Create Batch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateBatch;
