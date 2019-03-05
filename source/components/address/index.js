import React from 'react';
import { Tooltip } from 'antd';

function truncate(address) {
  return `${address.slice(0, 5)}...${address.slice(-3)}`;
}

export function Address({ address }) {
  return <Tooltip title={address}>{truncate(address)}</Tooltip>;
}
