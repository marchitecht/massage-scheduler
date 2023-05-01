import { useState } from "react";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";

function Credentials(props) {
  const { startTime, bookingDate, service } = props;
  console.log(props, "props in Credentials");
  console.log(bookingDate, "bookingDate");
  console.log(service);

  function addMinutes(date, minutes) {
    console.log(date, 'date');
    console.log(date.getMinutes(), 'getMinutes');
    date.setMinutes(date.getMinutes() + minutes);
    return date;
  }

  const [form, setForm] = useState({
    startDateTime: bookingDate + " " + startTime,
    endDateTime: format(addMinutes(
      new Date(
        parse(bookingDate + " " + startTime, "dd.MM.yyyy HH:mm", new Date())
      ),
      service?.service?.minutes
    ), 'dd.MM.yyyy HH:mm'),
    name: "",
    tel: "",
    email: "",
  });
  console.log(form.endDateTime, "formdata");

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Пришлем подтверждение на почту :)
      </h2>

      <form action="#" className="space-y-8">
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Ваша почта
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="ваш@имейл.com"
            required
          />
        </div>
        <div>
          <label
            for="tel"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Ваш телефон{" "}
          </label>
          <input
            type="tel"
            id="tel"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder=""
            required
          />
        </div>

        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Send message
        </button>
      </form>
    </div>
  );
}
export default Credentials;
