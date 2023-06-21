const InfoCardInstore = (props) => {

    return (
        <div id="infoCardInstore">
            <p style={{ color: '#8b8b8b', fontWeight: 800, margin: '1rem 0 0.5rem 2rem' }}>{props.outletName}</p>
            <div className="infoCardContainer">
                <div className="cardColTitle">
                    <p>Total Sale </p>
                    <p>Total GST Charged </p>
                    <p>Number of Orders </p>
                </div>
                <div className="cardColValue">
                    <p>{props.saleFig}</p>
                    <p>{props.saleGSTFig}</p>
                    <p>{props.numOfOrders}</p>
                </div>
            </div>
        </div>
    );
}

export default InfoCardInstore;