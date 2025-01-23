import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Layouts/Auth/Login';
import Register from './Layouts/Auth/Register';
import Test from './Layouts/Auth/Test';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
