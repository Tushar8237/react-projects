import React, { useState } from "react";
import "./PasswordGenerator.css";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumber] = useState(true);
  const [includeSymbols, setIncludeSymbol] = useState(true);

  const generatePassword = () => {
    const lowercase = "abcdefgheijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}<>?/";

    let characters = lowercase + uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatePassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatePassword += characters[randomIndex];
    }
    console.log(generatePassword)
    setPassword(generatePassword);
  };
  return (
    <div className="password-generator">
      <div className="controls">
        <label htmlFor="">
          Length
          <input
            type="number"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumber(!includeNumbers)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbol(!includeSymbols)}
          />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      {
        password && (
          <div className="password-output">
            <p>Your Password</p>
            <strong>
              {password}
            </strong>
          </div>
        )
      }
    </div>
  );
}

export default PasswordGenerator;
