export default function ContentSectionCos(params) {
  return (
    <section className="bg-white dark:bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-black sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
            Позвольте себе быть красивыми
          </h2>
          <p className="mb-4">
            Наши лицензированные специалисты обладают глубокими знаниями в
            области косметологии и используют только самые современные методики
            и технологии.
          </p>
          <p>
            Мы предлагаем профессиональные процедуры ухода за кожей лица и тела,
            а также эстетическую косметологию, направленную на решение
            конкретных проблем.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://ucarecdn.com/344f5ecd-ed88-4403-83c4-bd93d2ef194f/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://ucarecdn.com/ebcc541a-15db-4f09-824e-8b1f2bb8d084/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
