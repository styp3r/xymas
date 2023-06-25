const SmallCard = (props) =>{
    return(
        <div className = "smallCard" style ={{width: props.width, height : props.height, margin: props.margin, backgroundColor: props.bgColor, overflowY: props.overflow}}>
            <p className = "smallCardTitle" style = {{top: props.titleTop, left: props.titleLeft ,color: props.color, fontSize: props.fontSize, fontWeight: 800}}>{props.title}</p>
            <p className = "smallCardValue" style = {{bottom: props.valBottom, left: props.valLeft, color: props.color, fontSize: props.fontSize, fontWeight: 800}}>{props.value}</p>
        </div>
    );
}

export default SmallCard;