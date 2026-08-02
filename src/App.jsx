import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from "./components/LandingPage.jsx";
import CreateCharacter from "./components/CharacterCreation/CreateCharacter.jsx";
import LoginPage from './components/auth/LoginPage.jsx'
import RegisterPage from './components/auth/RegisterPage.jsx'
import ProtectedRoute from './components/auth/ProtectedRoute.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
                path="/create"
                element={
                    <ProtectedRoute>
                        <CreateCharacter />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default App