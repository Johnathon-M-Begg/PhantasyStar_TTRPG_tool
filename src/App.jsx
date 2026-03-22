import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from "./components/LandingPage.jsx";
import CreateCharacter from "./components/CharacterCreation/CreateCharacter.jsx";
import CharacterSummary from "./components/CharacterSummary/CharacterSummary.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create" element={<CreateCharacter />} />
            <Route path="/summary" element={<CharacterSummary />} />
        </Routes>
    )
}

export default App