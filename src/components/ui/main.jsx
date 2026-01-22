"use client";
const { Button } = require("./button");

function MainPage() {

  return (
    <main className="m-3 rounded flex flex-col justify-center items-center">
      <h1 className="h bg-blue-400 m-3 w-67 px-2 py-2 flex justify-center items-center h-20 font-bold text-[40px] text-black rounded">
        Salud física
      </h1>
      <div className="w-full flex justify-center items-center">
        <Button
          className={"btn alimentationBtn m-3 bg-[#878BCE] h-10 w-30 px-2 rounded-2xl"}
          text={"Alimentación"}
          href={"/alimentation"}
          // onClick={changePage}
        />
        <Button
          className={"btn gymRoutineBtn m-3 bg-[#878BCE] h-10 w-30 px-2 rounded-2xl"}
          text={"Rutina gym"}
          href={"/gymRoutine"}
          // onClick={changePage}
        />
      </div>
      <h1 className="h bg-blue-400 m-3 w-70 px-2 py-2 flex justify-center items-center h-20 font-bold text-[40px] text-black rounded">
        Salud mental
      </h1>
      <div className="w-full flex justify-center items-center">
        <Button
          className={"btn commonConditionsBtn m-3 bg-[#878BCE] h-10 w-50 px-2 rounded-2xl"}
          text={"Condiciones comunes"}
          href={"/commonConditions"}
          // onClick={changePage}
        />
        <Button
          className={"btn addictionsBtn m-3 bg-[#878BCE] h-10 w-30 px-2 rounded-2xl"}
          text={"Adicciones"}
          href={"/addictions"}
          // onClick={changePage}
        />
      </div>
      <h1 className="h bg-blue-400 m-3 w-67 px-2 py-2 flex justify-center items-center h-20 font-bold text-[40px] text-black rounded">
        Salud social
      </h1>
      <div className="w-full flex justify-center items-center">
        <Button
          className={"btn socialSupportBtn m-3 bg-[#878BCE] h-10 w-35 px-2 rounded-2xl"}
          text={"Apoyo social"}
          href={"/socialSupport"}
          // onClick={changePage}
        />
        <Button
          className={"btn interpersonalRelationshipsBtn m-3 bg-[#878BCE] h-10 w-60 px-2 rounded-2xl"}
          text={"Relaciones interpersonales"}
          href={"/interpersonalRelationships"}
          // onClick={changePage}
        />
      </div>
    </main>
  );
}

export { MainPage };
