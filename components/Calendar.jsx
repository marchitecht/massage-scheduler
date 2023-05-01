import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import dayjs from "dayjs";
import { Fragment, useEffect, useState } from "react";
import { range } from "../utils/timeRange";
import Radiogroup from "./Radiogroup";
import SubmitForm from "./SubmitForm";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar({ meetings, services }) {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  console.log(selectedDay, "selectedDayselectedDay");

  useEffect(() => {
    console.log(format(selectedDay, "dd.MM.yyyy"), "in useeff selecteday");
  }, [selectedDay]);

  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  let selectedDayMeetings = meetings.filter((meeting) => {
    let time = meeting.startDatetime.slice(11);
    let formatted = meeting.startDatetime.slice(0, 11).split(".");
    let formattedTo = dayjs(
      `${formatted[1]}.${formatted[0]}.${formatted[2]} ${time}`
    ).$d;
    return isSameDay(formattedTo, selectedDay);
  });

  const arrDates = selectedDayMeetings.map((meeting) => {
    let time = meeting.startDatetime.slice(11, 16);
    let timeEnd = meeting.endDatetime.slice(11, 16);
    return [time, timeEnd];
  });
  console.log(arrDates, "arrdatessss");

  return (
    <div className="pt-12 pb-12 bg-black">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-100">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-white">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-white hover:text-gray-500">
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-white hover:text-gray-500">
                <span className="sr-only text-white">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-white">
              <div>Вс</div>
              <div>Пн</div>
              <div>Вт</div>
              <div>Ср</div>
              <div>Чт</div>
              <div>Пт</div>
              <div>Сб</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}>
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-white",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}>
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-white">
              Выберите время:
              {/* <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time> */}
            </h2>
            <div className="mt-4 space-y-1 text-sm leading-6 text-white">
              {/* {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => ( */}
              <Radiogroup
                bookingDate={format(selectedDay, "dd.MM.yyyy")}
                time={arrDates}
                // startTime={dayjs(meeting.startDatetime).format("HH:mm")}
                // endTime={dayjs(meeting.endDatetime).format("HH:mm")}
                // key={meeting.id}
              />
              {/* // <Meeting meeting={meeting} key={meeting.id} />
              //   ))
              // ) : (
              //   <Radiogroup />
              // )} */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
