import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader'; // We will create a student specific header reusing style
import '../../management/Management.css'; // Use Management styles for consistency

const StudentLayout = () => {
    return (
        <div className="management-body" style={{ minHeight: '100vh', background: '#f5f8fa' }}>
            <TopHeader />
            <Sidebar />
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
};

export default StudentLayout;
