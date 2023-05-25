import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const supabase = createClient('https://lgydkxizvydkathymrad.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxneWRreGl6dnlka2F0aHltcmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMTU5ODAsImV4cCI6MTk5OTc5MTk4MH0.nj-_Ft-7vGi22FnKEEfCh8eH5Cd3KimkjyOxagZsvHg');

const Option1 = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('2021');

  useEffect(() => {
    fetchInitialData(selectedYear);
  }, [selectedYear]);

  const fetchInitialData = async (selectedYear) => {
    try {
      const { data, error } = await supabase
        .from('monthlySale2023')
        .select('monthName, upi_figure, cash_figure, card_figure')
        .eq('year', selectedYear)
      if (error) {
        throw error;
      }
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };


  return (
    <div id="option1Page">
      <p style={{ fontWeight: "bold", margin: "1rem 0 3rem 0", fontSize: "25px" }}>Dashboard</p>
      <p style={{ color: "#8b8b8b", fontSize: "14px" }}>Revenue Overview</p>
      <div id="option1Content">
        <div id="saleCard">
        <select id="year" value={selectedYear} onChange={handleYearChange}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
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
              <XAxis dataKey="monthName"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Line name = "UPI Sale" type="monotone" dataKey="upi_figure" stroke="#002E6E" activeDot={{ r: 8 }} />
              <Line name = "Cash Sale" type="monotone" dataKey="cash_figure" stroke="#00cc00" activeDot={{ r: 8 }} />
              <Line name = "Card Sale" type="monotone" dataKey="card_figure" stroke="#8884d8" activeDot={{ r: 8 }} />
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