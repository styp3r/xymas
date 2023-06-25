import SmallCard from "./SmallCard";
import PurchaseInfoList from './PurchaseInfoList';
import PendingInvoiceTooltip from './PendingInvoiceTooltip'

const Option3 = () => {
  return (
    <div id="option3Page">
      <div id="option3Content">
        <p style={{ fontWeight: 800, margin: "0 0 3rem 0", fontSize: "25px", color: '#a6a6a6' }}>Purchases & Expenses</p>

        <div className="option3ContentContainer">
          <div className="option3ContentLeft">
            <div className="outstandingInfoContainer">
              <div className="outstandingInfoContainer-alignment">
                <SmallCard key="numOfOutstanding" title="NO. OF OUTSTANDING PAYMENTS" value='0' bgColor='#4b4b4b' color="#ffffff" width='12rem' height='7rem' titleTop="1.5rem" titleLeft="1.5rem" valBottom="1rem" valLeft="1.5rem" fontSize="12px" margin='2rem 0 0 0' />
                <p style={{ color: '#929292', fontWeight: 800, fontSize: '12px', margin: '2rem 0 0 0' }} >DATE AS ON INVOICE:</p>
                {/* map <PendingInvoiceTooltip/> from server*/}
                <div className="pendingInvoice-scrollableContainer">
                  <PendingInvoiceTooltip billDated="15/04/1998" />
                </div>
              </div> 
            </div>

          </div>

          <div className="option3ContentRight">
            <div className="option3ContentRight-headerCards">
              <SmallCard key="totalOutstandingPayments" title="OUTSTANDING PAYMENTS TOTAL AMOUNT" value='0' width='31rem' height='16rem' margin='2rem 0 0 0' />
              <SmallCard key="totalOutflow30" title="TOTAL OUTFLOW (LAST 1 YEAR)" value='0' width='31rem' height='16rem' margin='2rem 0 0 3rem' />
            </div>
            <PurchaseInfoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Option3;  