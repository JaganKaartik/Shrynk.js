import React from 'react';
import { useForm } from 'react-hook-form';
import { addURL } from '../../services/api.helper';

export default function CreateURL() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => addURL(data.longUrl);
  return (
    <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-green-400 to-blue-800 px-6 py-8">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} class="w-full">
          <div class="flex items-center border-b border-teal-500 py-2">
            <input
              {...register('longUrl', { required: true })}
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter a url to shrynk!"
              aria-label="Full name"
            />
            <input
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
