function GymRoutine({nPage, setNPage}) {
  return (
  	<div className="min-h-screen light">
      <h1>EJERCICIO Y DIETAS</h1>
      <div>
        <h2>Rutina de gym</h2>
        <table>
          <tr>
            <th>Dias de la semana</th>
            <th>Entrenamiento</th>
          </tr>
          <tr>
            <th>Lunes</th>
            <th>Piernas y abdominales + cardio</th>
          </tr>
          <tr>
            <th>Martes</th>
            <th>Pecho + cardio</th>
          </tr>
          <tr>
            <th>Miércoles</th>
            <th>Espalda y abdominales + cardio</th>
          </tr>
          <tr>
            <th>Jueves</th>
            <th>Brazos y pecho + cardio</th>
          </tr>
          <tr>
            <th>Viernes</th>
            <th>Abdominales + cardio</th>
          </tr>
          <tr>
            <th>Sábado</th>
            <th>Pecho + cardio</th>
          </tr>
          <tr>
            <th>Domingo</th>
            <th>Abdominales + cardio</th>
          </tr>
        </table>
      </div>
      <div>
        <h2>Dietas</h2>
        <div>
          <h3>Dieta mediterránea</h3>
          <p>Características principales:</p>
          <ul>
            <li>Énfasis en alimentos vegetales: Abundancia de frutas, verduras, legumbres, cereales integrales, frutos secos y semillas.</li>
            <li>Aceite de oliva como grasa principal: Utilizado en la preparación de alimentos y como aderezo.</li>
            <li>Consumo moderado de pescado y aves: Preferencia por el pescado azul y carnes blancas.</li>
            <li>Consumo limitado de carnes rojas y dulces: Se recomienda consumir carnes rojas con moderación y limitar los dulces.</li>
            <li>Consumo moderado de lácteos: Principalmente yogur y quesos, evitando los lácteos grasos.</li>
            <li>Vino con moderación: Generalmente se consume con moderación durante las comidas.</li>
            <li>Actividad física regular: La dieta mediterránea se complementa con un estilo de vida activo.</li>
          </ul>
        </div>
        <div>
          <h3>Dieta cetogénica (Recomendada para personas con obesidad, diabetes tipo 2 o síndrome metabólico):</h3>
          <p>Características principales:</p>
          <ul>
            <li>Reducción de carbohidratos: Se restringe la ingesta de alimentos ricos en carbohidratos como pan, pasta, arroz, cereales, azúcares y algunas frutas y verduras.</li>
            <li>Aumento de grasas: Se incrementa el consumo de grasas saludables, como aguacate, aceite de oliva, frutos secos, semillas, pescado azul y productos lácteos enteros.</li>
            <li>Consumo moderado de proteínas: Se mantiene una cantidad moderada de proteínas, que también pueden ser utilizadas como fuente de energía, pero en menor medida que las grasas.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export {GymRoutine};
