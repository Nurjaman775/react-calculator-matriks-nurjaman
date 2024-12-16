import React, { useState } from "react";
import "./App.css";

function App() {
  const [matrixA, setMatrixA] = useState([
    ["", ""],
    ["", ""],
  ]);
  const [matrixB, setMatrixB] = useState([
    ["", ""],
    ["", ""],
  ]);
  const [result, setResult] = useState([
    ["", ""],
    ["", ""],
  ]);

  const handleInputChange = (e, matrix, setMatrix, row, col) => {
    const value = e.target.value === "" ? "" : e.target.value; // Biarkan input kosong
    const newMatrix = matrix.map((r) => [...r]);
    newMatrix[row][col] = value;
    setMatrix(newMatrix);
  };

  const addMatrices = () => {
    const newResult = matrixA.map((row, i) =>
      row.map((val, j) => (Number(val) || 0) + (Number(matrixB[i][j]) || 0))
    );
    setResult(newResult.map((row) => row.map((val) => val.toString())));
  };

  const subtractMatrices = () => {
    const newResult = matrixA.map((row, i) =>
      row.map((val, j) => (Number(val) || 0) - (Number(matrixB[i][j]) || 0))
    );
    setResult(newResult.map((row) => row.map((val) => val.toString())));
  };

  const multiplyMatrices = () => {
    const a = matrixA.map((row) => row.map((val) => Number(val) || 0));
    const b = matrixB.map((row) => row.map((val) => Number(val) || 0));

    const newResult = [
      [
        a[0][0] * b[0][0] + a[0][1] * b[1][0],
        a[0][0] * b[0][1] + a[0][1] * b[1][1],
      ],
      [
        a[1][0] * b[0][0] + a[1][1] * b[1][0],
        a[1][0] * b[0][1] + a[1][1] * b[1][1],
      ],
    ];
    setResult(newResult.map((row) => row.map((val) => val.toString())));
  };

  const renderMatrix = (matrix, setMatrix) =>
    matrix.map((row, i) => (
      <div key={i} className="matrix-row">
        {row.map((val, j) => (
          <input
            key={j}
            type="number"
            value={val}
            onChange={(e) => handleInputChange(e, matrix, setMatrix, i, j)}
          />
        ))}
      </div>
    ));

  return (
    <div className="container">
      <h1>Kalkulator Matriks 2x2 nurjaman</h1>
      <div className="matrices">
        <div className="matrix">
          <h2>Matriks A</h2>
          {renderMatrix(matrixA, setMatrixA)}
        </div>
        <div className="matrix">
          <h2>Matriks B</h2>
          {renderMatrix(matrixB, setMatrixB)}
        </div>
      </div>
      <div className="buttons">
        <button onClick={addMatrices}>Tambah (+)</button>
        <button onClick={subtractMatrices}>Kurang (-)</button>
        <button onClick={multiplyMatrices}>Kali (×)</button>
      </div>
      <div className="result">
        <h2>Hasil:</h2>
        {renderMatrix(result, () => {})}
      </div>
    </div>
  );
}

export default App;
