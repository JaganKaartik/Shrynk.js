import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { addURL } from '../../helpers/api.helper';
import { toast } from 'react-toast';
import { DataContext } from '../../context/DataContext';
import ReactGA from 'react-ga';

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
    ReactGA.event({
      category: 'URL_Creation',
      action: 'Created Short URL',
      label: 'Shrynk-Button',
      value: data.longURL,
    });
  };

  return (
    <div class="bg-gradient-to-r from-green-300 to-blue-500  rounded-t-xl overflow-hidden p-10">
      <form className="w-full flex flex-wrap bg-grey-light">
        <div class="w-full lg:w-5/6">
          <input
            {...register('longURL', { required: true })}
            className="flex justify-center appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
            type="text"
            placeholder="Enter a url to shrynk!"
            aria-label="Full name"
          />
        </div>
        <div class=" py-2 px-4 w-full lg:w-1/6 flex justify-center bg-gradient-to-r from-green-500 to-blue-800 hover:from-pink-500 hover:to-yellow-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
          <button onClick={handleSubmit(onSubmit)} className="w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
