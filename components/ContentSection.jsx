export default function ContentSection(params) {
  return (
    <section className="bg-white dark:bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-black sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
            В здоровом теле - здоровый дух
          </h2>
          <p className="mb-4">
            Массаж – терапевтическая процедура, оказывающая выраженное
            воздействие на лимфоток. Первоначально она применялась только для
            снятия отеков после оперативного вмешательства, а сейчас широко
            используется при заболеваниях вен.
          </p>
          <p>
            Массаж помогает избавить от ряда патологий и устранить косметические
            дефекты кожи.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://ucarecdn.com/75e22394-7059-4284-9802-0559914166d2/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://ucarecdn.com/c705fa03-9c36-4bbb-9d81-8da91367e0b8/"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
