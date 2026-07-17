import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CompanyDetails from "./pages/CompanyDetails";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import Questions from "./pages/Questions";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import AddCompany from "./pages/AddCompany";
import ManageCompanies from "./pages/ManageCompanies";
import EditCompany from "./pages/EditCompany";
import AddQuestion from "./pages/AddQuestion";
import ManageQuestions from "./pages/ManageQuestions";
import EditQuestion from "./pages/EditQuestion";
import Students from "./pages/Students";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/company/:id" element={<CompanyDetails />} />



        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="/questions/:companyId/:type"
        element={
          <ProtectedRoute>
            <Questions />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route
        path="/admin/add-company"
        element={
          <AdminRoute>
            <AddCompany />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/manage-companies"
        element={
          <AdminRoute>
            <ManageCompanies />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/edit-company/:id"
        element={
          <AdminRoute>
            <EditCompany />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/add-question"
        element={
          <AdminRoute>
            <AddQuestion />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/manage-questions"
        element={
          <AdminRoute>
            <ManageQuestions />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/edit-question/:id"
        element={
          <AdminRoute>
            <EditQuestion />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/students"
        element={
          <AdminRoute>
            <Students />
          </AdminRoute>
        }
      />
    </Routes>
  );
}

export default App;