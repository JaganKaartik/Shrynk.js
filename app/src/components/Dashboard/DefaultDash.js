import React from 'react';

export default function DefaultDash() {
  return (
    <div className="flex-grow flex-col rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 px-6 py-8">
      <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Welcome to Shrynk
            </div>
            <p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              Start shrynking your long urls to view your dashboard.
            </p>
            {/* <p class="mt-2 text-gray-500">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
