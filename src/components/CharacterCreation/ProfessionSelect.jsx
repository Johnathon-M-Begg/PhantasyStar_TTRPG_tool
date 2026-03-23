function ProfessionSelect({
    selectedProfession,
    setSelectedProfession,
    setStep,
}) {

    const professions = [
        {name: "Guardian", description: "Versatile combatant and defender", HitDice: 10},
        {name: "Hunter", description: "Combines weapon skills with technique use", HitDice: 10},
        {name: "Mystic", description: "Combat adept with spiritual techniques", HitDice: 8},
        {name: "Operative", description: "Expert in infiltration and exploration", HitDice: 8},
        {name: "Savant", description: "Specialist in biotech or machines", HitDice: 8},
        {name: "Thaumaturge", description: "Channelers of arcane power and elemental energy", HitDice: 6},
        {name: "Warrior", description: "Master of arms and armor", HitDice: 10},
    ]
    return (
        <div className="form-group">
            <label htmlFor="profession-select">Select Profession:</label>
            <select
                id="profession-select"
                value={selectedProfession}
                onChange={(e) => setSelectedProfession(e.target.value)}
                className="dropdown"
            >
                <option value="">-- Choose a profession --</option>
                {professions.map((profession) => (
                    <option key={profession.name} value={profession.name} title={profession.desc}>
                        {profession.name}
                    </option>
                ))}
            </select>
            <div className="input-group">
                <label>HP</label> {selectedProfession ? professions.find(p => p.name === selectedProfession).HitDice : ''}
            </div>
            <div className="button-group">
                <button className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
                <button className="btn btn-primary" onClick={() => setStep(3)}
                        disabled={!selectedProfession}
                >Next</button>
            </div>
        </div>
    )
}

export default ProfessionSelect