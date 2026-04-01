import {useState} from "react";

function TrainedSkillSelect({
    professionSkills,
    count,
}) {
    const [selected, setSelected] = useState([]);

    return (
        <div>
            {Array.from({ length: count }, (_, index) => (
                // Assign a unique key to the root element of each iteration
                <div key={index}>
                    {/* You can use the index to display the number */}
                    Element number {index + 1}
                </div>
            ))}
        </div>
    )
}

export default TrainedSkillSelect;