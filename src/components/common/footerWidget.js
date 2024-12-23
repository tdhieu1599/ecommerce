import { Col, Row } from 'antd';
import { List, Tag } from 'antd';

const dataCompany = [
  { text: 'Who We Are', link: '/' },
  { text: 'Our Mission & Values', link: '/' },
  { text: 'Behind the Brand', link: '/' },
  { text: 'Meet Our Team', link: '/' },
  { text: 'Why Choose Us', link: '/' },
  { text: 'Discover Our Story', link: '/' },
];

const dataPost = [
  { text: 'Top 5 Laptops for Students in 2024', link: '/' },
  { text: 'Refurbished vs New Laptops: Which is Right for You?', link: '/' },
  { text: 'Laptop Buying Guide: What to Look For in 2024', link: '/' },
  { text: 'Essential Accessories to Boost Your Laptop’s Performance', link: '/' },
  { text: 'How to Extend Your Laptop’s Battery Life: Tips and Tricks', link: '/' },
];

function FooterWidget() {
  return (
    <div className='footerWidget'>
      <div className="container">
        <Row gutter={[24, 24]}>
          {/* featured */}
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={8}>
            <h3>About our company</h3>
            <List
              size="small"
              className="recentPost"
              dataSource={dataCompany}
              renderItem={(item) => (
                <List.Item>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                </List.Item>
              )}
            />
          </Col>
          {/* tags */}
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={8}>
            <h3>Tags</h3>
            <div className='tags'>
              <Tag closable>
                <a href="https://www.lenovo.com/">Lenovo Thinkpad</a>
              </Tag>
              <Tag>
                <a href="https://www.asus.com/">Asus</a>
              </Tag>
              <Tag closable>
                <a href="https://www.gigabyte.com/vn">Gigabyte</a>
              </Tag>
              <Tag>
                <a href="https://www.dell.com/">Dell Latitude</a>
              </Tag>
              <Tag>
                <a href="https://www.apple.com/">iMac</a>
              </Tag>
              <Tag>
                <a href="https://www.acer.com/">Acer</a>
              </Tag>
            </div>
          </Col>
          {/* recent posts */}
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={8}>
            <h3>Recent posts</h3>
            <List
              size="small"
              className="recentPost"
              dataSource={dataPost}
              renderItem={(item) => (
                <List.Item>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FooterWidget;