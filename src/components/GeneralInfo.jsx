// General Info component

export function GeneralInfo({ generalInfo, updateGeneralInfo }) {
    
    function updateState(field, value) {
        updateGeneralInfo((prevState) => ({
            ...prevState, // Copy all current key-value pairs from the state
            [field]: value, // Update the specific field
        }));
    }

    return (
        <div className="sectionDiv">
            <h2>General Information</h2>
            <hr className="sectionDivider"/>
            <div className="inputsDiv">
                <div className="inputDiv">
                    <label htmlFor="nameInput">Full Name</label>
                    <input id="nameInput" type="text"onChange={(e) => updateState("nameInput", e.target.value)} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="emailInput">Email Address</label>
                    <input id="emailInput" type="email" onChange={(e) => updateState("emailInput", e.target.value)} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="phoneNumberInput">Phone #</label>
                    <input id="phoneNumberInput" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={(e) => updateState("phoneNumberInput", e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export function GeneralInfoOutput({ generalInfo}) {
    return (
        <div className="generalOutputDiv">
            <h2 id="nameOutput">{generalInfo.nameInput}</h2>
            <div className="contactInfo">
                {generalInfo.emailInput && (
                    <div className="contactInfoSub">
                        <span className="outputLabel">Email: </span>
                        <span id="emailOutput"> {generalInfo.emailInput}</span>
                    </div>
                )}
                {generalInfo.emailInput && generalInfo.phoneNumberInput && <span> | </span>}
                {generalInfo.phoneNumberInput && (
                    <div className="contactInfoSub">
                        <span className="outputLabel">Phone #: </span>
                        <span id="phoneOutput">{generalInfo.phoneNumberInput}</span>
                    </div>
                )}
            </div>
        </div>
    )

}