import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import SaleInsight from './SaleInsight';

const supabase = createClient('https://lgydkxizvydkathymrad.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxneWRreGl6dnlka2F0aHltcmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMTU5ODAsImV4cCI6MTk5OTc5MTk4MH0.nj-_Ft-7vGi22FnKEEfCh8eH5Cd3KimkjyOxagZsvHg');

const Option1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchInitialData();
    }, []);

    const fetchInitialData = async () => {
        try {
            const { data, error } = await supabase
                .from('dailyUPISale')
                .select('created_at, upi_sale_figure');
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
            <p style ={{fontWeight: "bold", margin: "1rem 0 3rem 0", fontSize: "25px"}}>Dashboard</p>
            <p style ={{color: "#8b8b8b", fontSize: "14px"}}>Revenue Overview</p>
            <div id="option1Content">
                <div id="saleCard">
                    {/* Your Option1 content */}
                    {data.map((sale) => (
                        <SaleInsight key={sale.id} date={sale.created_at} amt={sale.upi_sale_figure} />
                    ))}
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