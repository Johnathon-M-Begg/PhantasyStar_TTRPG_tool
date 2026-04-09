import './CharacterSummary.css'

function CharacterSummary({
    profession,
    race,
    variant,
    background,
    abilityScores,
    skills,
    proficiencies,
}) {
    return (
        <>
            <h2>Character Summary</h2>
            <div className="summary-content">
                <p><strong>Profession:</strong> {profession || 'Not selected'}</p>
                <p><strong>Race:</strong> {race || 'Not selected'}</p>
                <p><strong>Variant:</strong> {variant || 'None'}</p>
            </div>
            <div className="button-group">

            </div>
        </>
    )
}

export default CharacterSummary
