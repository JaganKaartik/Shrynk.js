import React from 'react';
import table from '../../assets/images/table1.svg';
import DefaultInfoComponent from '../Commons/DefaultInfo';

export default function DefaultDash() {
  const defaultDashData = {
    image: table,
    text: 'Start shrynking urls to view your dashboard.',
  };
  return <DefaultInfoComponent data={defaultDashData} />;
}
