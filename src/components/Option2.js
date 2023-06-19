import ShopCard from './ShopCard';

const Option2 = () => {
    return (
        <div id="option2Page">
            <p style={{ fontWeight: 800, margin: "0 0 3rem 0", fontSize: "25px", color: '#a6a6a6' }}>Option2 Page</p>
            <div id="onlineSale">
                <ShopCard key="onlineSaleBTM" width="85%" height="20rem" margin="2rem 0 1rem 1rem" />
                <ShopCard key="onlineSaleEC2" width="85%" height="20rem" margin="2rem 0 1rem 1rem" />
                <ShopCard key="onlineSaleVTR" width="85%" height="20rem" margin="2rem 0 1rem 1rem" />
                <ShopCard key="onlineSaleORR" width="85%" height="20rem" margin="2rem 0 1rem 1rem" />
                <ShopCard key="onlineSaleMLL" width="85%" height="20rem" margin="2rem 0 1rem 1rem" />
                <ShopCard key="onlineSaleDDK" width="85%" height="20rem" margin="2rem 0 1rem 1rem" />
                <ShopCard key="onlineSaleJBN" width="85%" height="20rem" margin="2rem 0 1rem 1rem" />
                <ShopCard key="onlineSaleKNR" width="85%" height="20rem" margin="2rem 0 1rem 1rem" />
                <ShopCard key="onlineSaleHMU" width="85%" height="20rem" margin="2rem 0 1rem 1rem" />
            </div>
        </div>
    );
}

export default Option2;