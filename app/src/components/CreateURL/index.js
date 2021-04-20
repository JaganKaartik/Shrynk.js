import React from 'react';
import { useForm } from 'react-hook-form';
import { addURL } from '../../helpers/api.helper';
import { toast } from 'react-toast';

export default function CreateURL() {
  const { register, handleSubmit } = useForm();
  const success = () => toast.success('Message sent successfully!');
  const failed = (message) => toast.error(message);
  const onSubmit = (data) => {
    addURL(data.longURL).then((resp) =>
      resp.message === 'success' ? success() : failed(resp.message)
    );
  };

  return (
    <div className="container rounded-t-xl overflow-hidden bg-gradient-to-r from-green-400 to-blue-800 px-6 py-8">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <form class="w-full">
          <div class="flex items-center border-b border-teal-500 py-2">
            <input
              {...register('longURL', { required: true })}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter a url to shrynk!"
              aria-label="Full name"
            />
            <button
              onClick={handleSubmit(onSubmit)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
