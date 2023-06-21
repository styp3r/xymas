const PurchaseInfoItem = (props) => {

    const isPaidColorCode = ["#ccffcf", "#ffcccc"]

    let status = isPaidColorCode[0];

    if(props.isPaid === false){
        status = isPaidColorCode[1]
    } 

    return (
        <div id="purchaseInfoItem" style = {{backgroundColor: status}}>
            <div className="purchaseInfo-container">
                <div className="purchaseItem">
                    <div className="purchaseItem-spacing">{props.billDated}</div>
                    <div className="purchaseItem-spacing">{props.billVendorName}</div>
                    <div className="purchaseItem-spacing">{props.billNum}</div>
                    <div className="purchaseItem-spacing">{props.cgst}</div>
                    <div className="purchaseItem-spacing">{props.sgst}</div>
                    <div className="purchaseItem-spacing">{props.totalTax}</div>
                    <div className="purchaseItem-spacing">{props.billValue}</div>
                </div>
            </div>
        </div>
    );
}

export default PurchaseInfoItem;