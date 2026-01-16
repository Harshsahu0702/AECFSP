import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Sidebar = () => {
    const location = useLocation();
    const [isMonitoringOpen, setIsMonitoringOpen] = useState(false);

    const toggleMonitoring = () => {
        setIsMonitoringOpen(!isMonitoringOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <img src={logo} alt="AEC FSP Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="brand-info">
                    <h2>AEC FSP</h2>
                    <p>Management Panel</p>
                </div>
            </div>

            <nav className="sidebar-nav">
                <ul className="nav-list">
                    <li className={`nav-item ${isActive('/management') ? 'active' : ''}`}>
                        <Link to="/management" className="nav-link">
                            <i className="fas fa-tachometer-alt"></i>
                            <span>Management Dashboard</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/management/profile') ? 'active' : ''}`}>
                        <Link to="/management/profile" className="nav-link">
                            <i className="fas fa-user"></i>
                            <span>My Profile</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/management/user-approval') ? 'active' : ''}`}>
                        <Link to="/management/user-approval" className="nav-link">
                            <i className="fas fa-user-check"></i>
                            <span>User Approval</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/management/add-host') ? 'active' : ''}`}>
                        <Link to="/management/add-host" className="nav-link">
                            <i className="fas fa-user-plus"></i>
                            <span>Add New Host</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${isActive('/management/announcements') ? 'active' : ''}`}>
                        <Link to="/management/announcements" className="nav-link">
                            <i className="fas fa-bullhorn"></i>
                            <span>Send Announcements</span>
                        </Link>
                    </li>
                    <li className={`nav-item expandable ${isMonitoringOpen ? 'active' : ''}`}>
                        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); toggleMonitoring(); }}>
                            <i className="fas fa-desktop"></i>
                            <span>Monitoring</span>
                            <i className={`fas fa-chevron-down expand-arrow ${isMonitoringOpen ? 'rotate-180' : ''}`}></i>
                        </a>
                        <ul className={`expandable-menu ${isMonitoringOpen ? 'open' : ''}`} style={isMonitoringOpen ? { maxHeight: '400px', opacity: 1 } : {}}>
                            <li><Link to="/management/monitoring/activity"><i className="fas fa-chart-bar"></i> Activity Monitor</Link></li>
                            <li><Link to="/management/monitoring/website-status"><i className="fas fa-globe"></i> Website Status</Link></li>
                            <li><Link to="/management/monitoring/batch-monitor"><i className="fas fa-box"></i> Batch Monitor</Link></li>
                            <li><Link to="/management/monitoring/timetable-monitor"><i className="fas fa-calendar-alt"></i> Timetable Monitor</Link></li>
                            <li><Link to="/management/monitoring/teacher-monitor"><i className="fas fa-chalkboard-teacher"></i> Teacher Monitor</Link></li>
                            <li><Link to="/management/monitoring/admin-monitor"><i className="fas fa-shield-alt"></i> Admin Monitor</Link></li>
                            <li><Link to="/management/monitoring/management-monitor"><i className="fas fa-cogs"></i> Management Monitor</Link></li>
                        </ul>
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
