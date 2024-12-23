import { Col, Row, Button } from 'antd';

const products = [
  {
    key: '1',
    image: require('../../assets/images/img1.png'),
    title: 'Laptop Acer Swift Go 14 AI SFG14 73 53X7 Ultra 5'
  },
  {
    key: '2',
    image: require('../../assets/images/img2.png'),
    title: 'Dell Latitude 7520'
  },
  {
    key: '3',
    image: require('../../assets/images/img3.png'),
    title: 'Dell precision 7550 & Monitor'
  },
  {
    key: '4',
    image: require('../../assets/images/img4.png'),
    title: 'Swift Go 14'
  }
]

function OutstandingProduct() {
  return (
    <div className="block products">
      <h2>Sản phẩm nổi bật</h2>
      <Row gutter={[24, 24]}>
        {products.map(product => {
          return (
            <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 12 }} key={product.key}>
              <div className="content">
                <div className="image">
                  <img src={product.image} alt="product" />
                </div>
                <h3>{product.title}</h3>
                <Button type="primary">Xem chi tiết</Button>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default OutstandingProduct;