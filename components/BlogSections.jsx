export default function BlogSections() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Наш блог
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Мы публикуем интересные статьи и новости о массаже
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Похудение
              </span>
              <span className="text-sm">14 дней назад</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="fasting-massage">Как я выбрал лучший массаж и похудел на 5 кг</a>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
              В статье мне захотелось поделиться моим опытом похудения. Я лежал
              в больнице 10 месяцев, и за это время набрал 20 кг. Я столкнулся с
              трудностью в выборе массажного центра. В статье я расскажу, как я
              выбрал лучший массаж и похудел на 5 кг.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://ucarecdn.com/ddbe0965-2406-4180-97a1-a2b9d0fb8ec0/-/scale_crop/432x432/center/"
                  alt="Marat's avatar"
                />
                <span className="font-medium dark:text-white">Марат Мусин</span>
              </div>
              <a
                href="/blog/fasting-massage"
                className="inline-flex items-center font-medium text-white hover:underline">
                Читать
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </article> */}
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                Статья
              </span>
              <span className="text-sm">7 дней назад</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="/blog/fasting-massage">Лучшие практики массажа</a>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
             Рассказываю как практики массажа я использую уже 18 лет и почему они действительно помогают моим клиентам
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://ucarecdn.com/09c2f091-fff1-49be-b849-49cf16ac10e2/"
                  alt="Bonnie Green avatar"
                />
                <span className="font-medium dark:text-white">
                  Юрий Шпаков
                </span>
              </div>
              <a
                href="/blog/fasting-massage"
                className="inline-flex items-center font-medium text-white dark:text-primary-500 hover:underline">
                Подробнее
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
