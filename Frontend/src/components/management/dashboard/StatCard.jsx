import React from 'react';
import { Link } from 'react-router-dom';

const StatCard = ({ iconClass, icon, title, value, linkText, linkTo, description }) => {
    return (
        <div className="stat-card">
            <div className={`stat-icon ${iconClass}`}>
                <i className={icon}></i>
            </div>
            <div className="stat-content">
                <h3>{title}</h3>
                <div className="stat-value">{value}</div>
                {linkText && <Link to={linkTo} className="stat-link">{linkText}</Link>}
                {description && <span className="stat-description">{description}</span>}
            </div>
        </div>
    );
};

export default StatCard;
