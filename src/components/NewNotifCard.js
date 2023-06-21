const NewNotifCard = (props) =>{

    const priorityCodes = ["#f3f2f2", "#ffcccc"];
    const isPriorityIcon = ["none", "block"];

    return(
        <div id = 'newNotifCard' style = {{backgroundColor: priorityCodes[props.priority]}} >
            <p style = {{fontWeight: 800, color: '#4b4b4b', position: 'relative'}}>{props.title} <span style = {{position: 'absolute', right: 0, top: 0, margin: 0, color: '#ff8080' , display: isPriorityIcon[props.priority]}} className="material-symbols-rounded">error</span></p>
            <p>{props.description}</p>
        </div>
    );
}

export default NewNotifCard;