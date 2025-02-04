import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Layouts/Auth/Login";
import Register from "./Layouts/Auth/Register";
import Test from "./Layouts/Auth/Test";
import AdminLayout from "./Layouts/AdminLayout";
import Services from "./Layouts/ServiceProvider/Services";
import Notifications from "./Layouts/ServiceProvider/Notifications";
import Settings from "./Layouts/ServiceProvider/Settings";
import Conversations from "./Layouts/ServiceProvider/Conversations";
import Support from "./Layouts/ServiceProvider/Support";
import PrivacyPolicy from "./Layouts/Auth/PrivacyPolicy";
import NewDeals from "./Layouts/ServiceProvider/NewDeals";
import Signup from "./Layouts/Auth/Signup";
import ServiceDetail from "./Layouts/ServiceProvider/ServiceDetail";
import ProfileDetails from "./Layouts/ServiceProvider/ProfileDetails";

import UserLayout from "./Layouts/UserLayout";
import UserServices from "./Layouts/User/Services";
import UserServiceDetail from "./Layouts/User/ServiceDetail";
import UserSupport from "./Layouts/User/Support";
import UserSettings from "./Layouts/User/Settings";
import UserProfileDetails from "./Layouts/User/ProfileDetails";

import { AuthProvider } from "./Layouts/Auth/AuthContext";
import PrivateRoute from "./Layouts/Auth/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

          {/* Private Routes for Admin */}
          <Route
            path="/ServiceProvider/*"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route path="test" element={<Test />} />
            <Route path="services" element={<Services />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
            <Route path="conversations" element={<Conversations />} />
            <Route path="support" element={<Support />} />
            <Route path="serviceDetails" element={<ServiceDetail />} />
            <Route path="NewDeals" element={<NewDeals />} />
            <Route path="ProfileDetails" element={<ProfileDetails />} />
          </Route>

          <Route
            path="/user/*"
            element={
              <PrivateRoute>
                <UserLayout />
              </PrivateRoute>
            }
          >
            <Route path="services" element={<UserServices />} />
            <Route path="serviceDetails" element={<UserServiceDetail />} />
            <Route path="support" element={<UserSupport />} />
            <Route path="settings" element={<UserSettings />} />
            <Route path="ProfileDetails" element={<UserProfileDetails />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
