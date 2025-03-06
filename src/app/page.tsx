"use client"; // Required for using hooks like useState
import React, { useState } from "react";
import Slider from "../components/Slider";
import "./globals.css"; // Import the global styles

const Home: React.FC = () => {
  const [usdValue, setUsdValue] = useState<number>(0);
  const [eurValue, setEurValue] = useState<number>(0);
  const [totalHuf, setTotalHuf] = useState<number>(10000); // Fixed total in HUF
  const [usdAssets, setUsdAssets] = useState<number>(1000); // Total assets in USD
  const [eurAssets, setEurAssets] = useState<number>(800); // Total assets in EUR
  const [hufAssets, setHufAssets] = useState<number>(0); // HUF assets

  // Calculate remaining HUF after deducting HUF assets
  const remainingHuf = totalHuf - hufAssets;

  // Calculate exchange rates dynamically
  const usdRate = (remainingHuf - eurValue * eurAssets) / usdAssets; // HUF per USD
  const eurRate = (remainingHuf - usdValue * usdAssets) / eurAssets; // HUF per EUR

  // Function to update USD value and adjust EUR value
  const updateUsdValue = (newUsdValue: number) => {
    const roundedUsdValue = parseFloat(newUsdValue.toFixed(2)); // Round to 2 decimal places
    setUsdValue(roundedUsdValue);
    const remainingAfterUsd = remainingHuf - roundedUsdValue * usdAssets;
    const newEurValue = parseFloat((remainingAfterUsd / eurAssets).toFixed(2)); // Round to 2 decimal places
    setEurValue(newEurValue);
  };

  // Function to update EUR value and adjust USD value
  const updateEurValue = (newEurValue: number) => {
    const roundedEurValue = parseFloat(newEurValue.toFixed(2)); // Round to 2 decimal places
    setEurValue(roundedEurValue);
    const remainingAfterEur = remainingHuf - roundedEurValue * eurAssets;
    const newUsdValue = parseFloat((remainingAfterEur / usdAssets).toFixed(2)); // Round to 2 decimal places
    setUsdValue(newUsdValue);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label>Total in HUF:</label>
        <input
          type="number"
          value={totalHuf}
          onChange={(e) => setTotalHuf(parseFloat(e.target.value))}
          className="total-huf-input" // Apply the custom class
        />
      </div>
      <div>
        <label>HUF Assets:</label>
        <input
          type="number"
          value={hufAssets}
          onChange={(e) => setHufAssets(parseFloat(e.target.value))}
          className="total-huf-input" // Apply the custom class
        />
      </div>
      <div>
        <label>USD Assets:</label>
        <input
          type="number"
          value={usdAssets}
          onChange={(e) => setUsdAssets(parseFloat(e.target.value))}
          className="total-huf-input" // Apply the custom class
        />
      </div>
      <div>
        <label>EUR Assets:</label>
        <input
          type="number"
          value={eurAssets}
          onChange={(e) => setEurAssets(parseFloat(e.target.value))}
          className="total-huf-input" // Apply the custom class
        />
      </div>
      <Slider
        label="USD"
        value={usdValue}
        onChange={updateUsdValue}
        fixedRate={usdRate}
      />
      <Slider
        label="EUR"
        value={eurValue}
        onChange={updateEurValue}
        fixedRate={eurRate}
      />
      <div>
        <h2>
          Calculated Total:{" "}
          {(usdValue * usdAssets + eurValue * eurAssets + hufAssets).toFixed(2)}{" "}
          HUF
        </h2>
      </div>
    </div>
  );
};

export default Home;
