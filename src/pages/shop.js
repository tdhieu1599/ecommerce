import { Col, Row, Button, Menu, Dropdown, Modal, Input, message } from 'antd';
import { ShoppingCartOutlined, } from '@ant-design/icons';
import { useState } from 'react';

function AppShop() {


  // State quản lý sản phẩm
  const [products, setProducts] = useState([
    {
      key: '1',
      image: require('../assets/images/laptop/asus/asus1.png'),
      title: 'ROG Zephyrus G14 GA403UV-QS171W',
      price: '14490000đ'
    },
    {
      key: '2',
      image: require('../assets/images/laptop/asus/asus2.png'),
      title: 'Asus Expertbook b1 b1402cva-nk0062w',
      price: '19690000đ'
    },
    {
      key: '3',
      image: require('../assets/images/laptop/asus/asus3.png'),
      title: 'Asus Zenbook 14x Oled Space Edition',
      price: '18490000đ'
    },
    {
      key: '4',
      image: require('../assets/images/laptop/asus/asus4.png'),
      title: 'Asus Tuf Dash f15 i5 12th gen rtx 3050',
      price: '17200000đ'
    },
    {
      key: '5',
      image: require('../assets/images/laptop/asus/asus5.png'),
      title: 'Dell Vostro 3400 i7 1165g7 (v4i7015w1)',
      price: '16890000đ'
    },
    {
      key: '6',
      image: require('../assets/images/laptop/asus/asus6.png'),
      title: 'Dell XPS 9315 2 in 1 2023 ',
      price: '12290000đ'
    },
    {
      key: '7',
      image: require('../assets/images/laptop/dell/dell1.png'),
      title: 'Dell Latitude 7420 i7 16gb 512gb',
      price: '14590000đ'
    },
    {
      key: '8',
      image: require('../assets/images/laptop/dell/dell3.png'),
      title: 'Laptop Dell Inspiron 15 3520 i5 1235u',
      price: '21090000đ'
    }
    ,
    {
      key: '9',
      image: require('../assets/images/laptop/dell/dell4.png'),
      title: 'Dell Vostro 14 5410 i5 12th generation',
      price: '17790000đ'
    },
    {
      key: '10',
      image: require('../assets/images/laptop/hp/hp1.png'),
      title: 'Laptop HP Victus 15-fa0033dx (9t9r8ua)',
      price: '16690000đ'
    },
    {
      key: '11',
      image: require('../assets/images/laptop/hp/hp2.png'),
      title: 'Laptop HP Envy x360 13-Bf0090tu 76b13pa',
      price: '11590000đ'
    },
    {
      key: '12',
      image: require('../assets/images/laptop/hp/hp3.png'),
      title: 'Laptop HP Envy15-fe0013dx (Core i5-1335U/Ram 8GB/SSD 256GB/15.6 inch FHD touch /Natural Silver)',
      price: '9590000đ'
    },
    {
      key: '13',
      image: require('../assets/images/laptop/hp/hp4.png'),
      title: 'Laptop HP Pavilion 14 DV2073TU i5 1235u/16gb/512gb/win11 (7c0p2pa)',
      price: '11990000đ'
    },
    {
      key: '14',
      image: require('../assets/images/laptop/hp/hp6.png'),
      title: 'Laptop HP Elitebook 630 G10 i7 1355U/16GB/512GB/Win11 (873F2PA) đ',
      price: '18990000đ'
    },
  ]);

  // State quản lý giỏ hàng
  const [cart, setCart] = useState([]);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);

  // Thêm sp vào giỏ

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.key === product.key);
    if (existingProduct) {
      // Nếu sp đã có, tăng số lượng
      const updatedCart = cart.map((item) =>
        item.key === product.key
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Nếu sp chưa có -> thêm
      setCart([...cart, { ...product, quantity: 1 }])
    }
    message.success(`${product.title} đã được thêm vào giỏ hàng!`);
  }


  // Toggle giỏ hàng
  const toggleShowCart = () => {
    setIsCartModalVisible(!isCartModalVisible);
  };

  // Xóa sp khỏi giỏ
  const handleRemoveFromCart = (key) => {
    setCart(cart.filter((item) => item.key !== key));
    message.error("Sản phẩm đã được xóa khỏi giỏ hàng");
  };

  // Tăng số lượng sp trong giỏ
  const handleIncreaseQuantity = (key) => {
    const updatedCart = cart.map((item) =>
      item.key === key
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  }

  // Giảm số lượng sp trong giỏ
  const handleDecreaseQuantity = (key) => {
    const updatedCart = cart.map((item) =>
      item.key === key && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  }

  // Tổng tiền
  const totalPrice = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('đ', '')) * item.quantity,
    0
  );

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <button onClick={() => handleSort('1')}>
              Featured
            </button>
          ),
        },
        {
          key: '2',
          label: (
            <button onClick={() => handleSort('2')}>
              Price: Low to High
            </button>
          ),
        },
        {
          key: '3',
          label: (
            <button onClick={() => handleSort('3')}>
              Price: High to Low
            </button>
          ),
        },
      ]}
    />
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);

  const handleDelete = (key) => {
    Modal.confirm({
      title: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
      content: 'Hành động này không thể hoàn tác.',
      okText: 'Xóa',
      okType: 'danger',
      cancelText: 'Hủy',
      onOk() {
        const updatedProducts = products.filter((product) => product.key !== key);
        setProducts(updatedProducts);
        message.success('Sản phẩm đã được xóa thành công');
      },
    });
  };

  const [newProduct, setNewProduct] = useState({
    key: '',
    image: '',
    title: '',
    price: '',
  });
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const showAddModal = () => {
    setNewProduct({
      key: `${products.length + 1}`,
      image: '',
      title: '',
      price: '',
    });
    setIsAddModalVisible(true);
  };

  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.price || !newProduct.image) {
      message.error("Please fill out all fields!");
      return;
    }

    const priceNumber = parseFloat(newProduct.price.replace('đ', ''));
    if (isNaN(priceNumber) || priceNumber < 0) {
      message.error("Please enter a valid price!");
      return;
    }

    setProducts([...products, newProduct]);
    setIsAddModalVisible(false);
    message.success("Sản phẩm mới đã được thêm thành công");
  };

  const showEditModal = (product) => {
    setEditedProduct(product);
    setIsModalVisible(true);
  };

  const handleSort = (key) => {
    let sortedProducts;
    if (key === '1') {
      sortedProducts = [...products];
    } else if (key === '2') {
      // Sort price from low to high
      sortedProducts = [...products].sort((a, b) => parseFloat(a.price.replace('đ', '')) - parseFloat(b.price.replace('đ', '')));
    } else if (key === '3') {
      // Sort price from high to low
      sortedProducts = [...products].sort((a, b) => parseFloat(b.price.replace('đ', '')) - parseFloat(a.price.replace('đ', '')));
    }
    setProducts(sortedProducts);
  };

  const handleOk = () => {
    if (!editedProduct.title || !editedProduct.price || !editedProduct.image) {
      message.error("Please fill out all fields!");
      return;
    }

    const priceNumber = parseFloat(editedProduct.price.replace('đ', ''));
    if (isNaN(priceNumber) || priceNumber < 0) {
      message.error("Please enter a valid price!");
      return;
    }

    const updatedProducts = products.map((product) =>
      product.key === editedProduct.key ? editedProduct : product
    );
    setProducts(updatedProducts);
    setIsModalVisible(false);
    message.success("Cập nhật sản phẩm thành công");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditedProduct(null);
  };

  const handleInputChange = (e, field) => {
    if (field === 'image') {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setEditedProduct((prevProduct) => ({ ...prevProduct, image: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      const value = e.target.value;
      setEditedProduct((prevProduct) => ({ ...prevProduct, [field]: value }));
    }
  };


  return (
    <div className='block products shopPage'>
      <div className='container'>
        <div className='titleHolder'>
          <h2>Our products</h2>
          <Button type="primary" className='add-btn' onClick={showAddModal}>+ ADD NEW PRODUCT</Button>
        </div>
        <div className='feature-icon'>
          <Dropdown overlay={menu} placement="bottomLeft" className='filter'>
            <Button>Sort by</Button>
          </Dropdown>

          <Button
            type="primary"
            className='cart-icon'
            onClick={toggleShowCart}>
            <ShoppingCartOutlined /> ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </Button>

        </div>
        <Row gutter={[24, 24]}>
          {products.map(product => {
            return (
              <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key}>
                <div className="content">
                  <div className="image">
                    <img src={product.image} alt="product" />
                  </div>
                  <h3>{product.title}</h3>
                  <div className='price'>{product.price}</div>
                  <Button type="primary" onClick={() => handleAddToCart(product)}>Add to cart</Button>
                  <Button type="primary" onClick={() => showEditModal(product)}>
                    Sửa
                  </Button>
                  <Button type="primary" danger onClick={() => handleDelete(product.key)}>
                    Xóa
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      {/* Modal edit product */}
      <Modal title="Edit Product" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <Input
            value={editedProduct?.title}
            onChange={(e) => handleInputChange(e, 'title')}
            placeholder="Product Title"
            style={{ marginBottom: '10px' }}
          />
          <Input
            value={editedProduct?.price}
            onChange={(e) => handleInputChange(e, 'price')}
            placeholder="Product Price"
            style={{ marginBottom: '10px' }}
          />
          <Input
            type="file"
            onChange={(e) => handleInputChange(e, 'image')}
            accept="image/*"
            style={{ marginBottom: '10px' }}
          />
          {editedProduct?.image && (
            <img src={editedProduct.image} alt="Selected" style={{ width: '100px', height: 'auto', marginTop: '10px' }} />
          )}
        </div>
      </Modal>

      {/* Modal thêm sản phẩm mới */}
      <Modal
        title="Add New Product"
        visible={isAddModalVisible}
        onOk={handleAddProduct}
        onCancel={() => setIsAddModalVisible(false)}
      >
        <div>
          <Input
            value={newProduct.title}
            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            placeholder="Product Title"
            style={{ marginBottom: '10px' }}
          />
          <Input
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            placeholder="Product Price"
            style={{ marginBottom: '10px' }}
          />
          <Input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  setNewProduct({ ...newProduct, image: reader.result });
                };
                reader.readAsDataURL(file);
              }
            }}
            accept="image/*"
            style={{ marginBottom: '10px' }}
          />
          {newProduct.image && (
            <img src={newProduct.image} alt="Selected" style={{ width: '100px', height: 'auto', marginTop: '10px' }} />
          )}
        </div>
      </Modal>

      {/* Modal giỏ hàng */}
      <Modal
        title="Giỏ hàng"
        visible={isCartModalVisible}
        onOk={toggleShowCart}
        onCancel={toggleShowCart}
        footer={null}
      >
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div
                key={item.key}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '50px', height: 'auto' }}
                  />
                  <div>
                    <div>{item.title}</div>
                    <div>Giá: {item.price}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Button
                        type="default"
                        onClick={() => handleDecreaseQuantity(item.key)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span>{item.quantity}</span>
                      <Button type="default" onClick={() => handleIncreaseQuantity(item.key)}>
                        +
                      </Button>
                    </div>
                    <div>
                      Thành tiền: {(parseFloat(item.price.replace('đ', '')) * item.quantity)}đ
                    </div>
                  </div>
                </div>
                <Button danger onClick={() => handleRemoveFromCart(item.key)}>
                  Xóa
                </Button>
              </div>
            ))}
            <div style={{ fontWeight: 'bold', marginTop: '10px', textAlign: 'right' }}>
              Tổng đơn hàng: {totalPrice}đ
            </div>

            <div
              style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>

              <Button
                type="primary"
                onClick={() => {
                  message.success("Cảm ơn bạn đã mua hàng!");
                  setCart([]);
                  setIsCartModalVisible(false);
                }}
              >
                Thanh toán
              </Button>

            </div>
          </div>
        ) : (
          <div>Giỏ hàng trống</div>
        )
        }
      </Modal >
    </div >
  );
}

export default AppShop;