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
    <div class="bg-gradient-to-r from-green-300 to-blue-500  rounded-t-xl overflow-hidden p-5 sm:p-10">
      <form>
        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-wrap md:flex-nowrap">
          <input
            {...register('longURL', { required: true })}
            className="w-full md:w-10/12 lg:w-full appearance-none border border-transparent py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
            type="text"
            placeholder="Enter a url to shrynk!"
            aria-label="Full name"
          />
          <div class="py-2 w-full md:w-2/12 lg:w-24 bg-gradient-to-r from-green-500 to-blue-800 hover:from-pink-500 hover:to-yellow-500 text-white text-base font-semibold rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
            <button onClick={handleSubmit(onSubmit)} className="w-full">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
