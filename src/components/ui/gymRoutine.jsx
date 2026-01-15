import { Button } from "./button";

function GymRoutine({ nPage, setNPage }) {
  function changeMain() {
    if (nPage != 0) {
      setNPage(0);
    }
  }

  return (
    <>
      {" "}
      <main className="flex flex-col flex-1">
        <h1 className="gymRoutineTitle text-center font-bold text-[40px] bg-rose-700">
          EJERCICIO Y DIETAS
        </h1>
        <section>
          <div className="gymRoutineDiv flex m-auto justify-center items-center border-2 bg-rose-200 border-red-600 px-2 py-1 rounded-3xl mt-3 w-100">
            <table className="text-center text-[13px]">
              <caption className="border-b-2 border-red-700 border-t-2 mb-2 font-bold text-[20px]">
                Rutina semanal saludable de gym
              </caption>

              <thead>
                <tr className="border-b border-red-700">
                  <th>Dias de la semana</th>
                  <th>Entrenamiento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lunes</td>
                  <td>Piernas y abdominales + cardio</td>
                </tr>
                <tr>
                  <td>Martes</td>
                  <td>Pecho + cardio</td>
                </tr>
                <tr>
                  <td>Miércoles</td>
                  <td>Espalda y abdominales + cardio</td>
                </tr>
                <tr>
                  <td>Jueves</td>
                  <td>Brazos y pecho + cardio</td>
                </tr>
                <tr>
                  <td>Viernes</td>
                  <td>Abdominales + cardio</td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>Pecho + cardio</td>
                </tr>
                <tr>
                  <td>Domingo</td>
                  <td>Abdominales + cardio</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="dietSection flex">
          <div className="dietSectionDiv">
            <div className="dietsDiv w-300 border-2 px-2 py-2 rounded-3xl bg-rose-300 border-red-600 m-4">
              <h2 className="font-bold text-[20px] text-center border-b-2 border-red-600 border-t-2 m-auto mt-3 px-2 py-1 w-3/12">
                Dietas
              </h2>
              <div className="border-2 border-red-600 bg-rose-200 m-3 px-3 rounded-3xl text-[13px] py-1">
                <h3 className="mediterraneanDietTitle text-center border-b border-red-700 m-auto w-3/12 font-bold text-[15px]">
                  Dieta mediterránea
                </h3>
                <p className="font-semibold py-1">
                  Características principales:
                </p>
                <ul className="list-disc px-6 py-1">
                  <li>
                    Énfasis en alimentos vegetales: Abundancia de frutas,
                    verduras, legumbres, cereales integrales, frutos secos y
                    semillas.
                  </li>
                  <li>
                    Aceite de oliva como grasa principal: Utilizado en la
                    preparación de alimentos y como aderezo.
                  </li>
                  <li>
                    Consumo moderado de pescado y aves: Preferencia por el
                    pescado azul y carnes blancas.
                  </li>
                  <li>
                    Consumo limitado de carnes rojas y dulces: Se recomienda
                    consumir carnes rojas con moderación y limitar los dulces.
                  </li>
                  <li>
                    Consumo moderado de lácteos: Principalmente yogur y quesos,
                    evitando los lácteos grasos.
                  </li>
                  <li>
                    Vino con moderación: Generalmente se consume con moderación
                    durante las comidas.
                  </li>
                  <li>
                    Actividad física regular: La dieta mediterránea se
                    complementa con un estilo de vida activo.
                  </li>
                </ul>
              </div>{" "}
              <div className="border-2 m-3 px-3 py-1 text-[13px] border-red-600 bg-rose-200 rounded-3xl">
                <h3 className="ketogenicDietTitle text-center border-b border-red-700 m-auto text-[15px] w-2/4 font-bold">
                  Dieta cetogénica (Recomendada para personas con obesidad,
                  diabetes tipo 2 o síndrome metabólico):
                </h3>
                <p className="font-semibold py-1">
                  Características principales:
                </p>
                <ul className="list-disc px-6 py-1">
                  <li>
                    Reducción de carbohidratos: Se restringe la ingesta de
                    alimentos ricos en carbohidratos como pan, pasta, arroz,
                    cereales, azúcares y algunas frutas y verduras.
                  </li>
                  <li>
                    Aumento de grasas: Se incrementa el consumo de grasas
                    saludables, como aguacate, aceite de oliva, frutos secos,
                    semillas, pescado azul y productos lácteos enteros.
                  </li>
                  <li>
                    Consumo moderado de proteínas: Se mantiene una cantidad
                    moderada de proteínas, que también pueden ser utilizadas
                    como fuente de energía, pero en menor medida que las grasas.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/dietImage.png"
              alt="diet image"
              className="dietImage h-100 w-160 border-2 px-4 py-4 border-red-600 bg-rose-200 rounded-3xl"
            />
          </div>
        </section>
      </main>
      <footer className="text-center">
        <Button
          text={"Página principal"}
          className={"btn px-2 py-1 bg-rose-700 rounded m-2 font-bold w-1/12"}
          onClick={changeMain}
        />
      </footer>
    </>
  );
}

export { GymRoutine };
