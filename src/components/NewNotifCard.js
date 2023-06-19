const NewNotifCard = (props) =>{
    return(
        <div id = 'newNotifCard'>
            <p style = {{fontWeight: 800, color: '#4b4b4b'}}>{props.title}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default NewNotifCard;