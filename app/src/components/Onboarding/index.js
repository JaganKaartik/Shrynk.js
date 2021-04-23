import React, { useEffect } from 'react';
import { onboardingUser } from '../../helpers/api.helper';
import { useHistory } from 'react-router-dom';
import { themeToggleHandler } from '../../helpers/theme.helper';

export default function Onboarding() {
  const history = useHistory();

  const onClickHandler = (type, quota) => {
    onboardingUser(type, quota).then(() => history.push('/dashboard'));
  };

  useEffect(() => {
    themeToggleHandler();
  }, []);

  return (
    <div>
      <div class="min-w-screen h-100 px-5 py-5">
        <div class="w-full mx-auto custom-card-container  px-5 py-10 text-gray-600 mb-10">
          <div class="text-center max-w-xl mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold mb-5 custom-card-text">
              Select your Plan
            </h1>
            <h3 class="text-xl font-medium mb-10 custom-card-text">
              Welcome to Shrynk, select your plan.
            </h3>
          </div>
          <div class="w-full md:flex mb-5">
            <div class="w-full md:w-1/4 md:max-w-none custom-card  px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div class="w-full flex-grow custom-card-text">
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
                  class="font-bold bg-green-500 hover:bg-blue-300 text-white rounded-md px-10 py-2 transition-colors w-full"
                  onClick={() => onClickHandler('basic', 5)}
                >
                  Select Now
                </button>
              </div>
            </div>
            <div class="w-full md:w-1/4 md:max-w-none custom-card  px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:my-3 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
              <div class="w-full flex-grow custom-card-text">
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
                  class="font-bold  bg-green-500 hover:bg-blue-300 text-white rounded-md px-10 py-2 transition-colors w-full"
                  onClick={() => onClickHandler('premium', 10)}
                >
                  Select Now
                </button>
              </div>
            </div>
            <div class="w-full md:w-1/4 md:max-w-none custom-card px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
              <div class="w-full flex-grow custom-card-text">
                <h2 class="text-center font-bold uppercase mb-4">PRO</h2>
                <h3 class="text-center font-bold text-4xl md:text-5xl mb-2">
                  300<span class="text-lg">/URL links</span>
                </h3>
                <ul class="text-sm px-5 mb-8">
                  <li class="leading-tight">
                    <i class="mdi mdi-check-bold text-lg"></i> 300 URLs Limit
                  </li>
                </ul>
              </div>
              <div class="w-full">
                <button class="disabled font-bold bg-green-500 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Enquire Now
                </button>
                <br />
                <p class="text-xs custom-card-text leading-tight">*Disabled</p>
              </div>
            </div>
            <div class="w-full md:w-1/4 md:max-w-none custom-card  px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-3 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div class="w-full flex-grow custom-card-text">
                <h2 class="text-center text-3xl font-bold uppercase mb-2">
                  CUSTOM
                </h2>
                <p class="text-center font-bold mb-5">
                  Contact Us for more info!
                </p>
              </div>
              <div class="w-full">
                <button class="disabled font-bold bg-green-500  text-white rounded-md px-10 py-2 transition-colors w-full">
                  Enquire Now
                </button>
                <p class="text-xs custom-card-text leading-tight">*Disabled</p>
              </div>
            </div>
          </div>
          <div class="text-center max-w-xl mx-auto">
            <p class="text-xs custom-card-text leading-tight">
              *Note: This is not a paid application, this is a demo SPA and a
              mere Proof of Concept. Basic and Premium quotas are actually
              designed, select either to proceed using Shrynk.
            </p>
            <br />
            <p class="text-xs custom-card-text leading-tight">
              *Mock. Payment Gateway
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
