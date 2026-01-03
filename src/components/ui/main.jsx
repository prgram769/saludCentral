const { Button } = require("./button");

function MainPage({nPage, setNPage}) {

  function changePage() {
    if (event.target.getAttribute("class").includes("alimentationBtn") == true) {
      setNPage(1);
    } else if (event.target.getAttribute("class").includes("gymRoutineBtn" ) == true) {
      setNPage(2);
    } else if (event.target.getAttribute("class").includes("commonConditionsBtn") == true) {
      setNPage(3);
    } else if (event.target.getAttribute("class").includes("addictionsBtn") == true) {
      setNPage(4);
    } else if (event.target.getAttribute("class").includes("socialSupportBtn") == true) {
      setNPage(5);
    }
  }

  return (
    <main className="m-3 rounded flex flex-col justify-center items-center">
      <h1 className="bg-blue-400 m-3 w-65 px-2 py-1 flex justify-center items-center h-20 font-bold text-[40px] text-black rounded">
        Salud física
      </h1>
      <div>
        <Button
          className={"btn alimentationBtn m-3 bg-[#878BCE] h-10 w-30 px-2 rounded-2xl"}
          text={"Alimentación"}
          onClick={changePage}
        />
        <Button
          className={"btn gymRoutineBtn m-3 bg-[#878BCE] h-10 w-30 px-2 rounded-2xl"}
          text={"Rutina gym"}
          onClick={changePage}
        />
      </div>
      <h1 className="bg-blue-400 m-3 w-70 px-2 py-1 flex justify-center items-center h-20 font-bold text-[40px] text-black rounded">
        Salud mental
      </h1>
      <div>
        <Button
          className={"btn commonConditionsBtn m-3 bg-[#878BCE] h-10 w-50 px-2 rounded-2xl"}
          text={"Condiciones comunes"}
          onClick={changePage}
        />
        <Button
          className={"btn addictionsBtn m-3 bg-[#878BCE] h-10 w-30 px-2 rounded-2xl"}
          text={"Adicciones"}
          onClick={changePage}
        />
      </div>
      <h1 className="bg-blue-400 m-3 w-67 px-2 py-1 flex justify-center items-center h-20 font-bold text-[40px] text-black rounded">
        Salud social
      </h1>
      <div>
        <Button
          className={"btn socialSupportBtn m-3 bg-[#878BCE] h-10 w-35 px-2 rounded-2xl"}
          text={"Apoyo social"}
          onClick={changePage}
        />
        <Button
          className={"btn m-3 bg-[#878BCE] h-10 w-60 px-2 rounded-2xl"}
          text={"Relaciones interpersonales"}
        />
      </div>
    </main>
  );
}

export { MainPage };
