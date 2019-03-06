import React from 'react';
import { Layout, Table, Divider } from 'antd';
import { NumberFormat } from '../../components/number-format';
import { DateFormat } from '../../components/date-format';
import { Address } from '../../components/address';
import { useFarms } from './hooks/use-farms';
const { Column, ColumnGroup } = Table;

import { farmWorkflows } from '../../workflows/farm';

export function Farm() {
  const { farmsState, loadFarms } = useFarms();

  if (farmsState.dataState === 'idle') {
    loadFarms();
  }

  function handleSell() {
    farmWorkflows
      .sell()
      .then(loadFarms)
      .catch((error) => {
        console.error(error);
        alert('Something went wrong, please try again');
      });
  }

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
          <Table dataSource={farmsState.data}>
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
                        <a href="javascript:;" onClick={handleSell}>
                          Sell
                        </a>
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
                  ¥ <NumberFormat value={value} />
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
            <Column
              title="Amount"
              dataIndex="amount"
              key="amount"
              render={(value) => <NumberFormat value={value} />}
            />
          </Table>
        </div>
      </Layout.Content>

      <Layout.Footer style={{ textAlign: 'center' }}>© 2019</Layout.Footer>
    </Layout>
  );
}
