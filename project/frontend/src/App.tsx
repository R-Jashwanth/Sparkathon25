import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderHistory from './components/OrderHistory';
import VisualSearch from './components/VisualSearch';
import './styles/App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Products</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/visual-search">Visual Search</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/cart">Cart</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/orders">Orders</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="site-content">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/visual-search" element={<VisualSearch />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<OrderHistory />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App; 