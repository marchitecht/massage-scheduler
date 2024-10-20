import { useState } from "react";

export default function Page(params) {
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      email: email,
    };

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ form: form }),
      });

      if (response.ok) {
        const result = await response.json();

        await setData(result);
        await setIsOpen(true);
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white ">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg ">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src="https://ucarecdn.com/09c2f091-fff1-49be-b849-49cf16ac10e2/-/crop/1670x1460/0,607/-/preview/3000x3000/"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 ">
                      Юрий Шпаков
                    </a>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      Руководитель студии массажа
                    </p>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      <time
                        pubdate=""
                        dateTime="2022-02-08"
                        title="February 8th, 2022">
                        Авг. 29, 2023
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                Лучшие практики массажа
              </h1>
            </header>
            <p className="lead">
              Здравствуйте Меня зовут Юрий Юрьевич! Я Работаю массажистом уже 18
              лет, коротко о главном, Желаю всем крепкого здоровья и приглашаю к
              себе в студию!
            </p>
            <hr className="mb-4 mt-4" />
            <p>
              Поскольку в мире очень много массажей И в частности их названий Я
              бы хотел выделить наиболее самые важные два вида массажей!
            </p>
            <p>
              На мой взгляд это основа основ всех массажей в мире по которым
              работают все специалисты в России и Европе!
            </p>

            <img
              className="rounded-2xl mt-4 mb-4 mx-auto"
              src="https://ucarecdn.com/a2aa29d4-1ae7-4cae-bfb2-dfc159c212c3/"
              alt=""
            />

            <h2 className="text-2xl font-extrabold tracking-tight leading-none text-gray-900 mb-2">
              Классический массаж
            </h2>
            <p>
              И Первый из них общий классический массаж. Общий классический
              массаж выполняется в ручную по всему телу и оказывает
              положительный эффект не только на кожу и мышцы но и кровеносную и
              лимфатическую систему, что служит отличным показаниям для нашего
              здоровья!
            </p>

            <h2 className="text-2xl font-extrabold tracking-tight leading-none text-gray-900 mb-2 mt-4">
              Лимфодренажный массаж
            </h2>

            <p>
              И второй - это лимфодренажный массаж наиболее самый ценный, для
              человеческого организма.
            </p>
            <p>
              При лимфодренажном массаже ускоряется движение крови и лимфы
              следовательно, усиливается вывод продуктов распада из организма.
              Увеличивается количество раскрытых капилляров в тканях в
              результате улучшается венозное кровообращение, облегчается работа
              сердца. Повышается температура кожных покровов Что способствует
              улучшению окислительно-восстановительных процессов и более
              интенсивному снабжению тканей кровью!
            </p>
            <img
              className="rounded-2xl mt-4 mb-4 mx-auto"
              src="https://ucarecdn.com/8b7d600f-9175-42d3-86ed-9141acfd38b8/"
              alt=""
            />
            <p>
              Желаю всем крепкого здоровья и Приглашаю всех желающих к себе в
              массажную студию пройти курс массажа!
            </p>
          </article>
        </div>
      </main>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Подпишись на наши новости
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Мы публикуем успехи наших клиентов, делимся полезным опытом и
              рассказываем о пользе массажа
            </p>
            <form action="#" onSubmit={handleSubmit}>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Ваш Email
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Подписаться
                  </button>
                </div>
              </div>
              {isOpen && (
                <div
                  className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 ml-3 mt-8 lg:ml-44"
                  role="alert">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
                    />
                  </svg>
                  <div className="pl-4 text-sm font-normal">
                    Мы будем слать вам письма!
                  </div>
                </div>
              )}
              <a
                href="/"
                className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 ml-3 mt-8 lg:ml-44"
                role="alert">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  ariaHidden="true"
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  viewBox="0 0 14 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5H1m0 0l4 4M1 5l4-4"></path>
                </svg>
                <div className="pl-4 text-sm font-normal">На главную</div>
              </a>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-gray-50 dark:bg-gray-800">
        <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
          {/*  */}
          {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
          <div className="text-center">
            <a
              href="/"
              className="flex justify-center items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
              Студия Юрия Шпакова
            </a>
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
              © 2023{" "}
              <a href="#" className="hover:underline">
                Студия Юрия Шпакова™
              </a>
              . Все права защищены.
            </span>
            <ul className="flex justify-center mt-5 space-x-5">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
