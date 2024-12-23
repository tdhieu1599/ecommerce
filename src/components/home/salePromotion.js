import { Col, Row, Button } from 'antd';

const products = [
  {
    key: '1',
    image: require('../../assets/images/promotion-img1.png'),
    title: 'Giảm Giá Sốc Laptop Gaming – Sở Hữu Cấu Hình Khủng, Giá Cực Hời!',
  },
  {
    key: '2',
    image: require('../../assets/images/promotion-img2.png'),
    title: 'Giảm Giá 50% Màn Hình – Cơ Hội Sở Hữu Ngay Hôm Nay!',
  },
  {
    key: '3',
    image: require('../../assets/images/promotion-img3.png'),
    title: 'Nhà Táo – Giảm Giá Cực Sốc Cho Fan Apple!',
  }
]

function SalePromotion() {
  return (
    <div className="block products separator">
      <h2>Thông tin khuyến mãi</h2>
      <Row gutter={[24]}>
        {products.map(product => {
          return (
            <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} key={product.key}>
              <div className="content">
                <div className="image">
                  <img src={product.image} alt="product" />
                </div>
                <h3>{product.title}</h3>

                <div className='promotion-btn'>
                  <Button type="primary">Xem chương trình khuyến mãi</ Button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default SalePromotion;