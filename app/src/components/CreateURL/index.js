import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { addURL } from '../../helpers/api.helper';
import { toast } from 'react-toast';
import { DataContext } from '../../context/DataContext';

export default function CreateURL() {
  const { dataUpdated } = useContext(DataContext);
  const { update, didUpdate } = dataUpdated;
  const { register, handleSubmit, reset } = useForm();
  const success = () => toast.success('Message sent successfully!');
  const failed = (message) => toast.error(message);
  const onSubmit = (data) => {
    addURL(data.longURL).then((resp) => {
      didUpdate(!update);
      return resp.message === 'success' ? success() : failed(resp.message);
    });
    reset();
  };

  return (
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-blue-400 to-blue-200 p-10">
      <form className="flex w-full max-w-lg mx-auto space-x-3">
        <input
          {...register('longURL', { required: true })}
          className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
          type="text"
          placeholder="Enter a url to shrynk!"
          aria-label="Full name"
        />
        <button
          onClick={handleSubmit(onSubmit)}
          className="flex-shrink-0 bg-blue-400 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
