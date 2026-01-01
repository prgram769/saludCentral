function GymRoutine({ nPage, setNPage }) {
  return (
    <div className="min-h-screen light flex flex-col">
      <h1 className="text-center font-bold text-[40px]">EJERCICIO Y DIETAS</h1>
      <div>
        <table className="m-auto px-2 py-1 mt-5 w-3/12 text-center">
          <caption className="border-b-2 border-t-2 mb-4 font-bold text-[22px]">
            Rutina de gym
          </caption>

          <thead>
            <tr className="border-b">
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
      <div className="w-250">
        <h2 className="font-bold text-[22px] text-center border-b-2 border-t-2 m-auto mt-5 px-2 py-1 w-3/12">Dietas</h2>
        <div className="border-2 m-5 px-3 rounded-3xl py-1">
          <h3 className="text-center border-b m-auto w-3/12 font-bold">Dieta mediterránea</h3>
          <p className="font-semibold py-1">Características principales:</p>
          <ul className="list-disc px-6 py-1">
            <li>
              Énfasis en alimentos vegetales: Abundancia de frutas, verduras,
              legumbres, cereales integrales, frutos secos y semillas.
            </li>
            <li>
              Aceite de oliva como grasa principal: Utilizado en la preparación
              de alimentos y como aderezo.
            </li>
            <li>
              Consumo moderado de pescado y aves: Preferencia por el pescado
              azul y carnes blancas.
            </li>
            <li>
              Consumo limitado de carnes rojas y dulces: Se recomienda consumir
              carnes rojas con moderación y limitar los dulces.
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
              Actividad física regular: La dieta mediterránea se complementa con
              un estilo de vida activo.
            </li>
          </ul>
        </div>
        <div className="border-2 m-5 px-3 py-1 rounded-3xl">
          <h3 className="text-center border-b m-auto w-2/4 font-bold">Dieta cetogénica (Recomendada para personas con obesidad, diabetes tipo 2 o síndrome metabólico):</h3>
          <p className="font-semibold py-1">Características principales:</p>
          <ul className="list-disc px-6 py-1">
            <li>
              Reducción de carbohidratos: Se restringe la ingesta de alimentos
              ricos en carbohidratos como pan, pasta, arroz, cereales, azúcares
              y algunas frutas y verduras.
            </li>
            <li>
              Aumento de grasas: Se incrementa el consumo de grasas saludables,
              como aguacate, aceite de oliva, frutos secos, semillas, pescado
              azul y productos lácteos enteros.
            </li>
            <li>
              Consumo moderado de proteínas: Se mantiene una cantidad moderada
              de proteínas, que también pueden ser utilizadas como fuente de
              energía, pero en menor medida que las grasas.
            </li>
          </ul>
        </div>
        <img src="/dietImage.png" alt="diet image" className="h-100 w-160 absolute bottom-17 left-265 border-2 px-4 py-2 rounded-3xl"/>
      </div>
    </div>
  );
}

export { GymRoutine };
