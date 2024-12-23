import Hero from '../components/home/hero';
import OutstandingProduct from '../components/home/outstandingProduct';
import SalePromotion from '../components/home/salePromotion';
import TopBrands from '../components/home/topBrands';

function AppHome() {
  return (
    <div className='container'>
      <Hero />
      <OutstandingProduct />
      <SalePromotion />
      <TopBrands />
    </div>
  );
}

export default AppHome;