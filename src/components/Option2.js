import React, { useState, useEffect } from 'react';
import InfoCardOnline from './InfoCardOnline';
import InfoCardInstore from './InfoCardInstore';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://lgydkxizvydkathymrad.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxneWRreGl6dnlka2F0aHltcmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMTU5ODAsImV4cCI6MTk5OTc5MTk4MH0.nj-_Ft-7vGi22FnKEEfCh8eH5Cd3KimkjyOxagZsvHg');


const Option2 = () => {

    const [onlineSaleData, setOnlineSaleData] = useState([]);
    const [instoreSaleData, setInstoreSaleData] = useState([]);

    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);

    useEffect(() => {

        const fetchOnlineSaleInfo = async () => {
            try {
                const { data, error } = await supabase
                    .from('onlineSale30')
                    .select('id, outletName, onlineSaleFig, partnerCommissionFig, onlineSaleGSTFig, numOfOrders, onlineRating')
                if (error) {
                    throw error;
                }

                setOnlineSaleData(data);
                setIsLoading1(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const fetchInstoreSaleInfo = async () => {
            try {
                const { data, error } = await supabase
                    .from('instoreSale30')
                    .select('id, outletName, instoreSaleFig, instoreSaleGSTFig, numOfOrders')
                if (error) {
                    throw error;
                }

                setInstoreSaleData(data);
                setIsLoading2(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        //fetchOnlineSaleInfo();
        //fetchInstoreSaleInfo();
    }, []);


    return (
        <div id="option2Page">
            <div id="option2Content">
                <p style={{ fontWeight: 800, margin: "0 0 3rem 0", fontSize: "25px", color: '#a6a6a6' }}>Sales</p>

                <div id="onlineSale">
                    <p style={{ color: "#8b8b8b", fontSize: "14px", fontWeight: 800 }}>ONLINE SALE (LAST 30 DAYS)</p>
                    <div className="onlineSaleContainer">
                        {isLoading1 ? (<p>Loading...</p>) : (onlineSaleData.map((os) => <InfoCardOnline key={os.id} outletName={os.outletName} saleFig={os.onlineSaleFig} partnerCommissionFig={os.partnerCommissionFig} saleGSTFig={os.onlineSaleGSTFig} numOfOrders={os.numOfOrders} onlineRating={os.onlineRating} />))}
                    </div>
                </div>

                <div id="instoreSale">
                    <p style={{ color: "#8b8b8b", fontSize: "14px", fontWeight: 800 }}>IN-STORE SALE (LAST 30 DAYS)</p>
                    <div className="instoreSaleContainer">
                        {isLoading2 ? (<p>Loading...</p>) : (instoreSaleData.map((is) => <InfoCardInstore key={is.id} outletName={is.outletName} saleFig={is.instoreSaleFig} saleGSTFig={is.instoreSaleGSTFig} numOfOrders={is.numOfOrders} />))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Option2;