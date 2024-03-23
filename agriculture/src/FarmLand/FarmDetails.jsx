import { useState } from "react";

function farmDetails({ selections, cropAreaList, setCropAreaList }) {
  const [cropName, setCropName] = useState("");
  const [cropPlanted, setCropPlanted] = useState("");

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    const SubmittedDetails = {
      cropName: cropName,
      cropPlanted: cropPlanted,
      color: getRandomColor(),
      selectedArea: selections,
    };
    setCropAreaList([...cropAreaList, SubmittedDetails]);
  }
  return (
    <div className="farmDetails">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Details</legend>
          <div className="fieldContainer">
            <label htmlFor="cropName">Crop Name</label>
            <input
              type="text"
              id="cropName"
              value={cropName}
              onChange={(e) => setCropName(e.target.value)}
            />
          </div>
          <div className="fieldContainer">
            <label htmlFor="cropPlanted">Crop Planted</label>
            <input
              type="text"
              id="cropPlanted"
              value={cropPlanted}
              onChange={(e) => setCropPlanted(e.target.value)}
            />
          </div>
          <input
            type="submit"
            name="submitFarmDetails"
            id="submitFarmDetails"
            value="Submit"
          />
        </fieldset>
      </form>
    </div>
  );
}

export default farmDetails;
