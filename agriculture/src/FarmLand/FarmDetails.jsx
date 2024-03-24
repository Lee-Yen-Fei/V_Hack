import { useState } from "react";
import "./farmDetails.css";

function farmDetails({
  selections,
  cropAreaList,
  setCropAreaList,
  currentSelection,
  cropFieldName,
  setCropFieldName,
  cropPlanted,
  setCropPlanted,
}) {
  const [cropFields, setCropFields] = useState([{}]);
  const [fetchedSensors, setFetchedSensors] = useState(false);

  if (!fetchedSensors) {
    getSensors();
  }

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
      cropFieldName: cropFieldName,
      cropPlanted: cropPlanted,
      color: getRandomColor(),
      selectedArea: selections,
    };
    setCropAreaList([...cropAreaList, SubmittedDetails]);
  }

  function getSensors() {
    fetch("./cropField.json")
      .then((response) => response.json())
      .then((cropFieldsJson) => {
        setCropFields(cropFieldsJson);
        setFetchedSensors(true);
        setCropAreaList([...cropAreaList, ...cropFieldsJson]);
      });
  }

  function sensorList() {
    if (!fetchedSensors) {
      return;
    }
    var selectedCropField;
    var cropFIeldIndex;
    cropFields.forEach((cropField, index) => {
      const topLeftX = cropField.selectedArea[0][0];
      const topLeftY = cropField.selectedArea[0][1];
      const botRightX = cropField.selectedArea[1][0];
      const botRightY = cropField.selectedArea[1][1];
      if (
        currentSelection[0] >= topLeftX &&
        currentSelection[0] <= botRightX &&
        currentSelection[1] >= topLeftY &&
        currentSelection[1] <= botRightY
      ) {
        selectedCropField = cropField;
        cropFIeldIndex = index;
      }
    });
    if (selectedCropField == undefined) {
      return;
    }
    setCropFieldName(selectedCropField.cropFieldName);
    setCropPlanted(selectedCropField.cropPlanted);
    return selectedCropField.sensors.map((sensor, index) => {
      return (
        <div className="sensor" key={index}>
          <div>
            <h4>{sensor.name}&nbsp;</h4>
            <img src={sensor.image} alt="sensor.name" />
          </div>
          <p>{sensor.value}</p>
        </div>
      );
    });
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
              value={cropFieldName}
              onChange={(e) => setCropFieldName(e.target.value)}
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
          <br />
          <div className="sensorContainer">{sensorList()}</div>
        </fieldset>
      </form>
    </div>
  );
}

export default farmDetails;
