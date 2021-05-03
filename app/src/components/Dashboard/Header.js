import React from 'react';

export default function Header() {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
        >
          Sl.No
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
        >
          Long URL
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
        >
          Short URL
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
        >
          Copy to Clipboard
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
        >
          QR Code
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
        >
          Activation
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Expiry
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Operations
        </th>
      </tr>
    </thead>
  );
}
