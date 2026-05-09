import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import TraineeApp from './pages/TraineeApp'
import TrainerDashboard from './pages/TrainerDashboard'
import ManagerDashboard from './pages/ManagerDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/trainee" element={<TraineeApp />} />
        <Route path="/trainer" element={<TrainerDashboard />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}