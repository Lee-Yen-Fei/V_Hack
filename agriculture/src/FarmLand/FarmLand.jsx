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
  const [currentSelection, setCurrentSelection] = useState([]);
  const [cropFieldName, setCropFieldName] = useState("");
  const [cropPlanted, setCropPlanted] = useState("");

  return (
    <div className="farmLand">
      <div className="farmMapTableContainer">
        <FarmMap
          rowNum={rowNum}
          colNum={colNum}
          selections={selections}
          setSelections={setSelections}
          cropAreaList={cropAreaList}
          setRowNum={setRowNum}
          setColNum={setColNum}
          currentSelection={currentSelection}
          setCurrentSelection={setCurrentSelection}
          setCropPlanted={setCropPlanted}
          setCropFieldName={setCropFieldName}
        ></FarmMap>
      </div>
      <div className="farmDetailsContainer">
        <FarmDetails
          selections={selections}
          cropAreaList={cropAreaList}
          setCropAreaList={setCropAreaList}
          currentSelection={currentSelection}
          cropFieldName={cropFieldName}
          setCropFieldName={setCropFieldName}
          cropPlanted={cropPlanted}
          setCropPlanted={setCropPlanted}
        ></FarmDetails>
      </div>
    </div>
  );
}

export default FarmLand;
