import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const supabase = createClient('https://lgydkxizvydkathymrad.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxneWRreGl6dnlka2F0aHltcmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMTU5ODAsImV4cCI6MTk5OTc5MTk4MH0.nj-_Ft-7vGi22FnKEEfCh8eH5Cd3KimkjyOxagZsvHg');

const Option1 = () => {
  const [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("May");

  useEffect(() => {
    fetchInitialData();
  });

  const fetchInitialData = async () => {
    try {
      const { data, error } = await supabase
        .from('dailySale')
        .select('created_at, upi_sale, cash_sale, card_sale')
        .eq('month', selectedMonth)
      if (error) {
        throw error;
      }
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div id="option1Page">
      <p style={{ fontWeight: "bold", margin: "1rem 0 3rem 0", fontSize: "25px" }}>Dashboard</p>
      <p style={{ color: "#8b8b8b", fontSize: "14px" }}>Revenue Overview</p>
      <div id="option1Content">
        <div id="saleCard">
          <select id="selectMonth" defaultValue={"May"}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>

          <button type="selectMonthBtn" onClick= {()=>{let m = document.getElementById("selectMonth").value; setSelectedMonth(m)}}>Try it</button>
          {/* Your Option1 content */}
          <ResponsiveContainer id="revenueChart" width="95%" height="70%">
            <LineChart
              width={400}
              height={100}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="created_at" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line name="UPI Sale" type="monotone" dataKey="upi_sale" stroke="#002E6E" activeDot={{ r: 8 }} />
              <Line name="Cash Sale" type="monotone" dataKey="cash_sale" stroke="#00cc00" activeDot={{ r: 8 }} />
              <Line name="Card Sale" type="monotone" dataKey="card_sale" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Option1;


/*

const insertRecord = async () => {
    try {
      const { data, error } = await supabase
        .from('your_table_name')
        .insert([{ column_name: 'value' }]);
      if (error) {
        throw error;
      }
      setData((prevData) => [...prevData, ...data]);
      console.log('Record inserted successfully.');
    } catch (error) {
      console.error('Error inserting record:', error);
    }
  };

  const updateRecord = async (id, newData) => {
    try {
      const { data, error } = await supabase
        .from('your_table_name')
        .update(newData)
        .eq('id', id);
      if (error) {
        throw error;
      }
      setData((prevData) =>
        prevData.map((item) => (item.id === id ? { ...item, ...newData } : item))
      );
      console.log('Record updated successfully.');
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  const deleteRecord = async (id) => {
    try {
      const { error } = await supabase
        .from('your_table_name')
        .delete()
        .eq('id', id);
      if (error) {
        throw error;
      }
      setData((prevData) => prevData.filter((item) => item.id !== id));
      console.log('Record deleted successfully.');
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

*/