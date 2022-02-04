import { Routes, Route, Navigate } from 'react-router-dom';
import EditPage from './Components/Pages/Edit/EditPage';
import OverlayPage from './Components/Pages/Overlay/OverlayPage';
import './App.css';
import WelcomePage from './Components/Pages/Welcome/WelcomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/welcome' />} />
      <Route path='/welcome' element={<WelcomePage />} />
      <Route path='/overlay/:tournamentId' element={<OverlayPage />} />
      <Route path='/edit/:tournamentId' element={<EditPage />} />
    </Routes>

  );
}

export default App;
