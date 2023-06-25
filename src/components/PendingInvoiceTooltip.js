const PendingInvoiceTooltip = (props) => {
    return (
        <div className ="pendingInvoiceTooltip">
            <p>{props.billDated}</p>
        </div>
    );
}

export default PendingInvoiceTooltip;