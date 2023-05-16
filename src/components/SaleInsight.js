const SaleInsight = (props) =>{
    return (
        <div id = "saleInsight">
            <p id = {props.key}>{props.date} - Rs. {props.amt}</p>
        </div>
    );
}

export default SaleInsight;