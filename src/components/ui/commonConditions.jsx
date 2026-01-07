const { Button } = require("./button");

function CommonConditions({ nPage, setNPage }) {
  function changeMain() {
    if (nPage != 0) {
      setNPage(0);
    }
  }

  return (
    <main className="min-h-screen">
      <h1 className="font-bold text-[40px] bg-blue-500 text-center">
        CONDICIONES PSICOLÓGICAS MÁS COMUNES
      </h1>
      <section className="flex h-[88vh] justify-center items-center">
        <div className="border-2 w-90 m-2 px-2 py-1 rounded-3xl border-blue-700 bg-blue-300">
          <h2 className="font-bold text-[20px] text-center m-auto px-2 py-1 border-b w-1/2">
            Condiciones más comunes:
          </h2>
          <ul className="list-disc m-2 px-6 py-1">
            <li>
              <a
                href="https://medlineplus.gov/spanish/anxiety.html"
                target="_blank"
                rel="noopener"
              >
                Ansiedad
              </a>
            </li>
            <li>
              <a
                href="https://medlineplus.gov/spanish/depression.html"
                target="_blank"
                rel="noopener"
              >
                Depresion
              </a>
            </li>
            <li>
              <a
                href="https://medlineplus.gov/spanish/eatingdisorders.html"
                target="_blank"
                rel="noopener"
              >
                Trastornos de la alimentación
              </a>
            </li>
            <li>
              <a
                href="https://medlineplus.gov/spanish/attentiondeficithyperactivitydisorder.html"
                target="_blank"
                rel="noopener"
              >
                Trastornos por déficit de atención e hiperactividad (TDAH)
              </a>
            </li>
            <li>
              <a
                href="https://medlineplus.gov/spanish/bipolardisorder.html"
                target="_blank"
                rel="noopener"
              >
                Trastorno bipolar
              </a>
            </li>
            <li>
              <a
                href="https://medlineplus.gov/spanish/personalitydisorders.html"
                target="_blank"
                rel="noopener"
              >
                Trastornos de la personalidad
              </a>
            </li>
          </ul>
        </div>
        <img
          className="border-2 h-140 w-165 px-4 bg-blue-200 py-4 m-2 border-blue-700 rounded-3xl"
          src="/imagenCondicionPsicologica.jpg"
          alt="Psycologycal image"
        />
        <div className="border-2 m-2 bg-blue-300 px-2 py-1 border-blue-700 w-130 rounded-3xl">
          <h2 className="font-bold text-[20px] text-center m-auto px-2 py-1 border-b w-1/2">
            Comentario sobre las condiciones psicológicas
          </h2>
          <p className="px-6 py-1 m-2">
            Una de cada ocho personas en el mundo padece una condición mental.
            Las condicones mentales comportan alteraciones considerables del
            pensamiento, la regulación de las emociones o el comportamiento. Hay
            muchos tipos diferentes de condiciones mentales. Existen opciones
            eficaces de prevención y tratamiento. Una condicion mental se
            caracteriza por una alteración clínicamente significativa de la
            cognición, la regulación de las emociones o el comportamiento de un
            individuo. Por lo general, va asociado a angustia o a discapacidad
            funcional en otras áreas importantes. Hay muchos tipos diferentes de
            trastornos mentales. También se denominan problemas de salud mental,
            aunque este último término es más amplio y abarca los trastornos
            mentales, las discapacidades psicosociales y (otros) estados
            mentales asociados a una angustia considerable, discapacidad
            funcional o riesgo de conducta autolesiva.
          </p>
        </div>
      </section>
      <footer className="text-center">
        <Button
          text={"Página principal"}
          className={"px-2 py-1 bg-blue-400 m-2 rounded font-bold w-1/12"}
          onClick={changeMain}
        />
      </footer>
    </main>
  );
}

export { CommonConditions };
