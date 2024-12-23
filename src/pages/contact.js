import { Button, Form, Input, Select, message } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

function AppContact() {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
      >
        <Option value="+83">+83</Option>
        <Option value="+84">+84</Option>
        <Option value="+85">+85</Option>
        <Option value="+86">+86</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    console.log('Thành công:', values);
    message.success('Gửi thông tin thành công');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Lỗi: ', errorInfo);
    message.error('Vui lòng điền đủ thông tin');
  };

  return (
    <div className="block contactPage">
      <div className="container">
        <h2>Contact</h2>
        <Form
          name="basic"
          initialValues={{
            prefix: "+84",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
          <Form.Item
            label="Fullname"
            name="fullname"
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ họ tên' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: 'Vui lòng nhập số điện thoại!' },
              { pattern: /^\d{9,11}$/, message: 'Số điện thoại có 9-11 kí tự!' }
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Vui lòng nhập thông tin!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppContact;
