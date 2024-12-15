import React, { useState } from "react";
import "./App.css";

function App() {
  const [matrixA, setMatrixA] = useState([[0, 0], [0, 0]]);
  const [matrixB, setMatrixB] = useState([[0, 0], [0, 0]]);
  const [result, setResult] = useState([[0, 0], [0, 0]]);

  const handleInputChange = (e, matrix, setMatrix, row, col) => {
    const newMatrix = matrix.map((r) => [...r]);
    newMatrix[row][col] = Number(e.target.value);
    setMatrix(newMatrix);
  };

  const addMatrices = () => {
    const newResult = matrixA.map((row, i) =>
      row.map((val, j) => val + matrixB[i][j])
    );
    setResult(newResult);
  };

  const subtractMatrices = () => {
    const newResult = matrixA.map((row, i) =>
      row.map((val, j) => val - matrixB[i][j])
    );
    setResult(newResult);
  };

  const multiplyMatrices = () => {
    const newResult = [
      [
        matrixA[0][0] * matrixB[0][0] + matrixA[0][1] * matrixB[1][0],
        matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][1],
      ],
      [
        matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[1][0],
        matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1],
      ],
    ];
    setResult(newResult);
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
