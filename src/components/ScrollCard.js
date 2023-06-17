const ScrollCard = (props) =>{
    return(
        <div id = {props.key} className = "scrollCard" style ={{width: props.width, height : props.height, margin: props.margin, background: props.bgColor, overflowY: props.overflow}}>
            <p className = "smallCardTitle" style = {{color: props.color}}>{props.title}</p>
            {/*CHANGE THIS TO SCROLLABLE CONTENT
            <p className = "smallCardValue" style = {{color: props.color}}>{props.value}</p>*/}
        </div>
    );
}

export default ScrollCard;