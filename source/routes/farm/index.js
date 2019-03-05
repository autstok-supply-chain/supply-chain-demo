import React from 'react';
import { Layout, Table, Divider } from 'antd';
import { NumberFormat } from '../../components/number-format';
import { DateFormat } from '../../components/date-format';
import { Address } from '../../components/address';

const { Column, ColumnGroup } = Table;

export function Farm(props) {
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
          <Table
            dataSource={[
              {
                key: '1',
                name: 'Avocado farm (me)',
                supply: 70000,
                undistributedIncome: 175000,
              },
              {
                key: '2',
                name: 'Fund 1',
                supply: 20000,
                undistributedIncome: 50000,
              },
              {
                key: '3',
                name: 'Fund 2',
                supply: 10000,
                undistributedIncome: 25000,
              },
            ]}
          >
            <ColumnGroup title="Units distribution">
              <Column title="Name" dataIndex="name" key="name" />
              <Column
                title="Supply"
                dataIndex="supply"
                key="supply"
                render={(value, record) => (
                  <React.Fragment>
                    <NumberFormat value={value} />
                    <br />
                    {record.key === '1' && (
                      <React.Fragment>
                        <a href="javascript:;">Buy</a>
                        <Divider type="vertical" />
                        <a href="javascript:;">Sell</a>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              />
            </ColumnGroup>
            <Column
              title="Undistributed income"
              dataIndex="undistributedIncome"
              key="undistributedIncome"
              render={(value, record) => (
                <React.Fragment>
                  <NumberFormat value={value} />
                  <br />
                  {record.key === '1' && <a href="javascript:;">Withdraw</a>}
                </React.Fragment>
              )}
            />
          </Table>

          <h2>Transactions log</h2>
          <Table
            dataSource={[
              {
                key: '1',
                address: '0x5f5CF7881C8E64fCD26aB6426C88e5C2d660A83a',
                type: 'Income',
                date: new Date('2019-02-16'),
                amount: 250000,
              },
              {
                key: '2',
                address: '0x5f5CF7881C8E64fCD26aB6426C88e5C2d660A9a5',
                type: 'Funds withdrawal',
                date: new Date('2019-01-25'),
                amount: 190500,
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
            <Column title="Amount" dataIndex="amount" key="amount" />
          </Table>
        </div>
      </Layout.Content>

      <Layout.Footer style={{ textAlign: 'center' }}>© 2019</Layout.Footer>
    </Layout>
  );
}
