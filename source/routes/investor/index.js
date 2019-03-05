import React from 'react';
import { Layout, Table } from 'antd';
import { NumberFormat } from '../../components/number-format';
import { DateFormat } from '../../components/date-format';
import { Address } from '../../components/address';

const { Column } = Table;

export function Investor() {
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
          <section>
            <h2>Assets portfolio</h2>

            <Table
              dataSource={[
                {
                  key: '1',
                  token: 'FUND01',
                  asset: 'Fund 1',
                  amount: 42000,
                  price: 34.56,
                  cap: 1451520,
                  paidDividends: 73250,
                },
                {
                  key: '2',
                  token: 'FUND02',
                  asset: 'Fund 2',
                  amount: 18000,
                  price: 59.18,
                  cap: 1065240,
                  paidDividends: 243000,
                },
              ]}
            >
              <Column title="Token" dataIndex="token" key="token" />
              <Column title="Asset" dataIndex="asset" key="asset" />
              <Column
                title="Amount"
                dataIndex="amount"
                key="amount"
                render={(value) => <NumberFormat value={value} />}
              />
              <Column
                title="Price"
                dataIndex="price"
                key="price"
                render={(value) => <NumberFormat value={value} />}
              />
              <Column
                title="Cap"
                dataIndex="cap"
                key="cap"
                render={(value) => <NumberFormat value={value} />}
              />
              <Column
                title="Dividends paid"
                dataIndex="paidDividends"
                key="paidDividends"
                render={(value) => <NumberFormat value={value} />}
              />
            </Table>
          </section>

          <section style={{ marginTop: '2em' }}>
            <h2>Transactions log</h2>

            <Table
              dataSource={[
                {
                  key: '1',
                  address: '0x2a8CF7881C8E64fCD26aB6426C88e5C2d660A84c',
                  type: 'Wallet withdraw',
                  date: new Date('2019-02-16'),
                  token: '',
                  total: 299950,
                },
                {
                  key: '2',
                  address: '0xa53CF7881C8E64fCD26aB6426C88e5C2d660Ah1b',
                  type: 'Dividends payout',
                  date: new Date('2019-01-25'),
                  token: 'FUND02',
                  total: 243000,
                },
                {
                  key: '3',
                  address: '0xb3aCF7881C8E64fCD26aB6426C88e5C2d660Aaa6',
                  type: 'Dividends payout',
                  date: new Date('2019-01-23'),
                  token: 'FUND01',
                  total: 73250,
                },
                {
                  key: '4',
                  address: '0x7b9CF7881C8E64fCD26aB6426C88e5C2d660A3ca',
                  type: 'Tokens buy',
                  date: new Date('2018-11-14'),
                  token: 'FUND02',
                  total: 1000000,
                },
                {
                  key: '5',
                  address: '0xc84CF7881C8E64fCD26aB6426C88e5C2d660A427',
                  type: 'Tokens buy',
                  date: new Date('2018-10-20'),
                  token: 'FUND01',
                  total: 1000000,
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
              <Column title="Token" dataIndex="token" key="token" />
              <Column
                title="Total"
                dataIndex="total"
                key="total"
                render={(value) => <NumberFormat value={value} />}
              />
            </Table>
          </section>
        </div>
      </Layout.Content>

      <Layout.Footer style={{ textAlign: 'center' }}>© 2019</Layout.Footer>
    </Layout>
  );
}
