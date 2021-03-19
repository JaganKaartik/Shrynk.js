import React, { Component } from "react";
import homeGif from "../../assets/images/home.gif";
import { Row, Col } from "antd";
import "./home.css";
import pic from "../../assets/images/man1.jpg";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();
  // handleChange(event) {
  //   console.log(event.target.value);
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit() {
  //   let history = useHistory();
  //   const SERVER_URI = process.env.REACT_APP_SERVER_URI;
  //   const CLIENT_URI = process.env.REACT_APP_CLIENT_URI;
  //   const shortUrl = this.state.value;
  //   const urlCode = shortUrl.replace(CLIENT_URI, "");
  //   const redirectlink = SERVER_URI + urlCode;
  //   // eslint-disable-next-line no-restricted-globals
  //   history.push(redirectlink);
  // }

  const history = useHistory();

  const onSubmit = (data) => {
    const CLIENT_URI = process.env.REACT_APP_CLIENT_DOM;
    const shortUrl = data.url;
    const urlCode = shortUrl.replace(CLIENT_URI, "");
    history.push(urlCode);
  };

  return (
    <div className="flex-grow">
      <Row justify={"center"}>
        <Col span={20}>
          <div
            className={"flex justify-end items-center py-4 border-gray-200"}
            style={{ borderBottomWidth: "thin" }}
          ></div>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col span={20}>
          <div className={"flex flex-col justify-center items-center"}>
            <h1 className={"title text-2xl mt-10"}>Shrynk.js</h1>
            <img
              className="responsive"
              src={homeGif}
              alt="loading..."
              style={{ maxWidth: "450px", margin: "50px auto 0" }}
            />
          </div>
        </Col>

        <Row span={40}>
          <div>
            {/* <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
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
                      Case study
                    </div>
                    <a
                      href="#"
                      class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                      Finding customers for your new business
                    </a>
                    <p class="mt-2 text-gray-500">
                      Getting a new business off the ground is a lot of hard
                      work. Here are five ideas you can use to find your first
                      customers.
                    </p>
                  </div>
                </div>
              </div> */}

            <div className="grid grid-flow-col grid-rows-4 grid-cols-4 gap-4 feature-cards">
              <div class="transition duration-200 row-start-1 col-start-1 col-span-4 transform hover:-translate-y-1 hover:scale-105 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="md:flex">
                    <div class="md:flex-shrink-0"></div>
                    <div class="p-8">
                      <div class="text-center uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        Have a Shrynked URL ? Enter URL to Redirect...
                      </div>
                      <br />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi eius fugit voluptatem veniam ipsam! Ipsam facilis
                        iure reprehenderit commodi repellat.
                      </p>
                      <br />
                      <label>
                        <span class="text-gray-700">URL</span>
                        <input
                          type="text"
                          ref={register}
                          name="url"
                          // value={this.state.value}
                          // onChange={this.handleChange.bind(this)}
                          class="w-full h-8 border border-opacity-100  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..."
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="row-start-2 col-start-1 col-span-3 transition duration-200 transform hover:-translate-y-1 hover:scale-105 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
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
                    <a
                      href="#"
                      class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                      Tiers and Quotas on Users.
                    </a>
                    <p class="mt-2 text-gray-500">
                      Getting a new business off the ground is a lot of hard
                      work. Here are five ideas you can use to find your first
                      customers.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div class="row-start-3 col-start-2 col-span-3 transition duration-200 transform hover:-translate-y-1 hover:scale-105 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                  <div class="md:flex-shrink-0">
                    {/* <img
                      class="h-48 w-full object-cover md:w-48"
                      src="/img/store.jpg"
                      alt="Man looking at item at a store"
                    /> */}
                  </div>
                  <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      Features
                    </div>
                    <a
                      href="#"
                      class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                      Onboarding
                    </a>
                    <p class="mt-2 text-gray-500">
                      Getting a new business off the ground is a lot of hard
                      work. Here are five ideas you can use to find your first
                      customers.
                    </p>
                  </div>
                </div>
              </div>

              <div class="row-start-4 col-start-2 col-span-2">
                <div class="grid grid-cols-2 gap-4">
                  <button
                    class="rounded-xl w-full shadow-2xl inline-flex items-center h-12 px-5 text-indigo-100 transition duration-200 ease-in-out bg-blue-500 hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-110 .."
                    // onClick={() => routeChange("/login")}
                  >
                    <span>Login with Twitter</span>
                    <svg
                      class="w-5 h-5 ml-2 fill-current icon"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                    </svg>
                  </button>

                  <button
                    class="rounded-xl w-full shadow-2xl inline-flex items-center h-12 px-5 text-indigo-100 transition duration-200 ease-in-out bg-blue-500 hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110 .."
                    // onClick={() => routeChange("/login")}
                  >
                    <span>Login with Google</span>
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
        </Row>
      </Row>
    </div>
  );
  // }
}
