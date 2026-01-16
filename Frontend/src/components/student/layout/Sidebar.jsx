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
                    <p>Student Panel</p>
                </div>
            </div>

            <nav className="sidebar-nav">
                <ul className="nav-list">
                    <li className={`nav-item ${isActive('/student') ? 'active' : ''}`}>
                        <Link to="/student" className="nav-link">
                            <i className="fas fa-home"></i>
                            <span>My Dashboard</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/student/profile') ? 'active' : ''}`}>
                        <Link to="/student/profile" className="nav-link">
                            <i className="fas fa-user-graduate"></i>
                            <span>My Profile</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/student/attendance') ? 'active' : ''}`}>
                        <Link to="/student/attendance" className="nav-link">
                            <i className="fas fa-calendar-check"></i>
                            <span>Attendance Calendar</span>
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
