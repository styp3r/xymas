const SmallCard = (props) =>{
    return(
        <div id = "smallCard" className = "smallCard" style ={{width: props.width, height : props.height, margin: props.margin}}>
            <p className = "smallCardTitle">{props.title}</p>
            <p className = "smallCardValue">{props.value}</p>
        </div>
    );
}

export default SmallCard;