import 'antd/dist/antd.min.css';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import AppHeader from './components/common/header';
import FooterWidget from './components/common/footerWidget';
import FooterCopyright from './components/common/footerCopyright';
import AppHome from './pages/home';
import AppAbout from './pages/about';
import AppShop from './pages/shop';
import AppFAQ from './pages/faq';
import AppContact from './pages/contact';

import toast, { Toaster } from 'react-hot-toast';
import { Layout } from 'antd';
import { generateToken, messaging } from './notification/firebase';
import { useEffect } from 'react';
import { onMessage } from 'firebase/messaging';
const { Header, Content, Footer } = Layout;

function App() {

  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      toast(payload.notification.body);
    })
  }, [])

  return (
    <Layout className="layout">
      <Toaster position="top-right" />
      <Router>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Routes>
            <Route path='/' element={<AppHome />} />
            <Route path='/about' element={<AppAbout />} />
            <Route path='/shop' element={<AppShop />} />
            <Route path='/faq' element={<AppFAQ />} />
            <Route path='/contact' element={<AppContact />} />
          </Routes>
        </Content>
      </Router>
      <Footer>
        <FooterWidget />
        <FooterCopyright />
      </Footer>
    </Layout>
  );
}

export default App;