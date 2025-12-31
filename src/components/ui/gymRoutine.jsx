function GymRoutine({ nPage, setNPage }) {
  return (
    <div className="min-h-screen light flex flex-col">
      <h1 className="text-center font-bold text-[40px]">EJERCICIO Y DIETAS</h1>
      <div className="border-2 w-96">
        <h2 className="border-b-2 font-bold text-[22px]">Rutina de gym</h2>
        <table className="text-center">
          <thead>
            <tr>
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
      <div>
        <h2>Dietas</h2>
        <div>
          <h3>Dieta mediterránea</h3>
          <p>Características principales:</p>
          <ul>
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
        <div>
          <h3>
            Dieta cetogénica (Recomendada para personas con obesidad, diabetes
            tipo 2 o síndrome metabólico):
          </h3>
          <p>Características principales:</p>
          <ul>
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
      </div>
    </div>
  );
}

export { GymRoutine };
