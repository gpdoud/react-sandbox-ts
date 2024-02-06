import { useState } from "react";

const colors = [
    { id: '1', color: 'Red' },
    { id: '2', color: 'Blue' },
    { id: '3', color: 'Green' }
]

export default function SelectExample() {

    const [selectedOption, setSelectedOption] = useState<string>("");

    const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        console.log("Selected: ", selectedOption);
    }

    return (
        <>
            <select value={selectedOption} onChange={selectChange}>
                {
                    colors.map(x => (
                        <option key={x.id} value={x.id}>{x.color}</option>
                    ))
                }
            </select>
        </>
    )
}