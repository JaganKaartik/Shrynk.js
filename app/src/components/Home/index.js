import React from "react";
import homeGif from "../../assets/images/homeRelaxed.gif";
import pic from "../../assets/images/man1.jpg";
// import { useForm } from "react-hook-form";
import { API_URL } from "../../config";

export default function Home() {
  // componentWillMount() {
  //   console.log("HERE");
  //   var query = queryString.parse(window.location.search);
  //   console.log(query);
  //   let params = new URL(document.location).searchParams;
  //   let name = params.get("token");
  //   console.log(params);
  //   console.log(name);
  //   if (query.token) {
  //     window.localStorage.setItem("jwt", query.token);
  //     this.props.history.push("/dashboard");
  //   }
  // }
  // const { register, handleSubmit } = useForm();

  // const onSubmit = (data) => {
  //   const CLIENT_URI = process.env.REACT_APP_CLIENT_DOM;
  //   const shortUrl = data.url;
  //   const urlCode = shortUrl.replace(CLIENT_URI, "");
  //   window.open(urlCode, "_self");
  // };

  // function openPopup(provider) {
  //   const API_URL =
  //     process.env.NODE_ENV === "production" ? API_URL_PROD : API_URL_DEV;
  //   launchPopup(`${API_URL}auth/${provider}`, 300, 300);
  // }

  function onClickHandler(provider) {
    console.log(provider);
    window.open(`${API_URL}auth/${provider}`, "_self");
  }

  return (
    <div className="flex-grow bg-gray-100">
      <div
        className={"flex justify-end items-center py-4 border-gray-200"}
        style={{ borderBottomWidth: "thin" }}
      ></div>

      <div className={"flex flex-col justify-center items-center"}>
        <h1 className={"title text-indigo-500 text-2xl mt-10"}>Shrynk.js</h1>
        <p className={"text-indigo-500 text-3xl mt-10"}>
          *Note: App is still under development. This is a sample preview.
        </p>
        <img
          className="responsive"
          src={homeGif}
          alt="loading..."
          style={{ maxWidth: "500px", margin: "50px auto 0" }}
        />
      </div>

      <br />

      <div className="bg-gray-100">
        <div className="feature-cards">
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
            <form>
              <div class="md:flex">
                <div class="md:flex-shrink-0"></div>
                <div class="p-8">
                  <div class="text-center uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Enter URL
                  </div>
                  <br />
                  <p>
                    Can’t remember a URL easily ? Can’t use the links where
                    there are restrictions on text length. The best solution to
                    overcome this issue is by shortening these URLs
                  </p>
                  <br />
                  <label>
                    <span class="text-gray-700">URL</span>
                    <input
                      type="text"
                      name="url"
                      class="w-full h-8 border border-opacity-100  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..."
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>
          <br />

          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0"></div>
              <div class="p-8">
                <div class="text-center uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Enter URL
                </div>
                <br />
                <p>
                  Can’t remember a URL easily ? Can’t use the links where there
                  are restrictions on text length. The best solution to overcome
                  this issue is by shortening these URLs
                </p>
                <br />
                <label>
                  <span class="text-gray-700">URL</span>
                  <input
                    type="text"
                    // ref={register}
                    name="url"
                    class="w-full h-8 border border-opacity-100  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..."
                  />
                </label>
              </div>
            </div>
            {/* </form> */}
          </div>
          <br />

          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Case study
                </div>
                <p class="mt-2 text-gray-500">
                  This is a simple URL Shortening SPA. Originally created as a
                  hobby project, this is the second iteration of{" "}
                  <a class="text-black" href="https://shrynk.herokuapp.com">
                    Shrynk
                  </a>
                  . The below are the features implemented in this application.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img
                  class="h-48 w-full object-cover md:w-48"
                  src={pic}
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Features
                </div>

                <ul class="p-1 list-disc">
                  <li>
                    <p class="font-sans md:font-serif block mt-1 text-lg leading-tight font-medium text-black">
                      Tiers and Quotas on URLs.
                    </p>
                  </li>
                  <li>
                    <p class="font-sans md:font-serif block mt-1 text-lg leading-tight font-medium text-black">
                      Onboarding Plans.
                    </p>
                  </li>
                  <li>
                    <p class="font-sans md:font-serif block mt-1 text-lg leading-tight font-medium text-black">
                      OAuth Authentication
                    </p>
                  </li>
                  <li>
                    <p class="font-sans md:font-serif block mt-1 text-lg leading-tight font-medium text-black">
                      Dashboard to CRUD URLs.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <br />

          <div class="flex justify-center">
            <div class="md:flex-shrink-0 grid grid-cols-2 gap-4">
              <button
                class="rounded-xl w-full shadow-2xl inline-flex items-center h-12 px-5 text-indigo-100 transition duration-200 ease-in-out bg-indigo-500 hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110 .."
                onClick={() => onClickHandler("google")}
              >
                <span>Login with Google</span>
                <svg
                  class="w-5 h-5 ml-2  fill-current icon"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
                </svg>
              </button>
              <button
                class="rounded-xl w-full shadow-2xl inline-flex items-center h-12 px-5 text-indigo-100 transition duration-200 ease-in-out bg-indigo-500 hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110 .."
                onClick={() => onClickHandler("twitter")}
              >
                <span>Login with Twitter</span>
                <svg
                  class="w-5 h-5 ml-2  fill-current icon"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
                </svg>
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}