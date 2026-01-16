
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './components/landing.jsx'
import Developers from './components/developers.jsx'
import ManagementLayout from './components/management/layout/ManagementLayout'
import ManagementDashboard from './components/management/dashboard/ManagementDashboard'
import Profile from './components/management/pages/Profile'
import UserApproval from './components/management/pages/UserApproval'
import AddHost from './components/management/pages/AddHost'
import Announcements from './components/management/pages/Announcements'
import ActivityMonitor from './components/management/pages/monitoring/ActivityMonitor'
import WebsiteStatus from './components/management/pages/monitoring/WebsiteStatus'
import BatchMonitor from './components/management/pages/monitoring/BatchMonitor'
import TimetableMonitor from './components/management/pages/monitoring/TimetableMonitor'
import TeacherMonitor from './components/management/pages/monitoring/TeacherMonitor'
import AdminMonitor from './components/management/pages/monitoring/AdminMonitor'
import ManagementMonitor from './components/management/pages/monitoring/ManagementMonitor'

import StudentLayout from './components/student/layout/StudentLayout'
import StudentDashboard from './components/student/dashboard/StudentDashboard'
import StudentProfile from './components/student/pages/Profile'
import StudentAttendance from './components/student/pages/Attendance'

import TeacherLayout from './components/teacher/layout/TeacherLayout'
import TeacherDashboard from './components/teacher/dashboard/TeacherDashboard'
import TeacherProfile from './components/teacher/pages/Profile'
import TeacherAssignedBatches from './components/teacher/pages/AssignedBatches'
import TeacherManageAttendance from './components/teacher/pages/ManageAttendance'
import TeacherViewAttendance from './components/teacher/pages/ViewAttendance'
import TeacherPromoteStudents from './components/teacher/pages/PromoteStudents'
import TeacherTimetable from './components/teacher/pages/Timetable'
import TeacherReports from './components/teacher/pages/Reports'

import AdminLayout from './components/admin/layout/AdminLayout'
import AdminDashboard from './components/admin/dashboard/AdminDashboard'
import AdminProfile from './components/admin/pages/Profile'
import AdminRegisterUser from './components/admin/pages/RegisterUser'
import AdminBulkCreateStudents from './components/admin/pages/BulkCreateStudents'
import AdminManageTeachers from './components/admin/pages/ManageTeachers'
import AdminManageAdmins from './components/admin/pages/ManageAdmins'
import AdminViewStudents from './components/admin/pages/ViewStudents'
import AdminPassedOutStudents from './components/admin/pages/PassedOutStudents'
import AdminBatchOverview from './components/admin/pages/BatchOverview'
import AdminCreateBatch from './components/admin/pages/CreateBatch'
import AdminManageAcademics from './components/admin/pages/ManageAcademics'
import AdminViewAttendance from './components/admin/pages/ViewAttendance'
import AdminTimetable from './components/admin/pages/Timetable'
import AdminReports from './components/admin/pages/Reports'
import AdminSettings from './components/admin/pages/Settings'
import AdminPlaceholderPage from './components/admin/pages/PlaceholderPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/developers" element={<Developers />} />

        {/* Management Panel Routes */}
        <Route path="/management" element={<ManagementLayout />}>
          <Route index element={<ManagementDashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="user-approval" element={<UserApproval />} />
          <Route path="add-host" element={<AddHost />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="monitoring/activity" element={<ActivityMonitor />} />
          <Route path="monitoring/website-status" element={<WebsiteStatus />} />
          <Route path="monitoring/batch-monitor" element={<BatchMonitor />} />
          <Route path="monitoring/timetable-monitor" element={<TimetableMonitor />} />
          <Route path="monitoring/teacher-monitor" element={<TeacherMonitor />} />
          <Route path="monitoring/admin-monitor" element={<AdminMonitor />} />
          <Route path="monitoring/management-monitor" element={<ManagementMonitor />} />
        </Route>

        {/* Student Panel Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="attendance" element={<StudentAttendance />} />
        </Route>

        {/* Teacher Panel Routes */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="profile" element={<TeacherProfile />} />
          <Route path="assigned-batches" element={<TeacherAssignedBatches />} />
          <Route path="attendance" element={<TeacherManageAttendance />} />
          <Route path="view-attendance" element={<TeacherViewAttendance />} />
          <Route path="promote-students" element={<TeacherPromoteStudents />} />
          <Route path="timetable" element={<TeacherTimetable />} />
          <Route path="reports" element={<TeacherReports />} />
        </Route>

        {/* Admin Panel Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="users/register" element={<AdminRegisterUser />} />
          <Route path="users/bulk-create" element={<AdminBulkCreateStudents />} />
          <Route path="users/teachers" element={<AdminManageTeachers />} />

          {/* Placeholder Routes for other sidebar items */}
          <Route path="users/admins" element={<AdminManageAdmins />} />
          <Route path="users/students" element={<AdminViewStudents />} />
          <Route path="users/passed-out" element={<AdminPassedOutStudents />} />
          <Route path="batches/overview" element={<AdminBatchOverview />} />
          <Route path="batches/create" element={<AdminCreateBatch />} />
          <Route path="academics" element={<AdminManageAcademics />} />
          <Route path="attendance" element={<AdminViewAttendance />} />
          <Route path="timetable" element={<AdminTimetable />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
