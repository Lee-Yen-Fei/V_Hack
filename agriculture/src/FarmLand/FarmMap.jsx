import { useState } from "react";
import "./farmMap.css";

function FarmMap({
  rowNum,
  colNum,
  selections,
  setSelections,
  cropAreaList,
  setRowNum,
  setColNum,
  currentSelection,
  setCurrentSelection,
  setCropFieldName,
  setCropPlanted,
}) {
  const [selectionStatus, setSelectionStatus] = useState(0);

  const onRowChange = (value) => {
    if (value.target.value <= 500) {
      setRowNum(value.target.value);
    } else {
      setRowNum(500);
    }
  };

  const onColChange = (value) => {
    console.log(value.target.value);
    if (value.target.value <= 500) {
      setColNum(value.target.value);
    } else {
      setColNum(500);
    }
  };

  function colList(row) {
    var cols = [];
    const minX = selections[0][0];
    const minY = selections[0][1];
    const maxX = selections[1][0];
    const maxY = selections[1][1];
    var classNameVar = "";
    var backgroundColorVar = "";
    console.log(cropAreaList);

    for (let col = 0; col < colNum; col++) {
      if (cropAreaList != undefined) {
        cropAreaList.forEach((cropArea) => {
          const topLeftX = cropArea.selectedArea[0][0];
          const topLeftY = cropArea.selectedArea[0][1];
          const botRightX = cropArea.selectedArea[1][0];
          const botRightY = cropArea.selectedArea[1][1];
          if (
            row >= topLeftX &&
            row <= botRightX &&
            col >= topLeftY &&
            col <= botRightY
          ) {
            backgroundColorVar = cropArea.color;
          }
        });
      }

      classNameVar = "";
      if (row >= minX && row <= maxX && col >= minY && col <= maxY) {
        classNameVar += "selected";
      } else {
        classNameVar += "notSelected";
      }

      if (row == currentSelection[0] && col == currentSelection[1]) {
        classNameVar += " currentSelected";
      }

      cols.push(
        <td
          x={row}
          y={col}
          key={row
            .toString()
            .padStart(3, "0")
            .concat(col.toString().padStart(3, "0"))}
          className={classNameVar}
          onClick={onTableClick}
          style={{ backgroundColor: backgroundColorVar }}
        ></td>
      );

      backgroundColorVar = "";
      classNameVar = "";
    }
    return cols;
  }

  function rowList() {
    var rows = [];
    for (let row = 0; row < rowNum; row++) {
      rows.push(<tr key={row}>{colList(row)}</tr>);
    }
    return rows;
  }

  function onTableClick(clickEvent) {
    const x = parseInt(clickEvent.target.getAttribute("x"));
    const y = parseInt(clickEvent.target.getAttribute("y"));
    setCurrentSelection([x, y]);

    cropAreaList.forEach((cropArea) => {
      const topLeftX = cropArea.selectedArea[0][0];
      const topLeftY = cropArea.selectedArea[0][1];
      const botRightX = cropArea.selectedArea[1][0];
      const botRightY = cropArea.selectedArea[1][1];
      if (
        !(x >= topLeftX && x <= botRightX && y >= topLeftY && y <= botRightY)
      ) {
        setCropFieldName("");
        setCropPlanted("");
      }
    });

    if (selectionStatus == 0) {
      setSelectionStatus(1);
      return;
    }

    //only set highlighted cells at every second click
    //top left is min, bottom right is max
    const minX = Math.min(currentSelection[0], x);
    const minY = Math.min(currentSelection[1], y);
    const maxX = Math.max(currentSelection[0], x);
    const maxY = Math.max(currentSelection[1], y);

    setSelectionStatus(0);
    setSelections([
      [minX, minY],
      [maxX, maxY],
    ]);
  }

  return (
    <div className="farmMapContainer">
      <div className="farmMapTableContainer">
        <table className="farmMapTable">
          <tbody>{rowList()}</tbody>
        </table>

        <div className="farmLandDimensions">
          <div className="rowDimension">
            <label htmlFor="rowNumber">Number of rows: </label>
            <input
              id="rowNumber"
              type="number"
              max={500}
              className="dimensions"
              value={rowNum}
              onChange={onRowChange}
            />
          </div>
          <div className="colDimension">
            <label htmlFor="rowNumber">Number of columns: </label>
            <input
              id="colNumber"
              type="number"
              max={500}
              className="dimensions"
              value={colNum}
              onChange={onColChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmMap;
