import { useState } from "react";
import { Link } from "react-router-dom";
import UserIcon from "./icons/user";
import CartIcon from "./icons/cart";
import HeartIcon from "./icons/heart";
import "../assets/styles/navbar.css";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <header>
      <nav className="nav-header py-2 mobile:mx-4 lg:mx-20 lg:py-4 relative">
        <div className="w-full flex items-center lg:py-2">
          <div className=" md:hidden">
            <button
              onClick={handleToggleNavbar}
              className="flex-1 nav-toggler p-0 border-none mr-5"
              type="button"
            >
              {openNavbar ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M3 6.00098H21M3 12.001H21M3 18.001H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className=" mobile:w-full mobile:flex mobile:justify-center lg:flex-1 lg:justify-start">
            <Link className="nav-brand m-0" href="/home">
              {/* <div className="position-relative h-full overflow-hidden">
                    <img
                      src="#"
                      alt="logo"
                      className="w-auto h-100"
                      width={10}
                      height={10}
                    />
                  </div> */}

              <span className="xl:text-2xl">StoreName </span>
            </Link>
          </div>

          <div className="hidden lg:flex w-1/2">
            <input
              // ref={searchInputRef}
              className="w-full border border-gray-300 bg-black rounded-md px-2 py-3 focus:outline-none"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
              // onKeyUp={_handleeOnSearchKeyDown}
            />
          </div>

          <div className="flex-1 justify-end items-center">
            <ul className="m-0 p-0 flex justify-end items-center gap-7">
              <li className="hidden lg:block nav-item dropdown">
                <Link
                  // href={loggedIn ? urls.wishlist : urls.login}
                  className="nav-link dropdown-btn m-0"
                >
                  <HeartIcon width={24} height={24} color="white" />
                </Link>
              </li>
              <li className="hidden lg:block nav-item dropdown ">
                <Link
                  // href={loggedIn ? urls.profile : urls.login}
                  className="nav-link dropdown-btn m-0"
                >
                  <UserIcon width={24} height={24} color="white" />
                </Link>
              </li>

              <li className="nav-item dropdown col-md-auto mr-1">
                <Link
                  // href={loggedIn ? urls.cart : urls.login}
                  className="relative nav-link nav-with-text m-0"
                >
                  <CartIcon width={24} height={24} color="white" />

                  <span className="absolute -top-4 -right-3 bottom-3 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    1
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* {mobile nav}  */}
      {openNavbar && (
        <div
        // className={clsx(
        //   "h-full w-10/12 mdPlus:w-1/2 navbar-collapse  lg:hidden",
        //   openNavbar && "open"
        // )}
        >
          {/* {loggedIn && (
            <div className="user-info">
              <div className="user-name">
                <span>
                  Hello {user?.first_name ? user?.first_name : "User"}
                </span>
                <span>
                  <RightChevron width={14} height={14} />
                </span>
              </div>
            </div>
          )} */}

          {/* {navBar && (
              <Accordion
                navElements={navBar.navElements}
                categories={categories}
                wishlist={urls.wishlist}
              />
            )} */}
        </div>
      )}

      <div className="hidden md:flex header-menu py-3 justify-center">
        <ul className="relative m-0 py-2 flex gap-x-6">
          <li>Elem1</li>
          <li>Elem2</li>
          <li>Elem3</li>
          <li>Elwe4</li>
          <li>Elem5</li>
          {/* {navBar && generateNavElement(navBar.navElements, categories)} */}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
