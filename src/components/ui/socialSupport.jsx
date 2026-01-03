import { Button } from "./button";

function SocialSupport({ nPage, setNPage }) {
  function changeMain() {
    if (nPage != 0) {
      setNPage(0);
    }
  }

  return (
    <main className="min-h-screen light">
      <h1 className="text-[40px] font-bold bg-indigo-300 text-center">
        APOYO SOCIAL
      </h1>
      <section className="h-[88.1vh] flex justify-center items-center">
        <div className="border-2 w-130 px-2 py-1 m-2 rounded-3xl border-blue-600 bg-indigo-300">
          <h2 className="font-bold text-[20px] text-center border-b w-3/12 m-auto">Definición</h2>
          <p className="px-2 py-1 m-2">
            El apoyo social es una serie de recursos psicológicos (proveniente
            de otras personas) que son significativas para un individuo y que lo
            hacen sentirse estimado y valorado. Están compuestas por
            transacciones interpersonales que implican la expresión de afectos
            positivos y la provisión de ayuda o asistencia a una o más personas.
            Esto permite que las necesidades sociales básicas de un individuo
            sean satisfechas por medio de la interacción con otros.
          </p>
        </div>{" "}
        <img
          src="/imagenApoyoSocial.jpg"
          alt="Social support image"
          className="border-2 px-4 m-2 py-4 rounded-3xl bg-indigo-200 border-blue-600"
        />
        <div className="border-2 rounded-3xl border-blue-600 bg-indigo-300 px-2 py-1 w-130 m-2">
          <h2 className="font-bold text-[20px] text-center border-b w-6/12 m-auto">
            Beneficios para la salud
          </h2>
          <p className="px-2 py-1 m-2">
            Se sostiene que el apoyo social produce ciertos efectos positivos en
            la salud, principalmente en el estrés, donde es capaz de proteger a
            un individuo de los factores patógenos que pueden producir los
            eventos estresantes. Se postula que el apoyo social puede
            incrementar el bienestar emocional y físico, o al menos disminuir
            los efectos negativos y al mismo tiempo favorecer el cambio en las
            conductas de un individuo, independientemente o no del estrés que
            posea. Otras investigaciones sugieren directamente que, una vez
            alcanzado cierto umbral en el apoyo social, no resulta en un mayor
            aumento comparable de bienestar físico y/o mental.
          </p>
        </div>
      </section>
      <footer>
        <div className="flex justify-center items-center bg-indigo-300">
          <p className="bg-indigo-400 px-2 py-1 rounded font-bold m-2">
            <a
              href="https://es.wikipedia.org/wiki/Apoyo_social"
              target="_blank"
              rel="noopener"
            >
              Página de informacion (Wikipedia)
            </a>
          </p>
          <Button
            text={"Página principal"}
            className={"bg-indigo-400 rounded w-1/12 px-2 py-1 m-2 font-bold"}
            onClick={changeMain}
          />
        </div>
      </footer>
    </main>
  );
}

export { SocialSupport };
