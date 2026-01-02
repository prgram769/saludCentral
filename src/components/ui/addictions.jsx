function Addictions({ nPage, setNPage }) {
  function changeMain() {
    if (nPage != 0) {
      setNPage(0);
    }
  }

  return (
    <div className="min-h-screen light">
      <h1 className="text-[40px] bg-cyan-500 font-bold text-center">
        ADICCIONES
      </h1>
      <div className="flex h-[99vh] justify-center items-center">
        <div className="border-2 w-70">
          <h2 className="text-[20px] font-bold text-center">Definición</h2>
          <p>
            Las adicciones son trastornos neurológicos que generan una necesidad
            compulsiva de consumir una sustancia o realizar una actividad para
            obtener un alivio. Esto afecta el control sobre los impulsos,
            dificulta la abstinencia, altera las emociones y puede causar daño a
            la salud.
          </p>
        </div>
        <img
          src="/imagenAdicciones.jpg"
          alt="Addictions image"
          className="w-20 h-20 border-2"
        />
        <div className="border-2 w-70">
          <h2>Adicciones más frecuentes</h2>
          <ul className="list-disc">
            <li>
              <a href="https://es.wikipedia.org/wiki/Alcoholismo" target="_blank" rel="noopener">Adicción al alcohol</a>
            </li>
            <li>
              <a href="https://es.wikipedia.org/wiki/Tabaquismo" target="_blank" rel="noopener">Adicción al tabaco</a>
            </li>
            <li>
              <a href="https://es.wikipedia.org/wiki/Drogodependencia" target="_blank" rel="noopener">Adicción a las drogas</a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Caffeine_dependence" target="_blank" rel="noopener">Adicción a la cafeína</a>
            </li>
            <li>
              <a href="https://es.wikipedia.org/wiki/Tecnofilia" target="_blank" rel="noopener">Adicción al móvil y a internet</a>
            </li>
            <li>
              <a href="https://es.wikipedia.org/wiki/Ludopat%C3%ADa" target="_blank" rel="noopener">Adicción al juego</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Addictions };
