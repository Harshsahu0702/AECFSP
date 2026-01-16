import React from 'react';
import { Link } from 'react-router-dom';

const ActionCard = ({ icon, title, description, linkTo, linkText }) => {
    return (
        <div className="action-card">
            <div className="action-icon">
                <i className={icon}></i>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={linkTo} className="action-btn">{linkText}</Link>
        </div>
    );
};

export default ActionCard;
