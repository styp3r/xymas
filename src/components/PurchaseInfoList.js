import React, { useState, useEffect } from 'react'
import supabase from './supabase'
import PurchaseInfoItem from './PurchaseInfoItem';

const PurchaseInfoList = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [purchaseBillData, setPurchaseBillData] = useState(null);

    useEffect(() => {

        const fetchPurchaseBillInfo = async () => {
            try {
                const { data, error } = await supabase
                    .from('purchasesList')
                    .select('id, billDated, billVendorName, billNum, uniqueItemCode, cgst, sgst, totalTax, billValue, isPaid')
                if (error) {
                    throw error;
                }

                setPurchaseBillData(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        //fetchPurchaseBillInfo();
    }, []);

    return (
        <div id="purchaseInfoList">
            <div className="purchaseInfoList-container">
                <input className="billNumSearchbar" placeholder="Search Invoices by Date/Vendor/No."></input>
                <button className="billNumSearchBtn">Search</button>
                <button className="showUnpaidBtn">Show All Pending</button>
                <div className="purchaseItemTitle">
                        <div className="purchaseItemTitle-spacing">Date</div>
                        <div className="purchaseItemTitle-spacing">Vendor</div>
                        <div className="purchaseItemTitle-spacing">Invoice No.</div>
                        <div className="purchaseItemTitle-spacing">CGST</div>
                        <div className="purchaseItemTitle-spacing">SGST</div>
                        <div className="purchaseItemTitle-spacing">Total Tax</div>
                        <div className="purchaseItemTitle-spacing">Total</div>
                    </div>
                <div className="purchaseInfoList-list">
                    {/* Fetch purchase bill data from server and display as scrollable list */}
                    {isLoading ? (<p>Loading...</p>) : (purchaseBillData.map((pb) => <PurchaseInfoItem key={pb.uniqueItemCode} id = {pb.id} billDated={pb.billDated} billVendorName={pb.billVendorName} billNum={pb.billNum} uniqueItemCode = {pb.uniqueItemCode} cgst = {pb.cgst} sgst = {pb.sgst} totalTax = {pb.totalTax} billValue={pb.billValue} isPaid={pb.isPaid} />))}
                </div>

            </div>
        </div>
    );
}

export default PurchaseInfoList;