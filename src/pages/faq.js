import { Collapse } from 'antd';
const { Panel } = Collapse;

function AppFAQ() {
  return (
    <div className='block faqPage'>
      <div className='container'>
        <h2>FAQs</h2>
        <Collapse accordion defaultActiveKey={['1']}>
          <Panel header=" What types of laptops do you offer?" key="1">
            <p>We offer a wide range of laptops, including models suited for gaming, business, students, creative professionals, and general-purpose use. Brands include top manufacturers like Apple, Dell, HP, Lenovo, and more.</p>
          </Panel>
          <Panel header="Do you offer refurbished or used laptops?" key="2">
            <p>Yes, we offer both new and certified refurbished laptops. Our refurbished laptops go through extensive testing to ensure quality and come with a warranty.</p>
          </Panel>
          <Panel header="Do you provide financing or payment plans?" key="3">
            <p>Yes, we offer financing options to make it easier to buy the laptop that suits your needs. Ask our staff for more information on available payment plans.</p>
          </Panel>
          <Panel header="What warranties are available for laptops?" key="4">
            <p>All new laptops come with a manufacturer's warranty, typically lasting one year. We also offer extended warranty options for additional coverage, including accidental damage protection.</p>
          </Panel>
          <Panel header="Can I upgrade my laptop here?" key="5">
            <p>Absolutely! We offer a range of upgrade services, such as increasing RAM, replacing hard drives with SSDs, and upgrading operating systems. Visit our store for a consultation on possible upgrades for your laptop.</p>
          </Panel>
          <Panel header="Can I order online and pick up in-store?" key="6">
            <p>Yes, we offer the convenience of online ordering with in-store pickup. Just select the option at checkout, and we’ll notify you when your laptop is ready for pickup.</p>
          </Panel>
          <Panel header="How can I get help with setting up my new laptop?" key="7">
            <p>We provide setup services to help you get started with your new laptop, including software installation, account setup, and data transfer. Just ask a team member when you make your purchase.</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default AppFAQ;