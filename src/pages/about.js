import { Tabs } from 'antd';

import aboutBanner from '../assets/images/banner.png';

const { TabPane } = Tabs;

function AppAbout() {
  return (
    <div className="block aboutPage">
      <div className="container">
        <h2>About</h2>
        <div className='bannerImage'>
          <img src={aboutBanner} alt="banner" />
        </div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Về chúng tôi" key="1">
            <p>Gigalaptop là cửa hàng chuyên cung cấp các dòng laptop chất lượng cao từ các thương hiệu hàng đầu thế giới. Chúng tôi tự hào mang đến cho khách hàng những sản phẩm chính hãng, đa dạng về mẫu mã, cấu hình và đáp ứng mọi nhu cầu, từ học tập, làm việc đến giải trí và thiết kế đồ họa chuyên nghiệp.</p>

            <p>Với đội ngũ tư vấn viên tận tâm và giàu kinh nghiệm, Gigalaptop cam kết hỗ trợ khách hàng lựa chọn được chiếc laptop tối ưu nhất với ngân sách hợp lý. Không chỉ dừng lại ở việc bán hàng, chúng tôi còn cung cấp các dịch vụ hậu mãi uy tín, từ bảo hành, sửa chữa đến nâng cấp máy, đảm bảo thiết bị của bạn luôn hoạt động trong trạng thái tốt nhất.</p>
          </TabPane>
          <TabPane tab="Cơ hội đầu tư" key="2">
            <p>Gigalaptop luôn chào đón cơ hội hợp tác từ các nhà đầu tư để cùng phát triển bền vững. Chúng tôi cam kết mang đến giá trị lâu dài thông qua những chiến lược mở rộng và nâng cao chất lượng dịch vụ.</p>
            <ul>
              <li>Tăng trưởng bền vững: Gigalaptop hướng tới việc mở rộng thị trường, cải tiến trải nghiệm khách hàng và đảm bảo sự phát triển ổn định cho các đối tác đầu tư.</li>
              <li>Đầu tư công nghệ: Chúng tôi liên tục cập nhật công nghệ và tối ưu hóa quy trình kinh doanh, mang đến hiệu quả cao và tính cạnh tranh bền vững cho doanh nghiệp.</li>
              <li>Minh bạch và trách nhiệm: Gigalaptop cam kết minh bạch trong tài chính và trách nhiệm trong quản lý, tạo nên nền tảng tin cậy cho mọi nhà đầu tư.</li>
            </ul>
          </TabPane>
          <TabPane tab="Về con người" key="3">
            <p>Gigalaptop tin rằng nhân viên là tài sản quý giá nhất của công ty. Chúng tôi luôn tìm kiếm những cá nhân tài năng, đam mê và không ngừng học hỏi để gia nhập đội ngũ. Tại đây, bạn sẽ có cơ hội làm việc trong môi trường chuyên nghiệp, được đào tạo và phát triển kỹ năng, từ đó mở rộng con đường sự nghiệp. Nếu bạn muốn tham gia vào hành trình phát triển cùng Gigalaptop, hãy xem các vị trí tuyển dụng của chúng tôi và ứng tuyển ngay hôm nay!</p>
            <p>Hãy đến với Gigalaptop để trải nghiệm công nghệ đỉnh cao, dịch vụ khách hàng hoàn hảo và môi trường làm việc đầy hứng khởi!</p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default AppAbout;