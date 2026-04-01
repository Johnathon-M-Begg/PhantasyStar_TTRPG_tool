import {useState} from "react";
import {MenuItem, Select, Stack} from "@mui/material";

function TrainedSkillSelect({
    professionSkills,
    count,
}) {
    // State to store the selected value for each dropdown
    const [selection1, setSelection1] = useState('');
    const [selection2, setSelection2] = useState('');
    const [selection3, setSelection3] = useState('');
    const [selection4, setSelection4] = useState('');

    // Function to filter options for a specific dropdown
    const filterOptions = (currentSelection, otherSelections) => {
        return professionSkills.filter(option =>
            // Include all options except the one selected in the *other* dropdown
            option !== otherSelections[0]
            && option !== otherSelections[1]
            && option !== otherSelections[2]
        );
    };

    // Filtered options for each dropdown
    const options1 = filterOptions(selection1, [selection2, selection3, selection4]);
    const options2 = filterOptions(selection2, [selection1, selection3, selection4]);
    const options3 = filterOptions(selection3, [selection1, selection2, selection4]);
    const options4 = filterOptions(selection4, [selection1, selection2, selection3]);

    // Handle change for the first dropdown
    const handleChange1 = (event) => {
        setSelection1(event.target.value);
    };

    // Handle change for the second dropdown
    const handleChange2 = (event) => {
        setSelection2(event.target.value);
    };

    const handleChange3 = (event) => {
        setSelection3(event.target.value);
    }

    const handleChange4 = (event) => {
        setSelection4(event.target.value);
    }

    const Dropdown = ({ value, onChange, options, placeholder }) => (
        <Select value={value} onChange={onChange} size={"small"} fullWidth>
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </Select>
    );

    return (
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
        </Stack>
    );
}

export default TrainedSkillSelect;