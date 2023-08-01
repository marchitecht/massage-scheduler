// import styles from "../styles/Hero.module.css";
import { useRef } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Calendar from "./Calendar";
import Link from "next/link";
const Hero = ({ meetings }) => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full h-screen">
      <video autoPlay loop muted className="w-full h-screen object-cover">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="bg-black/60 absolute top-0 left-0 w-full h-screen"></div>

      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        {" "}
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Массаж - Ваше здоровье и похудение
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Профессиональный массаж в Москве. Студия Юрия Шмакова ориентируется
            на лимфодренажном, спортивном и других 8 видах массажа.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleClick}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Посмотреть время
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div ref={ref}>
        <Calendar meetings={meetings} />
      </div>
      <footer className=" shadow bg-black ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="https://schmakov.com/"
              className="flex items-center mb-4 sm:mb-0">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Студия Юрия Шмакова
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              {/* <li>
                <Link href="tel:79685445452" className="mr-4 hover:underline md:mr-6 ">
                  
                </Link>
              </li> */}

              <li>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="flex relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <Link href="tel:+79685445452" className="mr-2">
                      Позвонить
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="20"
                      fill="white"
                    
                      viewBox="0 0 16 16">
                      <path d="M11 1a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1h6zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z"></path>
                      <path d="M8 14a1 1 0 100-2 1 1 0 000 2z"></path>
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Студия Юрия Шмакова™
            </a>
            . Все права защищены.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
