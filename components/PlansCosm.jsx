import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default function PlansCosm(props) {
  const [services, setServices] = useState();
  const { stepNext } = props;

  //API CALL
  useEffect(() => {
    async function getData() {
      const resServices = await fetch("https://schpakov.ru/api/cosmetology");
      const services = await resServices?.json();
      setServices(services);
    }
    getData();
  }, []);

  const [selected, setSelected] = useState();
  // console.log(selected, 'SELECTED');
  useEffect(() => {
    if (services) {
      setSelected(services[0]);
    }
  }, [services]);

  const oneHour = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
  // console.log(oneHour, "ONE");

  const hourAndHalf = new Date(new Date().getTime() + 1.5 * 60 * 60 * 1000);
  // console.log(hourAndHalf, "ONEHALF");

  const twoHours = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
  // console.log(twoHours, "TWO");

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup
          value={selected}
          onChange={(e) => {
            setSelected(e);
          }}>
          {/* <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label> */}
          <div className="space-y-2">
            {services?.map((plan) => (
              <RadioGroup.Option
                key={plan.title}
                value={plan}
                className={({ active, checked }) =>
                  `
                  ${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 "
                      : ""
                  }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none
                    `
                }>
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}>
                            {plan.title}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}>
                            <span>{plan.price} руб</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <button
          onClick={() => {
            stepNext(selected);
          }}>
          Далее
        </button>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
