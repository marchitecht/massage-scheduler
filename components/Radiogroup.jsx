import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { range } from "../utils/timeRange";
import dayjs from "dayjs";
import SubmitForm from "./SubmitForm";

export default function Radiogroup({ time, bookingDate }) {
  let start = [];
  let between = [];
  let end = [];
  for (let i = 0; i < time.length; i++) {
    for (let j = 0; j < range.length; j++) {
      if (time[i][0] === range[j]) {
        start.push(time[i][0]);
      } else if (range[j] > time[i][0] && range[j] < time[i][1]) {
        between.push(range[j]);
      } else {
        if (time[i][1] === range[j]) {
          end.push(time[i][1]);
        }
      }
    }
  }

  let indexStart = start
    .map((startTime) => range.indexOf(startTime))
    .filter((index) => index !== -1);
  let indexBetween = between
    .map((betweenTime) => range.indexOf(betweenTime))
    .filter((index) => index !== -1);

  const list = [...indexStart, ...indexBetween].sort((a, b) => a - b);

  const indexes = [...new Set(list)];

  const [selected, setSelected] = useState(null);
  // console.log(selected, "selected in radio group");

  return (
    <>
      <RadioGroup value={selected} onChange={setSelected}>
        {/* <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label> */}
        <div className="grid grid-cols-4 gap-2 place-items-start bg-tranparent ">
          {range.map((elem, i) => (
            <RadioGroup.Option
              disabled={indexes.includes(i)}
              key={elem.toString()}
              value={elem}
              className={({ active, checked }) =>
                `${
                  active
                    ? "ring-1 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                    : ""
                }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-6 py-4 shadow-md focus:outline-none
                    ${
                      indexes.includes(i)
                        ? "bg-[#9ca3af] cursor-not-allowed"
                        : ""
                    } 
                    `
              }>
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label
                    as="p"
                    className={`font-medium  ${
                      checked ? "text-white" : "text-gray-900"
                    }`}
                    disabled={indexes.includes(i)}>
                    {elem}
                  </RadioGroup.Label>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      {selected && <SubmitForm bookingDate={bookingDate} selected={selected} />}
    </>
  );
}
