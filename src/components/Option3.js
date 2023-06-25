import SmallCard from "./SmallCard";
import PurchaseInfoList from './PurchaseInfoList';

const Option3 = () => {
  return (
    <div id="option3Page">
      <div id="option3Content">
        <p style={{ fontWeight: 800, margin: "0 0 3rem 0", fontSize: "25px", color: '#a6a6a6' }}>Purchases & Expenses</p>

        <div className="option3ContentContainer">
          <div className="option3ContentLeft">
            <div className="outstandingInfoContainer">
              <div className="outstandingInfoContainer-alignment">
                <SmallCard key="" title="" value='0' bgColor='#4b4b4b' color="#ffffff" width='12rem' height='15rem' margin='2rem 0 0 0' />
                <div className="outstandingStatus">
                  {/*All shops names and rent amount with paid/unpaid status for current month*/}
                </div>
              </div>
            </div>

          </div>

          <div className="option3ContentRight">
            <div className="option3ContentRight-headerCards">
              <SmallCard key="totalOutflow30" title="TOTAL OUTFLOW (LAST 1 YEAR)" value='0' width='31rem' height='16rem' margin='2rem 0 0 0' />
              <SmallCard key="totalOutstandingPayments" title="OUTSTANDING PAYMENTS TOTAL AMOUNT" value='0' width='31rem' height='16rem' margin='2rem 0 0 3rem' />
            </div>
            <div className="outstandingInfoContainer">
              <PurchaseInfoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Option3;  