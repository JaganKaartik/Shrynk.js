import React from "react";
import homeGif from "../../assets/images/homeRelaxed.gif";
import "./home.css";
import pic from "../../assets/images/man1.jpg";
import { useForm } from "react-hook-form";
import { launchPopup } from "../../utils";
import { API_URL_DEV, API_URL_PROD } from "../../config";

export default class Home extends Component {
  componentWillMount() {
    console.log("HERE");
    var query = queryString.parse(window.location.search);
    console.log(query);
    let params = new URL(document.location).searchParams;
    let name = params.get("token");
    console.log(params);
    console.log(name);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/dashboard");
    }
  }
  // const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const CLIENT_URI = process.env.REACT_APP_CLIENT_DOM;
    const shortUrl = data.url;
    const urlCode = shortUrl.replace(CLIENT_URI, "");
    window.open(urlCode, "_self");
  };

  function openPopup(provider) {
    const API_URL =
      process.env.NODE_ENV === "production" ? API_URL_PROD : API_URL_DEV;
    launchPopup(`${API_URL}auth/${provider}`, 300, 300);
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
                      there are restrictions on text length. The best solution
                      to overcome this issue is by shortening these URLs
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
                    Can’t remember a URL easily ? Can’t use the links where
                    there are restrictions on text length. The best solution to
                    overcome this issue is by shortening these URLs
                  </p>
                  <br />
                  <label>
                    <span class="text-gray-700">URL</span>
                    <input
                      type="text"
                      ref={register}
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
                {/* <button
                  class="rounded-xl w-full shadow-2xl inline-flex items-center h-12 px-5 text-indigo-100 transition duration-200 ease-in-out bg-indigo-500 hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-110 .."
                  onClick={() => openPopup("twitter")}
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                </svg>
              </button>

<<<<<<< Updated upstream
              <button
                class="rounded-xl w-full shadow-2xl inline-flex items-center h-12 px-5 text-indigo-100 transition duration-200 ease-in-out bg-indigo-500 hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110 .."
                onClick={() => openPopup("google")}
              >
                <span>Login with Google</span>
                <svg
                  class="w-5 h-5 ml-2  fill-current icon"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
                </svg>
              </button>
=======
                <button
                  class="rounded-xl w-full shadow-2xl inline-flex items-center h-12 px-5 text-indigo-100 transition duration-200 ease-in-out bg-indigo-500 hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110 .."
                  onClick={this.onClickHandler()}
                >
                  <span>Login with Google</span>
                  <svg
                    class="w-5 h-5 ml-2  fill-current icon"
                    viewBox="0 0 1024 1024"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
                  </svg>
                </button> */}

                <a href="http://localhost:8000/auth/twitter" class="button">
                  <div>
                    <span class="svgIcon t-popup-svg">
                      <svg
                        class="svgIcon-use"
                        width="25"
                        height="37"
                        viewBox="0 0 25 25"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path
                            d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                            fill="#34A853"
                          />
                          <path
                            d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                            fill="#EA4335"
                          />
                        </g>
                      </svg>
                    </span>
                    <span class="button-label">Sign in with Google</span>
                  </div>
                </a>
>>>>>>> Stashed changes

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
