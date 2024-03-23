import { useState } from "react";

function FarmMap({ rowNum, colNum, selections, setSelections, cropAreaList }) {
  const [selectionStatus, setSelectionStatus] = useState(0);
  const [currentSelection, setCurrentSelection] = useState([]);

  function colList(row) {
    var cols = [];
    const minX = selections[0][0];
    const minY = selections[0][1];
    const maxX = selections[1][0];
    const maxY = selections[1][1];
    var classNameVar = "";
    var backgroundColorVar = "";

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
    <table className="farmLandTable">
      <tbody>{rowList()}</tbody>
    </table>
  );
}

export default FarmMap;
