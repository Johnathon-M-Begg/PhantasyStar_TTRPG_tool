import React, { useState } from 'react';

const DetailsDropdown = () => {
    const itemsDetails = [
        { id: '1', name: 'Apple', color: 'Red', taste: 'Sweet and Crisp' },
        { id: '2', name: 'Banana', color: 'Yellow', taste: 'Soft and Creamy' },
        { id: '3', name: 'Orange', color: 'Orange', taste: 'Citrusy and Tangy' },
    ];

    const [selectedItemId, setSelectedItemId] = useState(''); // State to store the selected ID

    // Function to find the selected item's details from the data source
    const selectedItem = itemsDetails.find(item => item.id === selectedItemId);

    const handleSelectChange = (event) => {
        setSelectedItemId(event.target.value); // Update the state when the selection changes
    };

    return (
        <div>
            {/* Dropdown Menu */}
            <select value={selectedItemId} onChange={handleSelectChange}>
                <option value="">Select an item</option>
                {itemsDetails.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>

            {/* Display Area */}
            {selectedItem ? (
                <div className="details-container">
                    <h3>{selectedItem.name} Details:</h3>
                    <p><strong>Color:</strong> {selectedItem.color}</p>
                    <p><strong>Taste:</strong> {selectedItem.taste}</p>
                </div>
            ) : (
                <p>Please select an item to see its details.</p>
            )}
        </div>
    );
};

export default DetailsDropdown;
