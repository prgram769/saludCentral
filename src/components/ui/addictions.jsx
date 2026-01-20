import Image from "next/image";
import { Button } from "./button";

function Addictions({ nPage, setNPage }) {
  function changeMain() {
    if (nPage != 0) {
      setNPage(0);
    }
  }

  return (
    <main className="flex flex-1 flex-col">
      <h1 className="addictionsTitle text-[40px] bg-cyan-500 font-bold text-center">
        ADICCIONES
      </h1>
      <section className="addictionsSection flex flex-1 justify-center items-center">
        <div className="addictionsText1 border-2 rounded-3xl px-2 py-1 m-2 w-70 bg-cyan-200 border-blue-800">
          <h2 className="text-[20px] font-bold text-center border-b w-6/12 m-auto">Definición</h2>
          <p className="px-2 py-1 m-2">
            Las adicciones son trastornos neurológicos que generan una necesidad
            compulsiva de consumir una sustancia o realizar una actividad para
            obtener un alivio. Esto afecta el control sobre los impulsos,
            dificulta la abstinencia, altera las emociones y puede causar daño a
            la salud.
          </p>
        </div>
        <Image
          src="/imagenAdicciones.jpg"
          alt="Addictions image"
          width={180}
          heigh={120}
          className="addictionsImage px-4 py-4 m-2 rounded-3xl border-2 bg-cyan-100 border-blue-800"
        />
        <div className="addictionsText2 border-2 m-2 rounded-3xl px-2 py-1 bg-cyan-200 border-blue-800 w-80">
          <h2 className="addictionsText2Title text-[20px] font-bold text-center border-b w-7/12 m-auto">
            Adicciones más frecuentes
          </h2>
          <ul className="list-disc px-8 py-1">
            <li>
              <a
                href="https://es.wikipedia.org/wiki/Alcoholismo"
                target="_blank"
                rel="noopener"
              >
                Adicción al alcohol
              </a>
            </li>
            <li>
              <a
                href="https://es.wikipedia.org/wiki/Tabaquismo"
                target="_blank"
                rel="noopener"
              >
                Adicción al tabaco
              </a>
            </li>
            <li>
              <a
                href="https://es.wikipedia.org/wiki/Drogodependencia"
                target="_blank"
                rel="noopener"
              >
                Adicción a las drogas
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Caffeine_dependence"
                target="_blank"
                rel="noopener"
              >
                Adicción a la cafeína
              </a>
            </li>
            <li>
              <a
                href="https://es.wikipedia.org/wiki/Tecnofilia"
                target="_blank"
                rel="noopener"
              >
                Adicción al móvil y a internet
              </a>
            </li>
            <li>
              <a
                href="https://es.wikipedia.org/wiki/Ludopat%C3%ADa"
                target="_blank"
                rel="noopener"
              >
                Adicción al juego
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer className="text-center">
        <Button
          text={"Página principal"}
          className={"btn bg-cyan-300 rounded px-2 py-1 font-bold m-2 w-1/12"}
          onClick={changeMain}
        />
      </footer>
    </main>
  );
}

export { Addictions };
