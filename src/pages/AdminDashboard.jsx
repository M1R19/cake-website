import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminLoginTime');
    navigate('/admin');
  };

  // Sample data for dashboard
  const stats = {
    totalOrders: 156,
    pendingOrders: 12,
    completedOrders: 144,
    totalRevenue: 45600,
  };

  const recentOrders = [
    { id: 'ORD001', customer: 'Priya Sharma', cake: 'Chocolate Truffle', status: 'Pending', amount: 850 },
    { id: 'ORD002', customer: 'Rahul Mehta', cake: 'Vanilla Dream', status: 'Completed', amount: 650 },
    { id: 'ORD003', customer: 'Sneha Kapoor', cake: 'Red Velvet', status: 'In Progress', amount: 950 },
    { id: 'ORD004', customer: 'Amit Patel', cake: 'Black Forest', status: 'Completed', amount: 750 },
    { id: 'ORD005', customer: 'Neha Singh', cake: 'Custom Wedding Cake', status: 'Pending', amount: 2500 },
  ];

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Chimu Admin</h2>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="nav-icon">📊</span>
            Overview
          </button>
          <button
            className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <span className="nav-icon">📦</span>
            Orders
          </button>
          <button
            className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <span className="nav-icon">🎂</span>
            Products
          </button>
          <button
            className={`nav-item ${activeTab === 'customers' ? 'active' : ''}`}
            onClick={() => setActiveTab('customers')}
          >
            <span className="nav-icon">👥</span>
            Customers
          </button>
          <button
            className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            <span className="nav-icon">⭐</span>
            Reviews
          </button>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          <span className="nav-icon">🚪</span>
          Logout
        </button>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>
            {activeTab === 'overview' && 'Dashboard Overview'}
            {activeTab === 'orders' && 'Order Management'}
            {activeTab === 'products' && 'Product Management'}
            {activeTab === 'customers' && 'Customer Management'}
            {activeTab === 'reviews' && 'Review Management'}
          </h1>
          <div className="admin-user">
            <span>Welcome, Admin</span>
          </div>
        </header>

        <div className="admin-content">
          {activeTab === 'overview' && (
            <>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">📦</div>
                  <div className="stat-info">
                    <h3>{stats.totalOrders}</h3>
                    <p>Total Orders</p>
                  </div>
                </div>
                <div className="stat-card pending">
                  <div className="stat-icon">⏳</div>
                  <div className="stat-info">
                    <h3>{stats.pendingOrders}</h3>
                    <p>Pending Orders</p>
                  </div>
                </div>
                <div className="stat-card completed">
                  <div className="stat-icon">✅</div>
                  <div className="stat-info">
                    <h3>{stats.completedOrders}</h3>
                    <p>Completed</p>
                  </div>
                </div>
                <div className="stat-card revenue">
                  <div className="stat-icon">💰</div>
                  <div className="stat-info">
                    <h3>₹{stats.totalRevenue.toLocaleString()}</h3>
                    <p>Total Revenue</p>
                  </div>
                </div>
              </div>

              <div className="recent-orders">
                <h2>Recent Orders</h2>
                <table className="orders-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Cake</th>
                      <th>Status</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.cake}</td>
                        <td>
                          <span className={`status-badge ${order.status.toLowerCase().replace(' ', '-')}`}>
                            {order.status}
                          </span>
                        </td>
                        <td>₹{order.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'orders' && (
            <div className="tab-content">
              <p className="placeholder-text">Order management features coming soon...</p>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="tab-content">
              <p className="placeholder-text">Product management features coming soon...</p>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="tab-content">
              <p className="placeholder-text">Customer management features coming soon...</p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="tab-content">
              <p className="placeholder-text">Review management features coming soon...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
