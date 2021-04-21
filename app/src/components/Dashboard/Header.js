import React from 'react';

export default function Header() {
  return (
    <thead className="lg:shadow-2xl">
      <tr className="lg:shadow-2xl table-content table-header">
        <th>Sl.No</th>
        <th>Long URL</th>
        <th>Short URL</th>
        <th>Activation</th>
        <th>Expiry</th>
        <th>Operations</th>
      </tr>
    </thead>
  );
}
