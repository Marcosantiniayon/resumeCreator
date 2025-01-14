// Education component
import { formatText } from "../App";

export function Education({ educationEntries, updateEducationEntries }) {

    function addEducationEntry(){
        updateEducationEntries([...educationEntries, { id: Date.now(), degree: "", gradYear: "", school: "", gpa:"", summary: "" }]);
    };
    function removeEducationEntry(id) {
        updateEducationEntries(educationEntries.filter((entry) => entry.id !== id));
    };

    // Function to update a specific field in a specific entry
    function updateState(id, field, value) {
        updateEducationEntries((prevEntries) =>
            prevEntries.map((entry) =>
                //if entry .id and id match, update the passed field with the passed value. Otherwise keep same. 
                entry.id === id ? { ...entry, [field]: value } : entry
            )
        );
    }

    return (
        <div className="sectionDiv">
            <h2>Education</h2>
            <hr className="sectionDivider" />
            {educationEntries.map((entry) => (
                <Container
                    key={entry.id}
                    id={entry.id}
                    onRemove={removeEducationEntry}
                    onInputChange={(field, value) => updateState(entry.id, field, value)}
                />
            ))}
            <input type="image" src="/add2.png" id="addEducationBtn" className="addBtn" onClick={addEducationEntry}></input>

        </div>
    );
}

function Container({ id, onRemove, onInputChange }) {
    return (
        <div className="inputsDiv" data-id={id}>
            <div className="inputDiv">
                <div className="inputDivTop">
                    <label>Degree</label>
                    <input type="image" src="/minus.png" className="removeBtn" onClick={() => onRemove(id)}></input>
                </div>
                <input type="text" onChange={(e) => onInputChange("degree", e.target.value)} />
            </div>
            <div className="inputDiv">
                <label>School</label>
                <input type="text" onChange={(e) => onInputChange("school", e.target.value)} />
            </div>
            <div className="inputDiv">
                <label>Graduation Year</label>
                <input type="number" min="1900" max="2099" onChange={(e) => onInputChange("gradYear", e.target.value)} />
            </div>
            <div className="inputDiv">
                <label>GPA</label>
                <input type="number" min="0" max="4.0" step=".1" onChange={(e) => onInputChange("gpa", e.target.value)} />
            </div>
            <div className="inputDiv">
                <label>Summary</label>
                {/* <input type="text" onChange={(e) => onInputChange("gpa", e.target.value)} /> */}
                <textarea type="textarea" onChange={(e) => onInputChange("summary", e.target.value)} />

            </div>
            <hr className="sectionDivider" />
        </div>
    );
}

export function EducationOutput({ educationEntries }) {
    // Filter out blank entries
    const validEntries = educationEntries.filter((entry) =>
        entry.degree.trim() !== "" ||
        entry.school.trim() !== "" ||
        entry.gradYear.trim() !== ""
    );

    return (
        <div className="educationOutputDiv">
            {validEntries.length > 0 && <h2>Education</h2>}
            {validEntries.length > 0 && <hr></hr>}
            {educationEntries.length > 0 && 
                educationEntries.map((entry) => (
                    <div className="educationEntryOutput" key={entry.id}>
                        <div className="degreeAndYearDiv">
                            <p className="degreeOutput">{entry.degree}</p>
                            <p className="gradYearOutput">{entry.gradYear}</p>
                        </div>
                        <div className="schoolAndGPADiv">
                            <p className="schoolOutput">
                                {entry.school}
                                {entry.gpa && ` (GPA: ${entry.gpa})` }
                            </p>
                        </div>
                        <p className="summaryOutput">{formatText(entry.summary)}</p>
                    </div>
                ))}
        </div>
    )
}