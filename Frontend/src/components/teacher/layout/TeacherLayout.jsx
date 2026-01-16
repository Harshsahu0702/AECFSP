import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';
import '../../management/Management.css'; // Reuse Management styles

const TeacherLayout = () => {
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

export default TeacherLayout;
