import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Layouts/Auth/Login";
import Register from "./Layouts/Auth/Register";
import Test from "./Layouts/Auth/Test";
import AdminLayout from "./Layouts/AdminLayout";
import Services from "./Layouts/Admin/Services";
import Notifications from "./Layouts/Admin/Notifications";
import Settings from "./Layouts/Admin/Settings";
import Conversations from "./Layouts/Admin/Conversations";
import Support from "./Layouts/Admin/Support";
import PrivacyPolicy from "./Layouts/Auth/PrivacyPolicy";
import NewDeals from "./Layouts/Admin/NewDeals";
import Signup from "./Layouts/Auth/Signup";
import ServiceDetail from "./Layouts/Admin/ServiceDetail";

import UserLayout from "./Layouts/UserLayout";
import UserServices from "./Layouts/User/Services";
import UserServiceDetail from "./Layouts/User/ServiceDetail";
import UserSupport from "./Layouts/User/Support";
import UserSettings from "./Layouts/User/Settings";
import ProfileDetails from "./Layouts/User/ProfileDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/test" element={<Test />} />
          <Route path="/services" element={<Services />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/support" element={<Support />} />
          <Route path="/serviceDetails" element={<ServiceDetail />} />
          <Route path="/NewDeals" element={<NewDeals />} />

        </Route>
        <Route element={<UserLayout />}>
          <Route path="user/services" element={<UserServices />} />
          <Route path="/user/serviceDetails" element={<UserServiceDetail />} />
          <Route path="/user/support" element={<UserSupport />} />
          <Route path="/user/settings" element={<UserSettings />} />
          <Route path="/ProfileDetails" element={<ProfileDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
