<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Layouts/Auth/Login';
import Register from './Layouts/Auth/Register';
import Test from './Layouts/Auth/Test';
import PrivacyPolicy from './Layouts/Auth/PrivacyPolicy';
=======
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
>>>>>>> bd6322eba696d43e369bb64fa21c88d7392b857b


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
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route path="/test" element={<Test />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
=======
>>>>>>> bd6322eba696d43e369bb64fa21c88d7392b857b
      </Routes>
    </Router>
  );
}

export default App;
