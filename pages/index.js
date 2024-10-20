import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Radiogroup from "../components/Radiogroup";

import dayjs from "dayjs";
import ContentSection from "../components/ContentSection";
import Cosmetology from "../components/Cosmetology";
import { useState } from "react";

export default function Home({ res, meetings, services, meetingsCos }) {
  const [activeTab, setActiveTab] = useState("massage");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const jsonMeetings = meetings.map(
    ([id, startDatetime, endDatetime, status, name]) => ({
      id: Number(id),
      startDatetime,
      endDatetime,
      status,
      name,
    })
  );
  const jsonMeetingsC = meetingsCos.map(
    ([id, startDatetime, endDatetime, status, name]) => ({
      id: Number(id),
      startDatetime,
      endDatetime,
      status,
      name,
    })
  );

  return (
    <>
      <Head>
        <title>Массажный салон Юрия Шпакова</title>
        <meta name="description" content="Массаж и косметология в Москве" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="absolute top-0 left-0 right-0 z-10">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12  ">
          <nav>
            <a
              onClick={() => handleTabClick("massage")}
              className={`inline-flex justify-between items-center py-1 px-1 text-sm rounded-full ${
                activeTab === "massage" ? "bg-gray-200" : "bg-primary-800"
              }`}>
              <span
                className={`text-xs bg-primary-800 rounded-full  px-2 py-1.5  ${
                  activeTab === "massage" ? "text-black" : "text-white"
                }`}>
                {" "}
                Массаж
              </span>{" "}
            </a>
            <a
              onClick={() => handleTabClick("cosmetology")}
              className={`inline-flex justify-between items-center py-1 px-1 text-sm rounded-full ${
                activeTab === "cosmetology" ? "bg-gray-200" : "bg-primary-800"
              }`}>
              <span
                className={`text-xs bg-primary-800 rounded-full  px-2 py-1.5  ${
                  activeTab === "cosmetology" ? "text-black" : "text-white"
                }`}>
                Косметология
              </span>{" "}
            </a>
          </nav>
        </div>
      </section>
      <div className="relative">
        <main>
          {activeTab === "massage" && (
            <>
              <Hero meetings={jsonMeetings} />
            </>
          )}
          {activeTab === "cosmetology" && (
            <>
              <Cosmetology meetings={jsonMeetingsC} />
            </>
          )}
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const reqMeet = await fetch("https://schpakov.ru/api/meetings");
  const resMeet = await reqMeet.json();

  const reqMeetC = await fetch("https://schpakov.ru/api/meetingsCos");
  const resMeetC = await reqMeetC.json();

  const reqServices = await fetch("https://schpakov.ru/api/services");
  const resServices = await reqServices.json();

  return {
    props: {
      meetings: resMeet.data,
      meetingsCos: resMeetC.data,
    },
  };
}
