const ScrollCard = (props) => {
    return (
        <div className="scrollCard" style={{ width: props.width, height: props.height, margin: props.margin, background: props.bgColor, overflowY: props.overflow }}>
            <p className="scrollCardTitle" style = {{fontWeight: 800}} >{props.title}</p>
            <div className="outletStatusList">
                <div className="statusCard">
                    <p style={{ color: props.color, fontWeight: 800}}>BTM</p>
                    <p className="statusParams">Opened at: N/A</p>
                    <p className="statusParams">Closed at: N/A</p>
                    <p className="statusParams">Goods arrived at: N/A</p>
                    <p className="statusParams">Last visited: N/A</p>
                </div>
                <div className="statusCard">
                    <p style={{ color: props.color, fontWeight: 800}}>JBN</p>
                    <p className="statusParams">Opened at: N/A</p>
                    <p className="statusParams">Closed at: N/A</p>
                    <p className="statusParams">Goods arrived at: N/A</p>
                    <p className="statusParams">Last visited: N/A</p>
                </div>
                <div className="statusCard">
                    <p style={{ color: props.color, fontWeight: 800}}>EC2</p>
                    <p className="statusParams">Opened at: N/A</p>
                    <p className="statusParams">Closed at: N/A</p>
                    <p className="statusParams">Goods arrived at: N/A</p>
                    <p className="statusParams">Last visited: N/A</p>
                </div>
                <div className="statusCard">
                    <p style={{ color: props.color, fontWeight: 800}}>ORR</p>
                    <p className="statusParams">Opened at: N/A</p>
                    <p className="statusParams">Closed at: N/A</p>
                    <p className="statusParams">Goods arrived at: N/A</p>
                    <p className="statusParams">Last visited: N/A</p>
                </div>
                <div className="statusCard">
                    <p style={{ color: props.color, fontWeight: 800}}>MLL</p>
                    <p className="statusParams">Opened at: N/A</p>
                    <p className="statusParams">Closed at: N/A</p>
                    <p className="statusParams">Goods arrived at: N/A</p>
                    <p className="statusParams">Last visited: N/A</p>
                </div>
                <div className="statusCard">
                    <p style={{ color: props.color, fontWeight: 800}}>DDK</p>
                    <p className="statusParams">Opened at: N/A</p>
                    <p className="statusParams">Closed at: N/A</p>
                    <p className="statusParams">Goods arrived at: N/A</p>
                    <p className="statusParams">Last visited: N/A</p>
                </div>
                <div className="statusCard">
                    <p style={{ color: props.color, fontWeight: 800}}>VTR</p>
                    <p className="statusParams">Opened at: N/A</p>
                    <p className="statusParams">Closed at: N/A</p>
                    <p className="statusParams">Goods arrived at: N/A</p>
                    <p className="statusParams">Last visited: N/A</p>
                </div>
                <div className="statusCard">
                    <p style={{ color: props.color, fontWeight: 800}}>KNR</p>
                    <p className="statusParams">Opened at: N/A</p>
                    <p className="statusParams">Closed at: N/A</p>
                    <p className="statusParams">Goods arrived at: N/A</p>
                    <p className="statusParams">Last visited: N/A</p>
                </div>
                <div className="statusCard">
                    <p style={{ color: props.color, fontWeight: 800}}>HMU</p>
                    <p className="statusParams">Opened at: N/A</p>
                    <p className="statusParams">Closed at: N/A</p>
                    <p className="statusParams">Goods arrived at: N/A</p>
                    <p className="statusParams">Last visited: N/A</p>
                </div>
            </div>
        </div>
    );
}

export default ScrollCard;