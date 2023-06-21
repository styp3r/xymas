import SmallCard from "./SmallCard";
import PurchaseInfoList from './PurchaseInfoList';

const Option3 = () => {
  return (
    <div id="option3Page">
      <div id="option3Content">
        <p style={{ fontWeight: 800, margin: "0 0 3rem 0", fontSize: "25px", color: '#a6a6a6' }}>Purchases & Expenses</p>

        <div className="option3ContentContainer">
          <div className="option3ContentLeft">
            <SmallCard key="totalOutflow30" title="TOTAL OUTFLOW (LAST 1 YEAR)" value='0' width='15rem' height='16rem' margin='2rem 0 0 0' />
            <div className="rentInfoContainer">
              <div className="rentInfoContainer-alignment">
                <SmallCard key="totalRentPaidYearly" title="RENT PAYMENTS (LAST 1 YEAR)" value='0' bgColor='#4b4b4b' color="#ffffff" width='12rem' height='6rem' margin='2rem 0 0 0' />
                <div className="rentPaidStatus">
                  {/*All shops names and rent amount with paid/unpaid status for current month*/}
                </div>
              </div>
            </div>
          </div>

          <div className="option3ContentRight">
            <SmallCard key="totalOutstandingPayments" title="TOTAL OUTSTANDING PAYMENTS" value='0' width='33rem' height='16rem' margin='2rem 0 0 0' />
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