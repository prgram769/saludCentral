const { Button } = require("./button");

function MainPage({isAlimentation, setAlimentation}) {

  function changePage() {
    isAlimentation ? console.log("es Alimentación") : console.log("no es alimentacion");
    !isAlimentation ? setAlimentation(true) : null
  }

  return (
    <div className="m-3 rounded flex flex-col justify-center items-center">
      <h1 className="bg-blue-400 m-3 w-65 px-2 py-1 flex justify-center items-center h-20 font-bold text-[40px] text-black rounded">
        Salud física
      </h1>
      <div>
        <Button
          className={"btn m-3 bg-[#878BCE] h-10 w-30 px-2 rounded-2xl"}
          text={"Alimentación"}
          onClick={changePage}
        />
        <Button
          className={"btn m-3 bg-[#878BCE] h-10 w-30 px-2 rounded-2xl"}
          text={"Rutina gym"}
        />
      </div>
      <h1 className="bg-blue-400 m-3 w-70 px-2 py-1 flex justify-center items-center h-20 font-bold text-[40px] text-black rounded">
        Salud mental
      </h1>
      <div>
        <Button
          className={"btn m-3 bg-[#878BCE] h-10 w-50 px-2 rounded-2xl"}
          text={"Condiciones comunes"}
        />
        <Button
          className={"btn m-3 bg-[#878BCE] h-10 w-30 px-2 rounded-2xl"}
          text={"Adicciones"}
        />
      </div>
      <h1 className="bg-blue-400 m-3 w-67 px-2 py-1 flex justify-center items-center h-20 font-bold text-[40px] text-black rounded">
        Salud social
      </h1>
      <div>
        <Button
          className={"btn m-3 bg-[#878BCE] h-10 w-35 px-2 rounded-2xl"}
          text={"Apoyo social"}
        />
        <Button
          className={"btn m-3 bg-[#878BCE] h-10 w-60 px-2 rounded-2xl"}
          text={"Relaciones interpersonales"}
        />
      </div>
    </div>
  );
}

export { MainPage };
