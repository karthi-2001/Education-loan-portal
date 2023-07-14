import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./Analysis.css";

const Analysis = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenureYears, setTenureYears] = useState("");
  const [emi, setEmi] = useState(0);
  const [interest, setInterest] = useState(0);
  const [dueAmount, setDueAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [tenureMonths, setTenureMonths] = useState(0);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(tenureYears) * 12;
    const emiAmount = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalInterest = emiAmount * n - p;
    const due = emiAmount.toFixed(2) * n;
    const total = p + totalInterest;

    setEmi(emiAmount.toFixed(2));
    setInterest(totalInterest.toFixed(2));
    setDueAmount(due.toFixed(2));
    setTotalAmount(total.toFixed(2));
    setTenureMonths(n);
  };

  const COLORS = ["#0088FE", "#FF8042", "#db7093", "#40e0d0"];
  const data = [
    { name: "Principal", value: parseFloat(principal) },
    { name: "Interest", value: parseFloat(interest) },
    { name: "Due Amount", value: parseFloat(dueAmount) },
    { name: "Total Amount", value: parseFloat(totalAmount) },
  ];
  return (
    <div className="card" id="myCard">
      <div className="container" id="myContainer">
        <h2>PAYMENT</h2>
        <div>
          <label>Principal Amount:</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div>
          <label>Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div>
          <label>Tenure (years):</label>
          <input
            type="number"
            value={tenureYears}
            onChange={(e) => setTenureYears(e.target.value)}
          />
        </div>
        <button onClick={calculateEMI} className="analysis-button">Calculate</button>

        <table className="result-table">
          <tbody>
            <tr>
              <td>EMI:</td>
              <td>{emi}</td>
            </tr>
            <tr>
              <td>Total Interest:</td>
              <td>{interest}</td>
            </tr>
            <tr>
              <td>Due Amount:</td>
              <td>{dueAmount}</td>
            </tr>
            <tr>
              <td>Total Amount:</td>
              <td>{totalAmount}</td>
            </tr>
            <tr>
              <td>Tenure in Months:</td>
              <td>{tenureMonths}</td>
            </tr>
          </tbody>
        </table>

        <div className="chart-container">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
