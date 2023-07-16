// import styles from "../styles/Hero.module.css";
import { AiOutlineCalendar } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="w-full h-screen">
      <video autoPlay loop muted className="w-full h-screen object-cover">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="bg-black/60 absolute top-0 left-0 w-full h-screen"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[4%] max-w-[1100px] m-auto absolute p-4">
          {/* <p>Массаж и Косметология</p> */}
          {/* <span className="block text-2xl">Готовы в изменениям?</span> */}
          <h1 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            <span className="block text-white-600 mt-6">
              Начните со своего тела сегодня.
            </span>
          </h1>{" "}
          <p className="max-w-[600px] drop-shadow-2xl py-5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="ml-3 mt-10 inline-flex rounded-md shadow ">
            <a className="inline-flex gap-3 cursor-pointer items-center rounded-md px-3 py-3 bg-gradient-to-r from-cyan-500 to-blue-500">
              <AiOutlineCalendar className="" />
              <span>Найти время</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
