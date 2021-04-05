import React from 'react';
import { onboardingUser } from '../../services/api.helper';
import { useHistory } from 'react-router-dom';

export default function Onboarding() {
  const history = useHistory();

  const onClickHandler = (type, quota) => {
    onboardingUser(type, quota).then(() => history.push('/dashboard'));
  };

  return (
    <div>
      <div class="min-w-screen min-h-screen bg-gray-100 px-5 py-5">
        <div class="w-full mx-auto bg-white px-5 py-10 text-gray-600 mb-10">
          <div class="text-center max-w-xl mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold mb-5">
              Select your Plan
            </h1>
            <h3 class="text-xl font-medium mb-10">
              Welcome to Shrynk, select your plan.
            </h3>
          </div>
          <div class="w-full md:flex mb-5">
            <div class="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div class="w-full flex-grow">
                <h2 class="text-center font-bold uppercase mb-4">BASIC</h2>
                <h3 class="text-center font-bold text-4xl mb-2">
                  5<span class="text-lg">/URL links</span>
                </h3>
                <ul class="text-sm px-5 mb-8">
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> 5 URLs Limit
                  </li>
                </ul>
              </div>
              <div class="w-full">
                <button
                  class="font-bold bg-blue-600 hover:bg-blue-800 text-white rounded-md px-10 py-2 transition-colors w-full"
                  onClick={() => onClickHandler('basic', 5)}
                >
                  Select Now
                </button>
              </div>
            </div>
            <div class="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:my-3 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
              <div class="w-full flex-grow">
                <h2 class="text-center font-bold uppercase mb-4">PREMIUM</h2>
                <h3 class="text-center font-bold text-3xl md:text-4xl mb-2">
                  10<span class="text-lg">/URL links</span>
                </h3>
                <ul class="text-sm px-5 mb-8">
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> 10 URLs Limit
                  </li>
                </ul>
              </div>
              <div class="w-full">
                <button
                  class="font-bold bg-blue-600 hover:bg-blue-800 text-white rounded-md px-10 py-2 transition-colors w-full"
                  onClick={() => onClickHandler('premium', 10)}
                >
                  Select Now
                </button>
              </div>
            </div>
            <div class="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
              <div class="w-full flex-grow">
                <h2 class="text-center font-bold uppercase mb-4">PRO</h2>
                <h3 class="text-center font-bold text-4xl md:text-5xl mb-2">
                  30<span class="text-lg">/URL links</span>
                </h3>
                <ul class="text-sm px-5 mb-8">
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> 30 URLs Limit
                  </li>
                </ul>
              </div>
              <div class="w-full">
                <button class="disabled font-bold bg-blue-600 hover:bg-blue-800 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Enquire Now
                </button>
              </div>
            </div>
            <div class="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-3 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div class="w-full flex-grow">
                <h2 class="text-center text-3xl font-bold uppercase mb-2">
                  Custom Plan
                </h2>
                <p class="text-center font-bold mb-5">
                  Contact Us for more info!
                </p>
              </div>
              <div class="w-full">
                <button class="disabled font-bold bg-blue-600 hover:bg-blue-800 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
          <div class="text-center max-w-xl mx-auto">
            <p class="text-xs leading-tight">
              *Note: This is not a paid application, this is a demo SPA and a
              mere Proof of Concept. Basic and Premium quotas are actually
              designed, select either to proceed using Shrynk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
