import {useState} from "react";
import {Box, Button, MenuItem, Select, Stack} from "@mui/material";
import {SkillEnum} from "../../../DataObjects/enums/SkillEnum.tsx";
import {AbilitiesEnum} from "../../../DataObjects/enums/AbilitiesEnum.tsx";

function TrainedSkillSelect({
    professionSkills,
    handleUpdate,
    count,
    race,
}) {

    const skillList = [
        SkillEnum.acrobatics,
        SkillEnum.astrophysics,
        SkillEnum.athletics,
        SkillEnum.computers,
        SkillEnum.deception,
        SkillEnum.insight,
        SkillEnum.intimidation,
        SkillEnum.investigation,
        SkillEnum.lore,
        SkillEnum.mechanics,
        SkillEnum.medicine,
        SkillEnum.perception,
        SkillEnum.performance,
        SkillEnum.persuasion,
        SkillEnum.slightOfHand,
        SkillEnum.stealth,
        SkillEnum.survival,
        SkillEnum.xenobiology,
    ]

    const [selection1, setSelection1] = useState('');
    const [selection2, setSelection2] = useState('');
    const [selection3, setSelection3] = useState('');
    const [selection4, setSelection4] = useState('');
    const [selection5, setSelection5] = useState('');

    const filterOptions = (currentSelection, otherSelections) => {
        return professionSkills.filter(option =>
            option !== otherSelections[0]
            && option !== otherSelections[1]
            && option !== otherSelections[2]
            && option !== otherSelections[3]
        );
    };

    const filterHumanOptions = (currentSelection, otherSelections) => {
        return skillList.filter(option =>
            option !== otherSelections[0]
            && option !== otherSelections[1]
            && option !== otherSelections[2]
            && option !== otherSelections[3]
        );
    }

    const options1 = filterOptions(selection1, [selection2, selection3, selection4, selection5]);
    const options2 = filterOptions(selection2, [selection1, selection3, selection4, selection5]);
    const options3 = filterOptions(selection3, [selection1, selection2, selection4, selection5]);
    const options4 = filterOptions(selection4, [selection1, selection2, selection3, selection5]);
    const options5= filterHumanOptions(selection5, [selection1, selection2, selection3, selection4]);

    const handleChange1 = (event) => {
        setSelection1(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelection2(event.target.value);
    };

    const handleChange3 = (event) => {
        setSelection3(event.target.value);
    }

    const handleChange4 = (event) => {
        setSelection4(event.target.value);
    }

    const handleChange5 = (event) => {
        setSelection5(event.target.value);
    }

    const checkIsValid = (selections) => {
        if(count === 2) {
            return !(selections[0] === '' || selections[1] === '')
        } else if(count === 4) {
            return !(
                selections[0] === ''
                || selections[1] === ''
                || selections[2] === ''
                || selections[3] === ''
            )
        } else if(count === 5) {
            return !(
                selections[0] === ''
                || selections[1] === ''
                || selections[2] === ''
                || selections[3] === ''
                || selections[4] === ''
            )
        } else {
            return false
        }
    }

    const isValid = checkIsValid([selection1, selection2, selection3, selection4])

    const Dropdown = ({ value, onChange, options }) => (
        <Select value={value} onChange={onChange} size={"small"} fullWidth>
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </Select>
    );

    return (
        <Box>
            <p>{isValid.toString()}</p>
            <Stack direction="column" spacing={2}>
                <h3>Select skills to train</h3>
                { count >= 1 && (
                    <Dropdown
                        options={options1}
                        value={selection1}
                        onChange={handleChange1}/>
                )}
                { count >= 2 && (
                    <Dropdown
                        options={options2}
                        value={selection2}
                        onChange={handleChange2}/>
                )}
                { count >= 3 && (
                    <Dropdown
                        options={options3}
                        value={selection3}
                        onChange={handleChange3}/>
                )}
                { count >= 4 && (
                    <Dropdown
                        options={options4}
                        value={selection4}
                        onChange={handleChange4}/>
                )}
                { race === 'Human' && (
                    <Dropdown
                        options={options5}
                        value={selection5}
                        onChange={handleChange5}/>
                )}
            </Stack>
            <div className="button-group">

            {/*    <button className="btn btn-secondary" onClick={() => setStep(3)}>Back</button>*/}
            {/*    <button className="btn btn-primary"*/}
            {/*        onClick={() => {*/}

            {/*        }} disabled={!isValid}*/}
            {/*    >Next</button>*/}
                <Button
                    onClick={() => {handleUpdate([selection1, selection2, selection3, selection4, selection5])}}
                >Accept</Button>
            </div>
        </Box>
    );
}

export default TrainedSkillSelect;