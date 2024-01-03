// import styles from "../styles/Hero.module.css";
import { useRef } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import ContentSection from "./ContentSection";
import Link from "next/link";
import BlogSections from "./BlogSections";
import CalendarCosm from "./CalendarCosm";
import ContentSectionCos from "./ContentSectionCos";

const Cosmetology = ({ meetings }) => {
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
              src="https://ucarecdn.com/5977c3ad-a250-4251-8aa0-1fb6840ba107/-/scale_crop/432x550/center/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/25377d05-f83c-4770-b08b-d5b20a514a0e/-/scale_crop/432x550/center/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/ebcc541a-15db-4f09-824e-8b1f2bb8d084/-/scale_crop/500x550/"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/11429301-e562-4028-953b-1fcba6f83e6b/-/scale_crop/500x550/center/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/c979d315-8a34-4c11-a018-2c0e5d179760/-/scale_crop/450x700/center/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/6fed89b1-dda5-45fb-998e-732e2c3480b9/-/scale_crop/450x500/center/"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/5d61e9a2-51ec-418f-8882-0cb29ab82354/-/scale_crop/500x600/center/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/344f5ecd-ed88-4403-83c4-bd93d2ef194f/-/scale_crop/450x600/center/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/accc0dc4-1120-4144-8360-eb14508192c8/-/scale_crop/500x600/center"
              alt=""
            />
          </div>
        </div>
        <div className="grid ">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/77a2818d-8874-4b29-af22-beddf81a36f6/-/scale_crop/500x550/-/quality/smart_retina/-/format/auto/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/accc0dc4-1120-4144-8360-eb14508192c8/-/scale_crop/500x650/-/quality/smart_retina/-/format/auto/"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://ucarecdn.com/bd05c624-e53d-48d7-8dd4-9e7eae629a18/-/scale_crop/500x650/-/quality/smart_retina/-/format/auto/"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className=" grid px-10 py-36 lg:py-4 mx-auto max-w-screen-3xl bg-gradient-to-b from-black/90  absolute top-0 left-0 w-full  ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-44 lg:px-12  ">
          <h1 className="text-2xl mb-2 font-extrabold tracking-tight leading-none text-white  md:text-5xl lg:text-6xl font-outline-4 ">
            Косметология
          </h1>
          <span className=" text-4xl font-extrabold tracking-tight leading-none text-white  md:text-5xl lg:text-6xl ">
            Юрия Шпакова
          </span>
          <p className="mb-20  mt-20  text-lg font-normal text-white  lg:text-xl sm:px-16 xl:px-38 ">
            Мы помогаем людям очистить кожу лица. Наш центр косметологии
            предлагает необходимые процедуры, чтобы восстановить улучшение кожи,
            поддержание молодости и создание неповторимого образа.
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
        <CalendarCosm meetings={meetings} />
      </div>

      <ContentSectionCos />
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

export default Cosmetology;
