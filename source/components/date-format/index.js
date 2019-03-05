import React from 'react';

const formatter = new Intl.DateTimeFormat('en');

export function DateFormat({ value }) {
  return formatter.format(value);
}
