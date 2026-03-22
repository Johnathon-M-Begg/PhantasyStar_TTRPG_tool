import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateCharacter.css'

function CreateCharacter() {
    const navigate = useNavigate()
    const [selectedRace, setSelectedRace] = useState('')

    const races = [
        { name: 'Human', desc: 'Humans are by far the most populous species in the\n' +
                'galaxy. They are believed to have originated on Palma,\n' +
                'the first planet of the Algol system. Many believe,\n' +
                'however, that their true origins go back far beyond\n' +
                'Algol’s known history. Humans are also the progenitors\n' +
                'of both androids and newmans.' },
        { name: 'Newman', desc: 'Newmans (sometimes spelled “numans”) were created\n' +
                'as the result of biological research experiments\n' +
                'combining human genes with those of biomonsters.\n' +
                'Originally shunned in society, they gained acceptance\n' +
                'over time and evolved to be recognized and respected\n' +
                'as an independent species.' },
        { name: 'Android', desc: ' Originally built to serve humans, they\n' +
                'evolved over time to become self-aware and gain true\n' +
                'sentience. After attaining their independence, they set\n' +
                'out to forge their own paths with a sense of self-worth\n' +
                'and a dedication to their chosen purpose.' },
        { name: 'Dezolian', desc: 'These tall humanoids are native to the frozen world of\n' +
                'Dezolis, the third planet of the Algol system. While most\n' +
                'still reside on their native planet, some are known to\n' +
                'venture out into other parts of the galaxy.' },
        { name: 'Motavian', desc: 'These humanoids are native to the desert planet of\n' +
                'Motavia, the second planet of the Algol system. On\n' +
                'their homeworld, they are often reclusive, even from\n' +
                'other cultures with nearby settlements. They have no\n' +
                'formal system of government, instead forming groups\n' +
                'or clans residing in small villages scattered throughout\n' +
                'the desert. While rare, some Motavians venture into\n' +
                'outside settlements, though they avoid involving\n' +
                'themselves in Palmian affairs unless necessary' },
        { name: 'Musk Cat', desc: 'Musk cats are small quadrupeds covered\n' +
                'in thick fur with yellow or brown hues.\n' +
                'They have pointy, elongated ears and thick,\n' +
                'bushy tails. Legends tell of a magical tree\n' +
                'whose seeds can transform a musk cat into a\n' +
                'mythical, winged beast. Throughout Algol’s\n' +
                'known history few musk cats are known to \n' +
                'exist, and even fewer have ever been seen\n' +
                'by those outside their secluded settlements.' },
    ]

    return (
        <div className="container">
            <div className="white-box">
                <h2>Create New Character</h2>
                <div className="form-group">
                    <label htmlFor="race-select">Select Race:</label>
                    <select 
                        id="race-select" 
                        value={selectedRace}
                        onChange={(e) => setSelectedRace(e.target.value)}
                        className="dropdown"
                    >
                        <option value="">-- Choose a race --</option>
                        {races.map((race) => (
                            <option key={race.name} value={race.name} title={race.desc}>
                                {race.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="button-group">
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
                    <button className="btn btn-primary" disabled={!selectedRace}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default CreateCharacter
