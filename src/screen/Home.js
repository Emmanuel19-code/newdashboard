import React from "react";
import Sidebar from "../components/Sidebar";
import DonutChart from "../components/DonutChart";

const Home = () => {
  return (
    <div className="h-screen flex flex-row font-roboto">
      <Sidebar />
      <div className="p-5 border-r-2 flex-1">
        <div className="flex flex-row items-center justify-between">
          <h4 className="text-lg font-bold">Dashboard</h4>
          <div className="flex flex-row items-center p-1 bg-gray-200 rounded-full">
            <input
              type="text"
              placeholder="Search properties, tasks, etc."
              className="outline-none rounded-full w-56 text-sm bg-gray-200 p-1"
              aria-label="Search"
            />
            <img
              src="search.png"
              alt="Search"
              className="w-6 h-6 ml-2 cursor-pointer"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-row items-center">
          <div className="relative">
            <img
              src="userThree.jpg"
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div className="absolute -right-1 -top-1 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              <p className="m-0">2</p>
            </div>
          </div>
          <div className="ml-3">
            <h4 className="text-lg">
              Hi, <span className="font-bold">Christabel</span>
            </h4>
            <p className="text-sm text-gray-400">
              Here's your activity for today. Take a moment to have a look.
            </p>
          </div>
        </div>
        <div className="w-full border mt-4 p-3 rounded-lg h-56">
          <div className="flex flex-row items-center justify-between">
            <div>
              <h4 className="font-bold text-lg">Accounting</h4>
              <p className="text-gray-500 text-sm">
                March 1 2020<span></span>April 31 2021
              </p>
              <div className="mt-4">
                <p className="text-xs text-gray-500">AVG MONTHLY Income</p>
                <p className="font-bold text-2xl">$5,849.56</p>
              </div>
            </div>
            <div className="p-2 flex flex-row mt-4 items-end">
              <div className="mx-2 flex flex-col items-center">
                <div className="bg-teal-600 bg-opacity-20 rounded-t-full w-6 h-10"></div>
                <p className="text-xs text-center mt-1">Nov</p>
              </div>
              <div className="mx-2 flex flex-col items-center">
                <div className="bg-teal-600 bg-opacity-20 rounded-t-full w-6 h-12"></div>
                <p className="text-xs text-center mt-1">Dec</p>
              </div>
              <div className="mx-2 flex flex-col items-center">
                <div className="bg-teal-600 bg-opacity-20 rounded-t-full w-6 h-14"></div>
                <p className="text-xs text-center mt-1">Jan</p>
              </div>
              <div className="mx-2 flex flex-col items-center">
                <div className="bg-teal-600 bg-opacity-20 rounded-t-full w-6 h-16"></div>
                <p className="text-xs text-center mt-1">Feb</p>
              </div>
              <div className="mx-2 flex flex-col items-center">
                <div className="bg-teal-500 rounded-t-full w-6 h-20"></div>
                <p className="text-xs text-center mt-1">Mar</p>
              </div>

              <div className="mx-2 flex flex-col items-center">
                <div className="bg-teal-600 bg-opacity-20 rounded-t-full w-6 h-10"></div>
                <p className="text-xs text-center mt-1">Apr</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-row justify-between mt-2">
            <div>
              <div>
                <h4 className="text-2xl font-bold">$84,240.38</h4>
                <p>Total Income</p>
              </div>
            </div>
            <div>
              <div>
                <h4 className="text-2xl font-bold">$84,240.38</h4>
                <p>Total Expense</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-row p-2 mt-4">
          <div className="flex-1 border flex flex-col justify-between m-1 rounded-lg p-2">
            <h4 className="font-bold">Task Summary</h4>
            <div className="mt-4 flex flex-row ">
              <div className="w-16 h-20 flex flex-col justify-between bg-orange-500 m-1 rounded p-1">
                <h4 className="text-white">New</h4>
                <p className="text-white font-roboto text-lg">3</p>
              </div>
              <div className="w-16 h-20 bg-blue-500 m-1 flex flex-col justify-between rounded p-1">
                <h4 className="text-white">New</h4>
                <p className="font-roboto text-white text-lg">16</p>
              </div>
              <div className="w-16 h-20 bg-cyan-500 m-1 flex flex-col justify-between rounded p-1">
                <h4 className="text-white">New</h4>
                <p className="text-white font-roboto text-lg">36</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">On-time Completion Rate</p>
              <h4 className="text-2xl font-bold flex flex-row items-center">
                98%
                <span className="text-teal-600 text-xs ml-2 flex flex-row items-center">
                  <img
                    src="topRight.png"
                    alt=""
                    className="w-6 h-6"
                    style={{
                      filter:
                        "invert(37%) sepia(72%) saturate(635%) hue-rotate(168deg)",
                    }}
                  />
                  2.73%
                </span>
              </h4>
            </div>
          </div>
          <div className="flex-1 border m-1 rounded-lg p-3">
            <div className="flex flex-row items-center justify-between">
              <h4 className="font-bold">Properties</h4>
              <div className="flex flex-row items-center">
                <p className="text-teal-500">All Properties</p>
                <img
                  src="right.png"
                  alt=""
                  className="w-6 h-6 relative"
                  style={{
                    filter:
                      "invert(37%) sepia(72%) saturate(635%) hue-rotate(168deg)",
                  }}
                />
              </div>
            </div>
            <div className="mt-2 flex flex-row justify-between">
              <div className="">
                <div className="flex items-center m-2">
                  <div className="w-4 h-4 bg-blue-900"></div>
                  <div className="ml-2">
                    <h4 className="font-bold">298</h4>
                    <p className="text-sm font-medium">Occupied 41%</p>
                  </div>
                </div>
                <div className="flex items-center m-2">
                  <div className="w-4 h-4 bg-cyan-600"></div>
                  <div className="ml-2">
                    <h4 className="font-bold">249</h4>
                    <p className="text-sm font-medium">Vacant 27%</p>
                  </div>
                </div>
                <div className="flex items-center m-2">
                  <div className="w-4 h-4 bg-orange-500"></div>
                  <div className="ml-2">
                    <h4 className="font-bold">89</h4>
                    <p className="text-sm font-medium">Maintenance 1.3%</p>
                  </div>
                </div>
              </div>

              <DonutChart />
            </div>
          </div>
        </div>
      </div>
      <div className="w-80">
        <div className=" flex flex-row justify-between border-b p-2">
          <div className="flex flex-row items-center">
            <div className="bg-orange-600 m-1 rounded-full flex items-center">
            <img
  src="storm.png"
  alt=""
  className="w-8 h-8 rounded-full"
  style={{
    filter: "invert(100%) brightness(100%)"
  }}
/>

            </div>
            <div className="bg-gray-200 relative m-1 rounded-full flex justify-center items-center w-8 h-8">
            <div className="absolute -right-1 -top-1 bg-cyan-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              <p className="m-0">2</p>
            </div>
                <img src="notification.png" alt="" className="w-4 h-4 rounded-full"/>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <h4 className="font-roboto">Christabel Ama</h4>
              <p className="text-end text-sm text-gray-400 font-nunito">
                Manager
              </p>
            </div>
            <div>
              <img
                src="userThree.jpg"
                alt=""
                className="w-8 h-8 rounded-full ml-1"
              />
            </div>
          </div>
        </div>
        <div className="border-b p-2">
          <div className="flex flex-row justify-between items-center">
            <h4>
              <span className="font-bold">Today,</span>4 November
            </h4>
            <div className="flex flex-row">
              <img src="left.png" alt="" className="w-5" />
              <img src="right.png" alt="" className="w-5" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <div className="w-6 h-6 rounded-full p-1 bg-green-800 bg-opacity-10">
                <p className="text-xs text-center">1</p>
              </div>
              <h4 className="text-xs text-center">Mon</h4>
            </div>
            <div>
              <div className="w-6 h-6 rounded-full p-1 bg-green-800 bg-opacity-10">
                <p className="text-xs text-center">2</p>
              </div>
              <h4 className="text-xs text-center">Tue</h4>
            </div>
            <div>
              <div className="w-6 h-6 rounded-full p-1 bg-green-800 bg-opacity-10">
                <p className="text-xs text-center">3</p>
              </div>
              <h4 className="text-xs text-center">Wed</h4>
            </div>
            <div>
              <div className="w-6 h-6 rounded-full p-1 bg-green-800 bg-opacity-10">
                <p className="text-xs text-center">4</p>
              </div>
              <h4 className="text-xs text-center">Thu</h4>
            </div>
            <div className="border-b-2 border-green-900">
              <div className="w-6 h-6 rounded-full p-1 bg-green-800 bg-opacity-10">
                <p className="text-xs text-center">5</p>
              </div>
              <h4 className="text-xs text-center">Fri</h4>
            </div>
            <div>
              <div className="w-6 h-6 rounded-full p-1 bg-green-800 bg-opacity-10">
                <p className="text-xs text-center">6</p>
              </div>
              <h4 className="text-xs text-center ">Sat</h4>
            </div>
            <div>
              <div className="w-6 h-6 rounded-full p-1 bg-green-800 bg-opacity-10">
                <p className="text-xs text-center">7</p>
              </div>
              <h4 className="text-xs text-center">Sun</h4>
            </div>
          </div>
        </div>
        <div className="border-b p-2 flex flex-row">
          <div className="cursor-pointer">
            <ul>
              <li className="text-sm m-5 text-center text-gray-300">9:30am</li>
              <li className="text-sm m-5 text-center text-gray-300">10:00am</li>
              <li className="text-sm m-5 text-center text-gray-300">10:30am</li>
              <li className="text-sm m-5 text-center text-gray-300">11:00am</li>
              <li className="text-sm m-5 text-center text-gray-300">11:30am</li>
            </ul>
          </div>
          <div className="">
            <div className="bg-cyan-400 items-center mt-4 justify-evenly h-10 flex flex-row w-52 rounded-lg">
              <div className="w-8 h-8 bg-white p-2 rounded-full">
                <img src="calendar.png" alt="" className="" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  <span>Monthly . </span>
                  <span>Landscapping</span>
                </p>
              </div>
            </div>
            <div className="bg-orange-400 p-2 mt-3 h-10 w-52 flex items-center rounded-lg">
              <div className="w-8 h-8 bg-white p-2 rounded-full">
                <img src="calendar.png" alt="" className="" />
              </div>
              <div>
                <p className="text-sm font-medium text-white ml-2">
                  <span>Broken </span>
                  <span>Clamp</span>
                </p>
              </div>
            </div>
            <div className="bg-blue-600 flex flex-row items-center p-2 mt-10 h-12 w-52 rounded-lg">
            <div className="w-8 h-8 bg-white p-2 rounded-full">
                <img src="report.png" alt="" className="" />
              </div>
              <div className="ml-2">
                 <p className="text-white">Generate Report</p>
                 <p className="text-xs text-white">Personal Task</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-2">
          <div className="p-2 flex flex-row items-center justify-between">
            <h4 className="font-bold">Recent Activities</h4>
            <div>
              <img src="horizontal.png" alt="" className="w-10" />
            </div>
          </div>
          <div>
            <div className="flex flex-row m-1">
              <img
                src="userOne.jpg"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="-mt-4 ml-4">
                <h4 className="font-bold text-red-500 text-sm">New Task</h4>
                <p>
                  <span>Logan Harrington</span> created...
                </p>
                <p>Today 9:48 AM</p>
                <div className="w-60 p-2 border rounded-xl">
                  <h4 className="font-bold text-sm">
                    Water drip from faucets{" "}
                    <span className="text-gray-400 text-xs ml-2">#222</span>
                  </h4>
                  <p className="p-1 bg-red-500 w-24 text-white font-bold rounded-full text-xs">
                    MAINTENANCE
                  </p>
                </div>
              </div>
            </div>
            <div className="border-l h-10 mx-5"></div>
            <div className="flex flex-row m-1">
              <img
                src="userOne.jpg"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="-mt-4 ml-4">
                <h4 className=" text-green-600 text-xs font-bold">
                  Task Completed
                </h4>
                <h4 className="font-medium text-sm">
                  Water drip from faucets
                  <span className="text-gray-500 ml-1">completed task</span>
                  <span className="text-gray-400 text-xs ml-2">#222</span>
                </h4>
                <p className="text-gray-500 text-sm">Yesterday 9:48 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
