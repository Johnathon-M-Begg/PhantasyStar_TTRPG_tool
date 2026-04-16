import React, { useState } from 'react';

const availableOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
];

function MutuallyExclusiveDropdowns() {
    // State to store the selected value for each dropdown
    const [selection1, setSelection1] = useState('');
    const [selection2, setSelection2] = useState('');

    // Function to filter options for a specific dropdown
    const filterOptions = (currentSelection, otherSelection) => {
        return availableOptions.filter(option =>
            // Include all options except the one selected in the *other* dropdown
            option.value !== otherSelection
        );
    };

    // Filtered options for each dropdown
    const options1 = filterOptions(selection1, selection2);
    const options2 = filterOptions(selection2, selection1);

    // Handle change for the first dropdown
    const handleChange1 = (event) => {
        setSelection1(event.target.value);
    };

    // Handle change for the second dropdown
    const handleChange2 = (event) => {
        setSelection2(event.target.value);
    };

    // Reusable Dropdown component
    const Dropdown = ({ value, onChange, options, placeholder }) => (
        <select value={value} onChange={onChange}>
            <option value="">{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );

    return (
        <div>
            <h3>Select two unique fruits:</h3>
            <div>
                <label>Dropdown 1: </label>
                <Dropdown
                    value={selection1}
                    onChange={handleChange1}
                    options={options1}
                    placeholder="Select fruit 1"
                />
            </div>
            <div>
                <label>Dropdown 2: </label>
                <Dropdown
                    value={selection2}
                    onChange={handleChange2}
                    options={options2}
                    placeholder="Select fruit 2"
                />
            </div>
            <p>Selection 1: {selection1 || 'None'}</p>
            <p>Selection 2: {selection2 || 'None'}</p>
        </div>
    );
}

export default MutuallyExclusiveDropdowns;