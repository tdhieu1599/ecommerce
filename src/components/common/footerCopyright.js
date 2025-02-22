import { BackTop } from 'antd';

import payment from '../../assets/images/payment.png';

function FooterCopyright() {
  return(
    <div className="footerCopyright">
      <div className="container">
        <div className="copyright">©2024 Created by HieuTD</div>
        <div className="toTop"><img src={payment} alt="Payment" /></div>
      </div>
      <BackTop />
    </div>
  );
}

export default FooterCopyright;