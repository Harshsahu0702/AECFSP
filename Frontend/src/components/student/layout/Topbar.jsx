import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Topbar = ({ title, user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="topbar">
            <h1 className="page__title">{title}</h1>
            <div className="topbar__right">
                <button className="btn btn--ghost btn--icon" aria-label="Notifications">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18H9c-1.657 0-3-1.343-3-3v-3.5A6.5 6.5 0 0 1 12 5a6.5 6.5 0 0 1 6 6.5V15c0 1.657-1.343 3-3 3Z" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M7 18h10l2 2H5l2-2Z" fill="currentColor" opacity=".15" />
                        <path d="M10 20a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                </button>
                <div style={{ position: 'relative' }}>
                    <button
                        className="avatar avatar--btn"
                        aria-haspopup="true"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {user ? user.initials : 'M'}
                    </button>
                    <div className={`menu ${isMenuOpen ? 'is-open' : ''}`}>
                        <div className="menu__head">
                            <div className="name">{user ? user.name : 'Student'}</div>
                            <div className="email">{user ? 'student@aec.edu.in' : 'student@aec.edu.in'}</div>
                        </div>
                        <Link className="menu__item" to="/student/profile">Profile</Link>
                        <Link className="menu__item" to="#">Settings</Link>
                        <div className="menu__sep"></div>
                        <Link className="menu__item menu__item--danger" to="/">Logout</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
