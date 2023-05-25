import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://lgydkxizvydkathymrad.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxneWRreGl6dnlka2F0aHltcmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMTU5ODAsImV4cCI6MTk5OTc5MTk4MH0.nj-_Ft-7vGi22FnKEEfCh8eH5Cd3KimkjyOxagZsvHg');


const FetchMonthlySale2023Chart = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchInitialData(); // Fetch initial data without any dependencies
    }, []);

    const fetchInitialData = async () => {
        try {
            const { data, error } = await supabase
                .from('monthlySale2023')
                .select('monthName, upi_figure, cash_figure, card_figure')
            if (error) {
                throw error;
            }
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
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
                <XAxis dataKey="monthName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line name="UPI Sale" type="monotone" dataKey="upi_figure" stroke="#002E6E" activeDot={{ r: 8 }} />
                <Line name="Cash Sale" type="monotone" dataKey="cash_figure" stroke="#00cc00" activeDot={{ r: 8 }} />
                <Line name="Card Sale" type="monotone" dataKey="card_figure" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default FetchMonthlySale2023Chart;