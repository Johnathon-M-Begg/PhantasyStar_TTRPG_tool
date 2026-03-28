import './CreateCharacter.css'
import { useNavigate } from 'react-router-dom'
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography} from "@mui/material";


function OriginSelect({
    selectedOrigin,
    setSelectedOrigin,
    setStep,
}) {

    const navigate = useNavigate()

    const races = [
        { name: 'Human', size: 'Medium', desc: 'Humans are by far the most populous species in the\n' +
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
        { name: 'Android - ALT', desc: 'An alternative Android that has self\n' +
                'regeneration abilities but gains NO TP' },
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

    const variants = [
        {name: 'Default', traits: ['Adaptable', 'Resourceful', 'Versatile']},
        {name: 'Arctic Climate', traits: ['Cold Resistance']},
        {name: 'Extreme Heat', traits: ['Heat Resistance']},
        {name: 'High Gravity', traits: ['Jump Boost', 'Strength Increase']},
        {name: 'Spacer', traits: ['Vehicle Proficiency']},
        {name: 'Subterranean', traits: ['Dark Vision', 'Skill rank']},
        {name: 'Utopian', traits: ['Fear Resistance', 'Charm Resistance', 'Vehicle or Tool proficiency']},
        {name: 'Wasteland', traits: ['Necrotic Resistance', 'Poison Resistance', 'Disease Resistance']},
    ]

    const backgrounds = [
        {name: 'Acolyte'},
        {name: 'Celebrity'},
        {name: 'Crafter'},
        {name: 'Drifter'},
        {name: 'Investigator'},
        {name: 'Local Hero'},
        {name: 'Outlander'},
        {name: 'Outlaw'},
        {name: 'Patrician'},
        {name: 'Pilot'},
        {name: 'Scholar'},
        {name: 'Soldier'},
        {name: 'Techie'},
        {name: 'Wayfarer'},
    ]



    const RaceSelect = () => {
        return (
            <FormControl sx={{ m: 1}} variant="standard" size="small">
                <InputLabel id="race-select">Race</InputLabel>
                <Select
                    color="primary"
                    id="race-select"
                    value={selectedOrigin.race}
                    onChange={(e) => setSelectedOrigin(prev => ({ ...prev, race: e.target.value }))}
                >
                    <MenuItem value="">-- Choose a race --</MenuItem>
                    {races.map((race) => (
                        <MenuItem key={race.name} value={race.name} title={race.desc}>
                            {race.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        )
    }

    const VariantSelect = () => {
        return (
            <FormControl
                disabled={!selectedOrigin.race}
                sx={{ m: 1}} variant="standard"
                size="small"
            >
            <InputLabel htmlFor={"variant-select"}>Variant</InputLabel>
                <Select
                    color="primary"
                    id="race-variant"
                    value={selectedOrigin.variant}
                    onChange={(e) => setSelectedOrigin(prev => ({ ...prev, variant: e.target.value }))}
                >
                    <MenuItem value="">-- Variant --</MenuItem>
                    {variants.map((variant) => (
                        <MenuItem key={variant.name} value={variant.name} title={variant.desc}>
                            {variant.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        )
    }

    const BackgroundSelect = () => {
        return (
            <FormControl sx={{ m: 1}} variant="standard" size="small">
                <InputLabel htmlFor="background-select">Background</InputLabel>
                <Select
                    id="background-select"
                    value={selectedOrigin.background}
                    onChange={(e) => setSelectedOrigin(prev => ({ ...prev, background: e.target.value }))}
                >
                    <MenuItem value="">-- Choose a Background --</MenuItem>
                    {backgrounds.map((option) => (
                        <MenuItem key={option.name} value={option.name} title={option.desc}>
                            {option.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        )
    }

    return (
        <Stack>
            <Typography>Select Origin</Typography>
            <Box className="form-group">
                <RaceSelect/>
                <VariantSelect/>
                <BackgroundSelect/>
            </Box>
            <Grid size={2} className="button-group">
                <Button variant="contained" color="secondary" onClick={() => navigate('/')}>Back</Button>
                <Button variant="contained" color="primary" onClick={() => setStep(2)}
                        disabled={!selectedOrigin.race || !selectedOrigin.background || !selectedOrigin.variant}
                >Next</Button>
            </Grid>
        </Stack>
    )
}



export default OriginSelect