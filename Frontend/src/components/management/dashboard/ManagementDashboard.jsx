import React from 'react';
import StatCard from './StatCard';
import ActionCard from './ActionCard';

const ManagementDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="page-header">
                <p className="page-subtitle">System overview and management tools for Management.</p>
            </div>

            <div className="stats-section">
                <div className="stats-grid">
                    <StatCard
                        iconClass="management"
                        icon="fas fa-users"
                        title="Management Users"
                        value="3"
                        linkText="View details"
                        linkTo="/management/monitoring/management-monitor"
                    />
                    <StatCard
                        iconClass="teachers"
                        icon="fas fa-briefcase"
                        title="Total Teachers"
                        value="6"
                        linkText="View details"
                        linkTo="/management/monitoring/teacher-monitor"
                    />
                    <StatCard
                        iconClass="admins"
                        icon="fas fa-shield-alt"
                        title="Total Admins"
                        value="5"
                        linkText="View details"
                        linkTo="/management/monitoring/admin-monitor"
                    />
                    <StatCard
                        iconClass="batches"
                        icon="fas fa-folder"
                        title="Total Batches"
                        value="0"
                        linkText="View details"
                        linkTo="/management/monitoring/batch-monitor"
                    />
                    <StatCard
                        iconClass="students"
                        icon="fas fa-graduation-cap"
                        title="Total Students"
                        value="141"
                        description="System-wide count"
                    />
                </div>
            </div>

            <div className="actions-section">
                <div className="section-header">
                    <h2>Management Actions</h2>
                    <p>Key management functions for the Management panel.</p>
                </div>

                <div className="actions-grid">
                    <ActionCard
                        icon="fas fa-user-check"
                        title="Approve User Registrations"
                        description="Review and approve new Admin/Teacher accounts."
                        linkTo="/management/user-approval"
                        linkText="Go to Approval"
                    />
                    <ActionCard
                        icon="fas fa-user-plus"
                        title="Add New Host"
                        description="Create accounts for new management users."
                        linkTo="/management/add-host"
                        linkText="Add Host"
                    />
                    <ActionCard
                        icon="fas fa-chart-bar"
                        title="Monitor Activity"
                        description="View recent system activity logs and graphs."
                        linkTo="/management/monitoring/activity"
                        linkText="View Activity"
                    />
                    <ActionCard
                        icon="fas fa-bullhorn"
                        title="Send Announcements"
                        description="Broadcast messages to all users."
                        linkTo="/management/announcements"
                        linkText="Send Message"
                    />
                    <ActionCard
                        icon="fas fa-desktop"
                        title="Monitor Website Status"
                        description="View overall website health and status."
                        linkTo="/management/monitoring/website-status"
                        linkText="Check Status"
                    />
                    <ActionCard
                        icon="fas fa-box"
                        title="Monitor Batches"
                        description="Oversee all program batches."
                        linkTo="/management/monitoring/batch-monitor"
                        linkText="Monitor Batches"
                    />
                    <ActionCard
                        icon="fas fa-calendar-alt"
                        title="Monitor Timetables"
                        description="View all batch timetables."
                        linkTo="/management/monitoring/timetable-monitor"
                        linkText="View Timetables"
                    />
                </div>
            </div>

            <div className="announcements-section">
                <div className="section-header">
                    <h2>Announcements Management</h2>
                    <p>Actions related to system-wide announcements.</p>
                </div>

                <div className="announcements-actions">
                    <button className="clear-announcements-btn">
                        <i className="fas fa-trash"></i>
                        Clear All Announcements
                    </button>
                    <p className="warning-text">This will permanently delete all sent announcements from the database. This action cannot be undone.</p>
                </div>
            </div>
        </div>
    );
};

export default ManagementDashboard;
