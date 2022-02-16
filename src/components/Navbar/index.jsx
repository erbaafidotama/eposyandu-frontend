import React, { useState, Suspense, lazy, useEffect } from "react";
import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

const Home = lazy(() => import("../../containers/Home/index"));
const About = lazy(() => import("../../containers/About/index"));
const User = lazy(() => import("../../containers/User/index"));

function Index(props) {
  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    const toggleSidebarMobileEl = document.getElementById(
      "toggleSidebarMobile"
    );
    const sidebarBackdrop = document.getElementById("sidebarBackdrop");
    const toggleSidebarMobileSearch = document.getElementById(
      "toggleSidebarMobileSearch"
    );

    if (sidebar) {
      const toggleSidebarMobile = (sidebar) => {
        sidebar.classList.toggle("hidden");
      };

      toggleSidebarMobileSearch.addEventListener("click", () => {
        toggleSidebarMobile(sidebar, sidebarBackdrop);
      });

      toggleSidebarMobileEl.addEventListener("click", () => {
        toggleSidebarMobile(sidebar, sidebarBackdrop);
      });
    }

    if (sidebarBackdrop && sidebar) {
      const toggleSidebarMobile = (sidebar, sidebarBackdrop) => {
        sidebar.classList.toggle("hidden");
        sidebarBackdrop.classList.toggle("hidden");
      };

      sidebarBackdrop.addEventListener("click", () => {
        toggleSidebarMobile(sidebar, sidebarBackdrop);
      });
    }
  }, []);

  const gotoHome = () => {
    console.log("gotoHome");
    props.router.navigate("/");
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
  };

  const gotoMasterLookup = () => {
    // props.history.push("/about");
    props.router.navigate("/about");
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
  };

  const gotoMasterUser = () => {
    props.router.navigate("/user");
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
  };

  return (
    <div>
      <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                id="toggleSidebarMobile"
                // onClick={toggleSidebarMobile}
                aria-expanded="true"
                aria-controls="sidebar"
                className="p-2 mr-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
              >
                <svg
                  id="toggleSidebarMobileHamburger"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  // onClick={toggleSidebarMobileClose}
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <a
                className="text-xl font-bold flex items-center lg:ml-2.5"
                href="/"
              >
                <img
                  src="/images/logo.svg"
                  className="h-6 mr-2"
                  alt="Windster Logo"
                />
                <span className="self-center whitespace-nowrap">Windster</span>
              </a>
              <form
                action="#"
                method="GET"
                className="hidden lg:block lg:pl-32"
              >
                <label htmlFor="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1 lg:w-64">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <button
                id="toggleSidebarMobileSearch"
                // onClick={toggleSidebarMobileSearch}
                type="button"
                className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100"
              >
                <span className="sr-only">Search</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="items-center hidden lg:flex">
                <span className="mr-5 text-base font-normal text-gray-500">
                  Open source ❤️
                </span>
                <div className="-mb-1">
                  <a
                    className="github-button"
                    href="https://github.com/themesberg/windster-tailwind-css-dashboard"
                    data-color-scheme="no-preference: dark; light: light; dark: light;"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themesberg/windster-tailwind-css-dashboard on GitHub"
                  >
                    Star
                  </a>
                </div>
              </div>
              <a
                href="/"
                className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
              >
                <svg
                  className="w-4 h-4 mr-2 -ml-1 svg-inline--fa fa-gem"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="gem"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                  ></path>
                </svg>
                Upgrade to Pro
              </a>
            </div>
          </div>
        </div>
      </nav>
      <aside
        className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 duration-75 lg:flex transition-width"
        aria-label="Sidebar"
        id="sidebar"
      >
        <div className="h-screen px-3 py-4 overflow-y-auto bg-white border-r-2 border-gray-200 rounded dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <div
                onClick={gotoHome}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </div>
            </li>
            <li>
              <div
                onClick={gotoMasterUser}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Master User</span>
              </div>
            </li>
            <li>
              <div
                onClick={gotoMasterLookup}
                // target="_blank"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Master Lookup
                </span>
              </div>
            </li>
            <li>
              <div
                onClick={gotoMasterLookup}
                // target="_blank"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Master Lookup Detail
                </span>
              </div>
            </li>
            <li>
              <div
                onClick={gotoMasterLookup}
                // target="_blank"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Master Warga
                </span>
              </div>
            </li>
            {/* <li>
              <div
                // onClick={gotoMasterLookup}
                // target="_blank"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </div>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span>
              </a>
            </li> */}
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <div
                onClick={gotoMasterLookup}
                // target="_blank"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Data Posyandu
                </span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <div className="relative h-full max-w-full pt-24 pl-2 pr-2 overflow-y-auto bg-gray-50 lg:ml-64">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default Index;
