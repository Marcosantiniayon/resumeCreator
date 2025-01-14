// Experience component
import { formatText } from "../App";


export function Experience({experienceEntries, updateExperienceEntries}) {
    
    function addExperienceEntry() {
        updateExperienceEntries([...experienceEntries, {
            id: Date.now(),
            position: "",
            company: "",
            location: "",
            startYear: "",
            endYear: "",
            summary: "" }]);
    }
    function removeExperienceEntry(id) {
        updateExperienceEntries(experienceEntries.filter((entry) => entry.id != id))
    }
    function updateState(id, field, value ) {
        updateExperienceEntries((prevEntries) =>
            prevEntries.map((entry) =>
                //if entry .id and id match, update the passed field with the passed value. Otherwise keep same. 
                entry.id === id ? { ...entry, [field]: value } : entry
            )
        );
    }

    return (
        <div className="sectionDiv">
            <h2>Experience</h2>
            <hr className="sectionDivider" />
            {experienceEntries.map((entry) => (
                <Container
                    key={entry.id}
                    id={entry.id}
                    onRemove={removeExperienceEntry}
                    onInputChange={(field, value) => updateState(entry.id, field, value)}
                />
            ))}
            <input type="image" src="./public/add2.png" id="addExperienceBtn" className="addBtn" onClick={addExperienceEntry}></input>
        </div>
    )
}

function Container({ id, onRemove, onInputChange }) {
    return (
        <div className="inputsDiv" data-id={id} >
            <div className="inputDiv">
                <div className="inputDivTop">
                    <label>Position Title</label>
                    <input type="image" src="./public/minus.png" className="removeBtn" onClick={() => onRemove(id)}></input>
                </div>
                <input type="text" onChange={(e) => onInputChange("position", e.target.value)} />
            </div>
            <div className="inputDiv">
                <label>Company Name</label>
                <input type="text" onChange={(e) => onInputChange("company", e.target.value)} />
            </div>
            <div className="inputDiv">
                <label>Location</label>
                <input type="text" placeholder="Phoenix, AZ" onChange={(e) => onInputChange("location", e.target.value)} />
            </div>
            <div className="inputDiv">
                <label>Start Year</label>
                <input type="number" min="1900" max="2099" onChange={(e) => onInputChange("startYear", e.target.value)} />
            </div>
            <div className="inputDiv">
                <label>End Year</label>
                <input type="number" min="1900" max="2099" onChange={(e) => onInputChange("endYear", e.target.value)} />
            </div>
            <div className="inputDiv">
                <label>Summary</label>
                <textarea id="summaryTextArea" type="textarea" onChange={(e) => onInputChange("summary", e.target.value)} />
            </div>
            <hr className="sectionDivider" />
        </div>
    )

}

export function ExperienceOutput({ experienceEntries }) {
    // Filter out blank entries
    const validEntries = experienceEntries.filter((entry) =>
        entry.position.trim() !== "" ||
        entry.company.trim() !== "" ||
        entry.startYear.trim() !== "" ||
        entry.endYear.trim() !== "" ||
        entry.summary.trim() !== "" 
    );
    return (
        <div className="experienceOutputDiv">
            {validEntries.length > 0 && <h2>Experience</h2>}
            {validEntries.length > 0 && <hr></hr>}
            {experienceEntries.map((entry) => (
                <div key={entry.id}>
                    <div className="positionAndYearsDiv">
                        <p className="position">{entry.position}</p>
                        {entry.startYear.trim() !== "" && entry.endYear.trim() !== "" && 
                            <div className="yearsDiv">
                                <p className="years">{entry.startYear} - {entry.endYear}</p>
                            </div>
                        }
                        {entry.startYear.trim() !== "" && entry.endYear.trim() == "" &&
                            <div className="yearsDiv">
                                <p className="years">{entry.startYear} - Current</p>
                            </div>
                        }
                    </div>
                    <p className="company">{entry.company}</p>
                    <p className="location">{entry.location}</p>
                    <p className="summaryOutput">{formatText(entry.summary)}</p>
                </div>
            ))}
        </div>
    )
}


