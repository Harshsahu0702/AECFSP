import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';
import '../Management.css';

const ManagementLayout = () => {
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

export default ManagementLayout;
