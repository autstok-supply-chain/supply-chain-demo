import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom';

export const AppLayout = function AppLayout({ children, location, history }) {
  return (
    <Layout>
      <Layout.Header>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#fff',
          }}
        >
          <div style={{ padding: '0 1em' }}>Contract: ¥ 250,000.00</div>
          <div style={{ padding: '0 1em' }}>Wallet balance: ¥ 190,500.00</div>
          <div style={{ padding: '0 1em' }}>
            Max asset valuation: ¥ 820,000,000.00
          </div>
        </div>
      </Layout.Header>
      <Layout.Content style={{ padding: '0 50px' }}>
        <div
          style={{
            background: '#fff',
            padding: 24,
            marginTop: 24,
            minHeight: 280,
          }}
        >
          {children}
        </div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>© 2019</Layout.Footer>
    </Layout>
  );
});
