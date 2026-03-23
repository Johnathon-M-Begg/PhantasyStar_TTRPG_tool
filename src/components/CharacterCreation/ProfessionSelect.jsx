
function ProfessionSelect({ selectedProfession, setSelectedProfession }) {

    const professions = [
        {name: "Guardian"},
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
        </div>
    )
}

export default ProfessionSelect