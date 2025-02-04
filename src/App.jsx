import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Layouts/Auth/Login";
import Register from "./Layouts/Auth/Register";
import Test from "./Layouts/Auth/Test";
import Services from "./Layouts/Provider/Services";
import Notifications from "./Layouts/Provider/Notifications";
import Settings from "./Layouts/Provider/Settings";
import Conversations from "./Layouts/Provider/Conversations";
import Support from "./Layouts/Provider/Support";
import PrivacyPolicy from "./Layouts/Auth/PrivacyPolicy";
import NewDeals from "./Layouts/Provider/NewDeals";
import Signup from "./Layouts/Auth/Signup";
import ServiceDetail from "./Layouts/Provider/ServiceDetail";
import ProfileDetails from "./Layouts/Provider/ProfileDetails";

import UserLayout from "./Layouts/CustomerLayout";
import UserServices from "./Layouts/Customer/Services";
import UserServiceDetail from "./Layouts/Customer/ServiceDetail";
import UserSupport from "./Layouts/Customer/Support";
import UserSettings from "./Layouts/Customer/Settings";
import UserProfileDetails from "./Layouts/Customer/ProfileDetails";

import { AuthProvider } from "./Layouts/Auth/AuthContext";
import PrivateRoute from "./Layouts/Auth/PrivateRoute";
import ProviderLayout from "./Layouts/ProviderLayout";

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
            path="/Provider/*"
            element={
              <PrivateRoute>
                <ProviderLayout />
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
            path="/customer/*"
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
