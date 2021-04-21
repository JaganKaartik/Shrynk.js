import React, { useEffect, useState, useContext } from 'react';
import homeGif from '../../assets/images/homeRelaxed.gif';
import { API_URL } from '../../config';
import { login } from '../../helpers/token.helper';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export default function Home() {
  const [authRedirect, setAuthRedirect] = useState(false);
  const { setJwt } = useContext(UserContext);

  const history = useHistory();

  function onClickHandler(provider) {
    console.log(provider);
    window.open(`${API_URL}auth/${provider}`, '_self');
    setAuthRedirect(!authRedirect);
  }

  function setJWTContext(value) {
    setJwt(value);
  }

  useEffect(() => {
    let params = new URL(document.location).searchParams;
    let authToken = params.get('token');
    let userId = params.get('userid');
    let onboardingStatus = params.get('onboarding');
    if (authToken && userId) {
      login(authToken, userId);
      setJWTContext(authToken);
      console.log(onboardingStatus);
      if (onboardingStatus === 'true') {
        history.push('/onboarding');
      } else {
        history.push('/dashboard');
      }
    }
  });

  return (
    <div className="flex-grow">
      <div className={'flex flex-col justify-center items-center'}>
        <h1 className={'title text-blue-500 text-6xl mt-10'}>Shrynk.js</h1>
        <img
          className="h-auto w-full object-cover md:flex-shrink-0 shadow-2xl"
          src={homeGif}
          alt="loading..."
          style={{ maxWidth: '500px', margin: '50px auto 0' }}
        />
      </div>
      <br />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
        <div className="sm:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Why use Shrynk ?
            </div>
            <p className="mt-2 text-gray-500">
              Can’t remember a URL easily ? Can’t use the links where there are
              restrictions on text length. The best solution to overcome this
              issue is by shortening these URLs
            </p>
            <p className="mt-2 text-gray-500">
              This is a simple URL Shortening SPA. Originally created as a hobby
              project, this is the second iteration of{' '}
              <a className="text-black" href="https://shrynk.herokuapp.com">
                Shrynk
              </a>
              . The below are the features implemented in this application.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Features
            </div>

            <div>
              <ul className="p-1">
                <li>
                  <p className="block mt-1 text-lg leading-tight font-mono text-black">
                    Tiers and Quotas on URLs
                  </p>
                </li>
                <li>
                  <p className="block mt-1 text-lg leading-tight font-mono text-black">
                    Onboarding
                  </p>
                </li>
                <li>
                  <p className="block mt-1 text-lg leading-tight font-mono text-black">
                    OAuth Authentication
                  </p>
                </li>
                <li>
                  <p className="block mt-1 text-lg leading-tight font-mono text-black">
                    Dashboard to CRUD generated URLs
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="flex justify-center">
        <div className="md:flex-shrink-0 grid grid-cols-1 gap-4">
          <button
            className="rounded-xl w-full shadow-2xl inline-flex items-center h-12 px-5 text-indigo-100 transition duration-200 ease-in-out bg-green-800 hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110 .."
            onClick={() => onClickHandler('google')}
          >
            <span>Login with Google</span>
            <svg
              className="w-5 h-5 ml-2  fill-current icon"
              viewBox="0 0 1024 1024"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
            </svg>
          </button>
          {/* <button
            className="rounded-xl w-full shadow-2xl inline-flex items-center h-12 px-5 text-indigo-100 transition duration-200 ease-in-out bg-indigo-500 hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110 .."
            onClick={() => onClickHandler('twitter')}
          >
            <span>Login with Twitter</span>
            <svg
              className="w-5 h-5 ml-2  fill-current icon"
              viewBox="0 0 1024 1024"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
            </svg>
          </button> */}
          <br />
        </div>
      </div>
    </div>
  );
}
