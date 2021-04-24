import React, { useEffect } from 'react';
import { onboardingUser } from '../../helpers/api.helper';
import { useHistory } from 'react-router-dom';
import { themeToggleHandler } from '../../helpers/theme.helper';

export default function Onboarding() {
  const history = useHistory();

  const onClickHandler = (type, quota) => {
    onboardingUser(type, quota).then(() => history.push('/app/dashboard'));
  };

  useEffect(() => {
    themeToggleHandler();
  }, []);

  return (
    <div>
      <div className="min-w-screen h-100 px-5 py-5">
        <div className="w-full mx-auto custom-card-container  px-5 py-10 text-gray-600 mb-10">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-5 custom-card-text">
              Select your Plan
            </h1>
            <h3 className="text-xl font-medium mb-10 custom-card-text">
              Welcome to Shrynk, select your plan.
            </h3>
          </div>
          <div className="w-full md:flex mb-5">
            <div className="w-full md:w-1/4 md:max-w-none custom-card  px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div className="w-full flex-grow custom-card-text">
                <h2 className="text-center font-bold uppercase mb-4">BASIC</h2>
                <h3 className="text-center font-bold text-4xl mb-2">
                  5<span className="text-lg">/URL links</span>
                </h3>
                <ul className="text-sm px-5 mb-8">
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> 5 URLs Limit
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <button
                  className="font-bold bg-green-500 hover:bg-blue-300 text-white rounded-md px-10 py-2 transition-colors w-full"
                  onClick={() => onClickHandler('basic', 5)}
                >
                  Select Now
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/4 md:max-w-none custom-card  px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:my-3 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
              <div className="w-full flex-grow custom-card-text">
                <h2 className="text-center font-bold uppercase mb-4">
                  PREMIUM
                </h2>
                <h3 className="text-center font-bold text-3xl md:text-4xl mb-2">
                  10<span className="text-lg">/URL links</span>
                </h3>
                <ul className="text-sm px-5 mb-8">
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> 10 URLs Limit
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <button
                  className="font-bold  bg-green-500 hover:bg-blue-300 text-white rounded-md px-10 py-2 transition-colors w-full"
                  onClick={() => onClickHandler('premium', 10)}
                >
                  Select Now
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/4 md:max-w-none custom-card px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
              <div className="w-full flex-grow custom-card-text">
                <h2 className="text-center font-bold uppercase mb-4">PRO</h2>
                <h3 className="text-center font-bold text-4xl md:text-5xl mb-2">
                  300<span className="text-lg">/URL links</span>
                </h3>
                <ul className="text-sm px-5 mb-8">
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> 300 URLs
                    Limit
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <button className="disabled font-bold bg-green-500 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Enquire Now
                </button>
                <br />
                <p className="text-xs custom-card-text leading-tight">
                  *Disabled
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/4 md:max-w-none custom-card  px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-3 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div className="w-full flex-grow custom-card-text">
                <h2 className="text-center text-3xl font-bold uppercase mb-2">
                  CUSTOM
                </h2>
                <p className="text-center font-bold mb-5">
                  Contact Us for more info!
                </p>
              </div>
              <div className="w-full">
                <button className="disabled font-bold bg-green-500  text-white rounded-md px-10 py-2 transition-colors w-full">
                  Enquire Now
                </button>
                <p className="text-xs custom-card-text leading-tight">
                  *Disabled
                </p>
              </div>
            </div>
          </div>
          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs custom-card-text leading-tight">
              *Note: This is not a paid application, this is a demo SPA and a
              mere Proof of Concept. Basic and Premium quotas are actually
              designed, select either to proceed using Shrynk.
            </p>
            <br />
            <p className="text-xs custom-card-text leading-tight">
              *Mock. Payment Gateway
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
