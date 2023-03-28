import {Routes, Route} from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route exect path = "/" Component={HomePage} />
      <Route exect path = "/login" Component={LoginPage} />
      <Route exect path = "/register" Component={RegisterPage} />
    </Routes>
  );
}

export default App;
