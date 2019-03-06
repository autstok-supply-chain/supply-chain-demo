import React from 'react';
import { Layout, Table, Button } from 'antd';
import { NumberFormat } from '../../components/number-format';
import { DateFormat } from '../../components/date-format';
import { Address } from '../../components/address';

const { Column } = Table;

export function Fund() {
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
          <div style={{ padding: '0 1em' }}>Fund contract: ¥ 340,000.00</div>
          <div style={{ padding: '0 1em' }}>Fund wallet: ¥ 190,500.00</div>
          <div style={{ padding: '0 1em' }}>
            Fund assets valuation: ¥ 820,000,000.00
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
          <section style={{ marginBottom: '2em' }}>
            <header
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1em',
              }}
            >
              <h2 style={{ margin: 0, marginRight: '.5em' }}>
                Tokens distribution
              </h2>

              <div>
                <Button style={{ margin: '0 .5em' }}>Buy</Button>
                <Button style={{ margin: '0 .5em' }}>Sell</Button>
              </div>
            </header>

            <Table
              showHeader={false}
              pagination={false}
              dataSource={[
                {
                  key: '1',
                  name: 'Own',
                  amount: 5000,
                },
                {
                  key: '2',
                  name: 'Investor 1',
                  amount: 42000,
                },
                {
                  key: '3',
                  name: 'Investor 2',
                  amount: 15000,
                },
                {
                  key: '4',
                  name: 'Investor 3',
                  amount: 38000,
                },
              ]}
            >
              <Column dataIndex="name" key="name" />
              <Column
                dataIndex="amount"
                key="amount"
                render={(value) => <NumberFormat value={value} />}
              />
            </Table>
          </section>

          <section style={{ marginBottom: '2em' }}>
            <header
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1em',
              }}
            >
              <h2 style={{ margin: 0, marginRight: '.5em' }}>
                Undistributed income
              </h2>

              <div>
                <Button style={{ margin: '0 .5em' }}>Collect income</Button>
                <Button style={{ margin: '0 .5em' }}>Pay dividends</Button>
              </div>
            </header>

            <Table
              pagination={false}
              dataSource={[
                {
                  key: '1',
                  name: 'FARM01',
                  owned: 20000,
                  revenue: 50000,
                },
                {
                  key: '2',
                  name: 'FARM02',
                  owned: 15000,
                  revenue: 0,
                },
                {
                  key: '3',
                  name: 'FARM03',
                  owned: 30000,
                  revenue: 65000,
                },
              ]}
            >
              <Column title="Unit name" dataIndex="name" key="name" />
              <Column
                title="Units owned"
                dataIndex="owned"
                key="owned"
                render={(value) => <NumberFormat value={value} />}
              />
              <Column
                title="Revenue"
                dataIndex="revenue"
                key="revenue"
                render={(value) => (
                  <React.Fragment>
                    ¥ <NumberFormat value={value} />
                  </React.Fragment>
                )}
              />
            </Table>
          </section>

          <section>
            <h2 style={{ marginTop: '2em' }}>Transactions log</h2>
            <Table
              dataSource={[
                {
                  key: '1',
                  address: '0x5f5CF7881C8E64fCD26aB6426C88e5C2d660A83a',
                  type: 'Asset income',
                  date: new Date('2019-02-16'),
                  unit: 'FARM03',
                  amount: '30%',
                  total: 65000,
                },
                {
                  key: '2',
                  address: '0x5f5CF7881C8E64fCD26aB6426C88e5C2d660A9a5',
                  type: 'Dividends payout',
                  date: new Date('2019-01-23'),
                  unit: '',
                  amount: '95%',
                  total: 35000,
                },
              ]}
            >
              <Column
                title="Transaction"
                dataIndex="address"
                key="address"
                render={(address) => <Address address={address} />}
              />
              <Column title="Operation type" dataIndex="type" key="type" />
              <Column
                title="Date"
                dataIndex="date"
                key="date"
                render={(value) => <DateFormat value={value} />}
              />
              <Column title="Unit" dataIndex="unit" key="unit" />
              <Column title="Amount" dataIndex="amount" key="amount" />
              <Column
                title="Total"
                dataIndex="total"
                key="total"
                render={(value) => (
                  <React.Fragment>
                    ¥ <NumberFormat value={value} />
                  </React.Fragment>
                )}
              />
            </Table>
          </section>
        </div>
      </Layout.Content>

      <Layout.Footer style={{ textAlign: 'center' }}>© 2019</Layout.Footer>
    </Layout>
  );
}
