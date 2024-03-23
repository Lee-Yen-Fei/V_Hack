import { useState } from "react";
import "./farmLand.css";
import FarmMap from "./FarmMap";
import FarmDetails from "./FarmDetails";

function FarmLand() {
  const [rowNum, setRowNum] = useState(20);
  const [colNum, setColNum] = useState(20);
  const [cropAreaList, setCropAreaList] = useState([]);
  const [selections, setSelections] = useState([
    [-1, -1],
    [-1, -1],
  ]);

  const onRowChange = (value) => {
    if (value.target.value <= 500) {
      setRowNum(value.target.value);
    } else {
      setRowNum(500);
    }
  };

  const onColChange = (value) => {
    if (value.target.value <= 500) {
      setColNum(value.target.value);
    } else {
      setColNum(500);
    }
  };

  console.log(setCropAreaList);

  return (
    <div className="farmLand">
      <div className="farmLandMap">
        <div className="farmLandDimensions">
          <input
            type="number"
            max={500}
            className="dimensions"
            value={rowNum}
            onChange={onRowChange}
          />
          <input
            type="number"
            max={500}
            className="dimensions"
            value={colNum}
            onChange={onColChange}
          />
        </div>
        <div className="farmLandTableContainer">
          <FarmMap
            rowNum={rowNum}
            colNum={colNum}
            selections={selections}
            setSelections={setSelections}
            cropAreaList={cropAreaList}
          ></FarmMap>
        </div>
      </div>
      <FarmDetails
        selections={selections}
        cropAreaList={cropAreaList}
        setCropAreaList={setCropAreaList}
      ></FarmDetails>
    </div>
  );
}

export default FarmLand;
