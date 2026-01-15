import { Button } from "./button";

function InterpersonalRelationships({ nPage, setNPage }) {
  function changeMain() {
    if (nPage != 0) {
      setNPage(0);
    }
  }

  return (
    <>
      <main className="flex flex-1 flex-col">
        <h1 className="interpersonalRelationsTitle bg-purple-400 text-[40px] font-bold text-center">
          RELACIONES INTERPERSONALES
        </h1>
        <section className="interpersonalRelationsSection flex flex-1 justify-center items-center">
          <div className="interpersonalRelationsText1 border-2 w-130 m-2 px-2 py-1 rounded-3xl border-indigo-500 bg-purple-200">
            <h2 className="interpersonalRelationsText1Title text-[20px] font-bold text-center border-b m-auto w-3/12">
              Definición
            </h2>
            <p className="px-2 py-1 m-2">
              Las relaciones interpersonales son asociaciones entre dos o más
              personas. Estas asociaciones pueden basarse en emociones y
              sentimientos, como el amor y el gusto artístico, el interés por
              los negocios y por las actividades sociales, las interacciones y
              formas colaborativas en el hogar, entre otros. Las relaciones
              interpersonales tienen lugar en una gran variedad de contextos,
              como la familia, los grupos de amigos, el matrimonio, los entornos
              laborales, los clubes sociales y deportivos, las comunidades
              religiosas y todo tipo de contextos donde existan dos o más
              personas en comunicación.
            </p>
          </div>
          <div className="interpersonalRelationsText2 border-2 w-130 m-2 px-2 py-1 rounded-3xl bg-purple-200 border-indigo-500">
            <h2 className="interpersonalRelationsText2Title text-center text-[20px] font-bold border-b w-3/12 m-auto">
              Estudio
            </h2>
            <p className="px-2 py-1 m-2">
              La sociología es el estudio de las relaciones humanas sociales e
              instituciones, esta es muy diversa ya que abarca a diferentes
              tipos de entornos sociales tales como de crimen a religión, de la
              familia al estado, de las divisiones de raza y clase social a las
              creencias que están compartidas por una cultura en común.
              Unificando el estudio de estos diversos temas es el propósito de
              la sociología; el entendimiento de como la acción humana y la
              conciencia, ambas forman y son formadas por estructuras sociales y
              culturales que los rodea.
            </p>
          </div>
          <img
            src="/imagenRelaciones.jpg"
            alt="relationships image"
            className="interpersonalRelationsImage border-2 border-indigo-500 bg-purple-200 px-4 py-4 rounded-3xl m-2"
          />
        </section>
      </main>
      <footer>
        <div className="flex justify-center items-center bg-purple-200">
          <p className="btn text-center bg-purple-300 rounded font-bold px-2 py-1 m-2">
            <a
              href="https://es.wikipedia.org/wiki/Relaci%C3%B3n_interpersonal"
              target="_blank"
              rel="noopener"
            >
              Página web de la información (wikipedia)
            </a>
          </p>
          <Button
            text={"Página principal"}
            onClick={changeMain}
            className={
              "btn bg-purple-300 rounded w-1/12 px-2 py-1 m-2 font-bold"
            }
          />
        </div>
      </footer>
    </>
  );
}

export { InterpersonalRelationships };
