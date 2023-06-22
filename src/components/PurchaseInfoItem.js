import React from 'react'
import supabase from './supabase';

const PurchaseInfoItem = (props) => {

    const isPaidColorCode = ["#ccffcf", "#ffcccc"];
    const isPaidStatus = ["Paid", "Pay"];
    const isPaidDisplay = ["none", "inline-block"];

    let code = isPaidColorCode[0];
    let message = isPaidStatus[0];
    let display = isPaidDisplay[0];

    let iden = props.uniqueItemCode;

    if (props.isPaid === 0) {
        code = isPaidColorCode[1];
        message = isPaidStatus[1];
        display = isPaidDisplay[1];
    }

    function handlePayItemClick(event) {
        console.log("updating" + event.target.attributes.uic.nodeValue);
        updatePaymentStatus(event.target.attributes.uic.nodeValue, "isPaid", 1);
        window.location.reload();
    }

    //update payment status

    const updatePaymentStatus = async (rowId, columnName, newValue) => {
        try {
            const { error } = await supabase
                .from("purchasesList")
                .update({ [columnName]: newValue })
                .eq('uniqueItemCode', rowId);
            if (error) {
                throw error;
            }

            console.log('Record updated successfully.');
        } catch (error) {
            console.error('Error updating record:', error);
        }
    };

    return (
        <div className="purchaseInfoItem" style={{ backgroundColor: code }}>
            <div className="purchaseInfo-container">
                <div id={iden} className="purchaseItem">
                    <div className="purchaseItem-spacing">{props.billDated}</div>
                    <div className="purchaseItem-spacing">{props.billVendorName}</div>
                    <div className="purchaseItem-spacing">{props.billNum}</div>
                    <div className="purchaseItem-spacing">{props.cgst}</div>
                    <div className="purchaseItem-spacing">{props.sgst}</div>
                    <div className="purchaseItem-spacing">{props.totalTax}</div>
                    <div className="purchaseItem-spacing">{props.billValue}</div>
                    <button id="paidStatus" uic={iden} style={{ display: display }} onClick={handlePayItemClick}>{message}</button>
                </div>
            </div>
        </div>
    );
}

export default PurchaseInfoItem;
