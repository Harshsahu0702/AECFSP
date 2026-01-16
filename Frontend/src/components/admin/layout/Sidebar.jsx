import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.png'; // Make sure this path is correct

const Sidebar = () => {
    const location = useLocation();
    const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);
    const [isBatchManagementOpen, setIsBatchManagementOpen] = useState(false);

    const toggleUserManagement = () => setIsUserManagementOpen(!isUserManagementOpen);
    const toggleBatchManagement = () => setIsBatchManagementOpen(!isBatchManagementOpen);

    const isActive = (path) => location.pathname === path;

    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <img src={logo} alt="AEC FSP Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="brand-info">
                    <h2>AEC FSP</h2>
                    <p>Admin Panel</p>
                </div>
            </div>

            <nav className="sidebar-nav">
                <ul className="nav-list">
                    <li className={`nav-item ${isActive('/admin/dashboard') ? 'active' : ''}`}>
                        <Link to="/admin/dashboard" className="nav-link">
                            <i className="fas fa-tachometer-alt"></i>
                            <span>Admin Dashboard</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/admin/profile') ? 'active' : ''}`}>
                        <Link to="/admin/profile" className="nav-link">
                            <i className="fas fa-user"></i>
                            <span>My Profile</span>
                        </Link>
                    </li>

                    {/* User Management Dropdown */}
                    <li className="nav-item">
                        <div className="nav-link" onClick={toggleUserManagement} style={{ cursor: 'pointer', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fas fa-users-cog"></i>
                                <span>User Management</span>
                            </div>
                            <i className={`fas fa-chevron-down ${isUserManagementOpen ? 'rotate-180' : ''}`} style={{ transition: 'transform 0.3s' }}></i>
                        </div>
                        {isUserManagementOpen && (
                            <ul className="submenu" style={{ paddingLeft: '20px', listStyle: 'none' }}>
                                <li className={`nav-item ${isActive('/admin/users/register') ? 'active' : ''}`}>
                                    <Link to="/admin/users/register" className="nav-link">
                                        <i className="fas fa-user-plus"></i>
                                        <span>Register User</span>
                                    </Link>
                                </li>
                                <li className={`nav-item ${isActive('/admin/users/bulk-create') ? 'active' : ''}`}>
                                    <Link to="/admin/users/bulk-create" className="nav-link">
                                        <i className="fas fa-file-upload"></i>
                                        <span>Bulk Create Students</span>
                                    </Link>
                                </li>
                                <li className={`nav-item ${isActive('/admin/users/teachers') ? 'active' : ''}`}>
                                    <Link to="/admin/users/teachers" className="nav-link">
                                        <i className="fas fa-chalkboard-teacher"></i>
                                        <span>Manage Teachers</span>
                                    </Link>
                                </li>
                                <li className={`nav-item ${isActive('/admin/users/admins') ? 'active' : ''}`}>
                                    <Link to="/admin/users/admins" className="nav-link">
                                        <i className="fas fa-user-shield"></i>
                                        <span>Manage Admins</span>
                                    </Link>
                                </li>
                                <li className={`nav-item ${isActive('/admin/users/students') ? 'active' : ''}`}>
                                    <Link to="/admin/users/students" className="nav-link">
                                        <i className="fas fa-user-graduate"></i>
                                        <span>View Students</span>
                                    </Link>
                                </li>
                                <li className={`nav-item ${isActive('/admin/users/passed-out') ? 'active' : ''}`}>
                                    <Link to="/admin/users/passed-out" className="nav-link">
                                        <i className="fas fa-user-times"></i>
                                        <span>Passed Out Students</span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Batch Management Dropdown */}
                    <li className="nav-item">
                        <div className="nav-link" onClick={toggleBatchManagement} style={{ cursor: 'pointer', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fas fa-layer-group"></i>
                                <span>Batch Management</span>
                            </div>
                            <i className={`fas fa-chevron-down ${isBatchManagementOpen ? 'rotate-180' : ''}`} style={{ transition: 'transform 0.3s' }}></i>
                        </div>
                        {isBatchManagementOpen && (
                            <ul className="submenu" style={{ paddingLeft: '20px', listStyle: 'none' }}>
                                <li className={`nav-item ${isActive('/admin/batches/overview') ? 'active' : ''}`}>
                                    <Link to="/admin/batches/overview" className="nav-link">
                                        <i className="fas fa-list-alt"></i>
                                        <span>Batch Overview</span>
                                    </Link>
                                </li>
                                <li className={`nav-item ${isActive('/admin/batches/create') ? 'active' : ''}`}>
                                    <Link to="/admin/batches/create" className="nav-link">
                                        <i className="fas fa-plus-circle"></i>
                                        <span>Create Batch</span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className={`nav-item ${isActive('/admin/academics') ? 'active' : ''}`}>
                        <Link to="/admin/academics" className="nav-link">
                            <i className="fas fa-book"></i>
                            <span>Manage Academics</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/admin/attendance') ? 'active' : ''}`}>
                        <Link to="/admin/attendance" className="nav-link">
                            <i className="fas fa-clipboard-check"></i>
                            <span>View Attendance</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/admin/timetable') ? 'active' : ''}`}>
                        <Link to="/admin/timetable" className="nav-link">
                            <i className="fas fa-calendar-alt"></i>
                            <span>Timetable Overview</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/admin/reports') ? 'active' : ''}`}>
                        <Link to="/admin/reports" className="nav-link">
                            <i className="fas fa-chart-bar"></i>
                            <span>View Reports</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/admin/settings') ? 'active' : ''}`}>
                        <Link to="/admin/settings" className="nav-link">
                            <i className="fas fa-cog"></i>
                            <span>System Settings</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="sidebar-footer">
                <Link to="/" className="logout-link">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
