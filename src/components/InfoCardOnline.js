const InfoCardOnline = (props) => {

    return (
        <div id="infoCardOnline">
            <p style={{ color: '#8b8b8b', fontWeight: 800, margin: '1rem 0 0.5rem 2rem'}}>{props.outletName}</p>
            <div className = "infoCardContainer">
                <div className="cardColTitle">
                    <p>Total Sale </p>
                    <p>Partner Commission </p>
                    <p>Total GST Charged </p>
                    <p>Number of Orders </p>
                    <p>Online Rating </p>
                </div>
                <div className="cardColValue">
                    <p>{props.saleFig}</p>
                    <p>{props.partnerCommissionFig}</p>
                    <p>{props.saleGSTFig}</p>
                    <p>{props.numOfOrders}</p>
                    <p>{props.onlineRating}</p>
                </div>
            </div>
        </div>
    );
}

export default InfoCardOnline;