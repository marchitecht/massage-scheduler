import { useRef } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Calendar from "./Calendar";
import ContentSection from "./ContentSection";
import Link from "next/link";
import BlogSections from "./BlogSections";

const Hero = ({ meetings }) => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full h-screen">
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
        <div className="grid ">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/84752eb1-8858-4ef8-b695-8f91528e55cc/-/scale_crop/832x1032/center/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/8b7d600f-9175-42d3-86ed-9141acfd38b8/-/scale_crop/432x432/center/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/df28dbc6-9e6c-4487-b182-58f33fafed3e/-/scale_crop/432x332/center/"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/5f09c26f-8dec-42c5-b259-e58fca36deed/-/scale_crop/432x432/center/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/2f4d6a46-35a8-42d9-84b5-34ab65ddb986/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/37f6f9a6-d0fd-4bfb-8cee-e66e0059b844/"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/69e74a91-bf11-4af3-b121-5f3a577f772e/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/8556712f-2ba7-4f10-b265-dc7b4d745cf2/-/scale_crop/432x432/center/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/87c21c9c-8005-46c1-9746-4595f7f9c67a/"
              alt=""
            />
          </div>
        </div>
        <div className="grid ">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/a2aa29d4-1ae7-4cae-bfb2-dfc159c212c3/-/scale_crop/432x432/center/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/09e5c785-0c99-4506-a53c-26f3af708a29/-/scale_crop/732x1032/center/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/75e22394-7059-4284-9802-0559914166d2/-/preview/938x432/-/quality/smart/-/format/auto/"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className=" grid px-10 py-36 lg:py-4 mx-auto max-w-screen-3xl bg-gradient-to-b from-black/90  absolute top-0 left-0 w-full  ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-44 lg:px-12  ">
          <h1 className="text-2xl mb-2 font-extrabold tracking-tight leading-none text-white  md:text-5xl lg:text-6xl font-outline-4 ">
            Массажная студия
          </h1>
          <span className=" text-4xl font-extrabold tracking-tight leading-none text-white  md:text-5xl lg:text-6xl ">
            Юрия Шпакова
          </span>
          <p className="mb-20  mt-20  text-lg font-normal text-white  lg:text-xl sm:px-16 xl:px-38 ">
            Ваше здоровье – наша главная цель. Мы помогаем людям улучшить свое
            здоровье благодаря лимфодренажному, классическому, спортивному
            массажу.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 ">
            <button
              onClick={handleClick}
              className=" inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              Записаться
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gray-900  group-hover:from-purple-900 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
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
          </div>
        </div>
      </section>

      <div ref={ref}>
        <Calendar meetings={meetings} />
      </div>

      <ContentSection />
      <BlogSections />
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
            © 2024{" "}
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
