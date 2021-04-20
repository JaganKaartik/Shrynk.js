import React from 'react';

export default function Header() {
  return (
    <thead className="shadow-2xl">
      <tr className="shadow-2xl">
        <th className="">Sl.No</th>
        <th className="">Long URL</th>
        <th className="">Short URL</th>
        <th className="">Activation</th>
        <th className="">Expiry</th>
        <th>Operations</th>
      </tr>
    </thead>
  );
}
