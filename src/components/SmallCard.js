const SmallCard = (props) =>{
    return(
        <div id = {props.key} className = "smallCard" style ={{width: props.width, height : props.height, margin: props.margin, backgroundColor: props.bgColor, overflowY: props.overflow}}>
            <p className = "smallCardTitle" style = {{color: props.color}}>{props.title}</p>
            <p className = "smallCardValue" style = {{color: props.color}}>{props.value}</p>
        </div>
    );
}

export default SmallCard;