import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <img src={logo} alt="AEC FSP Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="brand-info">
                    <h2>AEC FSP</h2>
                    <p>Teacher Panel</p>
                </div>
            </div>

            <nav className="sidebar-nav">
                <ul className="nav-list">
                    <li className={`nav-item ${isActive('/teacher') ? 'active' : ''}`}>
                        <Link to="/teacher" className="nav-link">
                            <i className="fas fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/teacher/profile') ? 'active' : ''}`}>
                        <Link to="/teacher/profile" className="nav-link">
                            <i className="fas fa-user"></i>
                            <span>My Profile</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/teacher/assigned-batches') ? 'active' : ''}`}>
                        <Link to="/teacher/assigned-batches" className="nav-link">
                            <i className="fas fa-users"></i>
                            <span>My Assigned Batches</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/teacher/attendance') ? 'active' : ''}`}>
                        <Link to="/teacher/attendance" className="nav-link">
                            <i className="fas fa-clipboard-check"></i>
                            <span>Manage Attendance</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/teacher/view-attendance') ? 'active' : ''}`}>
                        <Link to="/teacher/view-attendance" className="nav-link">
                            <i className="fas fa-eye"></i>
                            <span>View Attendance</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/teacher/promote-students') ? 'active' : ''}`}>
                        <Link to="/teacher/promote-students" className="nav-link">
                            <i className="fas fa-graduation-cap"></i>
                            <span>Promote Students</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/teacher/timetable') ? 'active' : ''}`}>
                        <Link to="/teacher/timetable" className="nav-link">
                            <i className="fas fa-calendar-alt"></i>
                            <span>View Timetables</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/teacher/reports') ? 'active' : ''}`}>
                        <Link to="/teacher/reports" className="nav-link">
                            <i className="fas fa-chart-bar"></i>
                            <span>Reports</span>
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
