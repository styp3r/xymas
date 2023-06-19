import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Radar, RadarChart, PolarAngleAxis, LineChart, BarChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SmallCard from './SmallCard';

const supabase = createClient('https://lgydkxizvydkathymrad.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxneWRreGl6dnlka2F0aHltcmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMTU5ODAsImV4cCI6MTk5OTc5MTk4MH0.nj-_Ft-7vGi22FnKEEfCh8eH5Cd3KimkjyOxagZsvHg');

const Option1 = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [selectedYear, setSelectedYear] = useState('2021');
  const [selectedMonth, setSelectedMonth] = useState('May');

  const [dataShopwise1, setDataShopwise1] = useState([]);

  const [sum, setSum] = useState(0);
  const [sum1, setSum1] = useState(0);

  const [notifNum, setNotifNum] = ('0');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  useEffect(() => {

    const fetchMonthlyData = async (selectedYear) => {
      try {
        const { data, error } = await supabase
          .from('monthlySale2023')
          .select('monthName, upi_figure, cash_figure, card_figure, total')
          .eq('year', selectedYear)
        if (error) {
          throw error;
        }
        setData(data);

        //Calculating sum of all 3 columns
        const upiValues = data.map((row) => row.upi_figure);
        const sumUpi = upiValues.reduce((acc, value) => acc + value, 0);

        const cashValues = data.map((row) => row.cash_figure);
        const sumCash = cashValues.reduce((acc, value) => acc + value, 0);

        const cardValues = data.map((row) => row.card_figure);
        const sumCard = cardValues.reduce((acc, value) => acc + value, 0);

        let finalSum = sumUpi + sumCash + sumCard;

        setSum(finalSum);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchDailyData = async (selectedMonth) => {
      let x = String(selectedMonth + selectedYear);
      try {
        const { data, error } = await supabase
          .from('dailySale2023')
          .select('created_at, upi_sale, cash_sale, card_sale')
          .eq('month', x)
        if (error) {
          throw error;
        }

        setData1(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchDailyData_MR = async () => {
      try {
        const { data, error } = await supabase
          .from('dailySale2023')
          .select('upi_sale, cash_sale, card_sale')
        if (error) {
          throw error;
        }

        //Calculating sum of all 3 columns
        const upiValues = data.map((row) => row.upi_sale);
        const sumUpi = upiValues.reduce((acc, value) => acc + value, 0);

        const cashValues = data.map((row) => row.cash_sale);
        const sumCash = cashValues.reduce((acc, value) => acc + value, 0);

        const cardValues = data.map((row) => row.card_sale);
        const sumCard = cardValues.reduce((acc, value) => acc + value, 0);

        let finalSum = sumUpi + sumCash + sumCard;
        setSum1(finalSum);

        setData1(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchShopwiseData = async () => {
      try {
        const { data, error } = await supabase
          .from('shopwisePerf')
          .select('avgMonthlySale, shopName')
        if (error) {
          throw error;
        }
        setDataShopwise1(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    {/*fetchMonthlyData(selectedYear);
    fetchDailyData(selectedMonth);
    fetchDailyData_MR();
  fetchShopwiseData(); */}

  }, [selectedYear, selectedMonth]);

  return (
    <div id="option1Page">
      <div id="option1Content">
        <div id = "option1TopBar">
          <p style={{ fontWeight: "bold", margin: "0 0 3rem 0", fontSize: "25px", color: '#a6a6a6' }}>XyMas Dashboard</p>
          <div id="notifications"><span class="material-symbols-rounded">notifications</span></div>
        </div>

        <div id="heroContainer">

          <div id="totalRevContainer">

            <div id="welcomeMessage">
              <p style={{ color: '#4b4b4b', fontSize: '3rem', fontWeight: 300 }} >Hello <span style={{ fontWeight: 700 }}>Navjyot</span></p>
              <p>Here are your latest updates. <span>You've got <span style={{ fontWeight: 700 }}>{notifNum}</span> notifications.</span></p>
            </div>

            <SmallCard key="totalSaleMonthly" title="TOTAL SALE (LAST 30 DAYS)" value={sum1} width='33rem' height='16rem' margin='0 0 1rem 0' bgColor='#ccfff2' color="#4b4b4b" />
            <SmallCard key="totalSaleYearly" title="TOTAL SALE (LAST 1 YEAR)" value={sum} width='33rem' height='16rem' margin='2rem 0 0 0' />
          </div>

          <div id="shopWisePerfContainer">
            <div className="shopWisePerformance">
              {/* insert radar chart for shopwise performance */}
              <p style={{ color: '#929292', margin: '2rem 12rem 2rem 0' }}>AVERAGE PERFORMANCE</p>
              <ResponsiveContainer width="80%" height="80%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataShopwise1}>
                  <PolarAngleAxis dataKey="shopName" />
                  <Radar name="Mike" dataKey="avgMonthlySale" fill="#9481b1" fillOpacity={1} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div id="shopStatus">
            <SmallCard key="liveShopStatus" title="OUTLET STATUS" width='16rem' height='52rem' margin='0 0 0 2.3rem' overflow="scroll" />
          </div>

        </div>

        <div id="monthlyRevOverview">
          <p style={{ color: "#8b8b8b", fontSize: "14px" }}>MONTHLY REVENUE OVERVIEW</p>
          <div id="revOverviewCard1">
            <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
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
                <XAxis dataKey="monthName" stroke="#8c8c8c" />
                <YAxis stroke="#8c8c8c" />
                <Tooltip contentStyle={{ borderRadius: '0.8rem' }} />
                <Legend verticalAlign="top" />
                <Line name="UPI" type="monotone" dataKey="upi_figure" stroke="#00ccff" strokeWidth={2} />
                <Line name="Cash" type="monotone" dataKey="cash_figure" stroke="#9933ff" strokeWidth={2} />
                <Line name="Card" type="monotone" dataKey="card_figure" stroke="#ff0066" strokeWidth={2} />
                <Line name="Total" type="monotone" dataKey="total" stroke="#009999" strokeWidth={8} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div id="dailyRevOverview">
          <p style={{ color: "#8b8b8b", fontSize: "14px" }}>DAILY REVENUE OVERVIEW</p>
          <div id="revOverviewCard2">
            <select id="monthSelect" value={selectedMonth} onChange={handleMonthChange}>
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
            {/* Your Option1 content */}
            <ResponsiveContainer id="revenueChart1" width="95%" height="70%">
              <BarChart
                width={400}
                height={100}
                data={data1}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="created_at" angle={-45} textAnchor="end" interval={0} height={70} stroke="#8c8c8c" />
                <YAxis stroke="#8c8c8c" />
                <Tooltip contentStyle={{ borderRadius: '0.8rem' }} />
                <Legend verticalAlign="top" />
                <Bar barSize={15} name="UPI" type="monotone" dataKey="upi_sale" fill="#00ccff" />
                <Bar barSize={15} name="Cash" type="monotone" dataKey="cash_sale" fill="#9933ff" />
                <Bar barSize={15} name="Card" type="monotone" dataKey="card_sale" fill="#ff0066" />
                <Bar barSize={8} name="Total" type="monotone" dataKey="total" fill="#009999" />
              </BarChart>
            </ResponsiveContainer>
          </div>
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