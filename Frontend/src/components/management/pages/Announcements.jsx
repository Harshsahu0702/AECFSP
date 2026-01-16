import React from 'react';

const Announcements = () => {
    return (
        <div className="announcements-container">
            <div className="page-header">
                <p className="page-subtitle">Broadcast and manage messages for all users. They will appear as pop-ups on their dashboards.</p>
            </div>

            {/* Compose Announcement */}
            <div className="compose-card">
                <div className="card-header">
                    <h2>Compose Announcement</h2>
                    <p>Write your message below. It will be displayed to users when they visit their dashboard.</p>
                </div>

                <form className="announcement-form" id="announcementForm" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="messageContent">Message Content</label>
                        <textarea id="messageContent" name="messageContent" placeholder="Enter your announcement here... (e.g., System maintenance tonight at 10 PM)" rows="6" required></textarea>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="send-announcement-btn">
                            <i className="fas fa-paper-plane"></i> Send Announcement
                        </button>
                    </div>
                </form>
            </div>

            {/* Sent Announcements */}
            <div className="sent-announcements">
                <div className="section-header">
                    <h2>Sent Announcements</h2>
                    <p>A list of the most recent announcements.</p>
                </div>

                <div className="announcements-list">
                    <div className="empty-state">
                        <i className="fas fa-bullhorn"></i>
                        <h3>No announcements have been sent yet.</h3>
                        <p>Start by composing your first announcement above.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Announcements;
