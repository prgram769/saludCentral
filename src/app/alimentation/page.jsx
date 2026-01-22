"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Alimentacion({ nPage, setNPage }) {
  function changeMainPage() {
    if (nPage != 0) {
      setNPage(0);
    }
  }

  function goWiki() {
    window.open(
      "https://www.who.int/es/news-room/fact-sheets/detail/healthy-diet",
    );
  }

  return (
    <main className="alimentationMain flex flex-1 flex-col">
      {" "}
      <h1 className="alimentationTitle font-bold bg-green-500 text-black text-center text-[40px]">
        INVESTIGACIÓN Y COMUNICADO DE LA OMS SOBRE LA ALIMENTACIÓN SANA
      </h1>
      <section className="alimentationSection flex flex-1 justify-center items-center">
        <div className="alimentationText1 border-2 border-orange-300 bg-lime-100 rounded-3xl text-center w-130 text-[13px] m-2">
          <h2 className="rounded px-2 py-1 text-center bg-[#AFD06E] text-black font-bold m-7">
            Datos y cifras
          </h2>
          <ul className="list-disc px-4 py-1 m-2">
            <li>
              Una dieta saludable ayuda a protegernos de la malnutrición en
              todas sus formas, así como de las enfermedades no transmisibles,
              entre ellas la diabetes, las cardiopatías, los accidentes
              cerebrovasculares y el cáncer.
            </li>
            <li>
              En todo el mundo, las dietas insalubres y la falta de actividad
              física están entre los principales factores de riesgo para la
              salud.
            </li>
            <li>
              Los hábitos alimentarios sanos comienzan en los primeros años de
              vida; la lactancia materna favorece el crecimiento sano y mejora
              el desarrollo cognitivo; además, puede proporcionar beneficios a
              largo plazo, entre ellos la reducción del riesgo de sobrepeso y
              obesidad y de enfermedades no transmisibles en etapas posteriores
              de la vida.
            </li>
            <li>
              La ingesta calórica debe estar equilibrada con el gasto calórico.
              Para evitar un aumento malsano de peso, las grasas no deberían
              superar el 30% de la ingesta calórica total.
            </li>
            <li>
              Limitar el consumo de azúcar libre a menos del 10% de la ingesta
              calórica total forma parte de una dieta saludable. Para obtener
              mayores beneficios se recomienda reducir su consumo a menos del 5%
              de la ingesta calórica total.
            </li>
            <li>
              Mantener el consumo de sal por debajo de 5 gramos diarios
              (equivalentes a menos de 2 g de sodio por día) ayuda a prevenir la
              hipertensión y reduce el riesgo de cardiopatías y accidente
              cerebrovascular entre la población adulta.
            </li>
          </ul>
        </div>
        <Image
          height={4 * 120}
          width={4 * 160}
          alt="alimentation image of a healthy diet"
          className="alimentationImg px-4 py-4 m-3 border-2 bg-lime-100 rounded-3xl border-orange-300"
          src="/platoOMSwikipedia.jpg"
        />
        <div className="alimentationText2 border-2 bg-lime-100 rounded-3xl border-orange-300 text-center text-[13px] w-130 m-2">
          <h2 className="rounded px-2 py-1 text-center bg-[#AFD06E] text-black font-bold m-7">
            Dieta sana para adultos
          </h2>
          <ul className="list-disc px-4 py-1 m-2">
            <li>
              Frutas, verduras, legumbres (tales como lentejas y alubias),
              frutos secos y cereales integrales (por ejemplo, maíz, mijo,
              avena, trigo o arroz moreno no procesados).
            </li>
            <li>
              Al menos 400 g (o sea, cinco porciones) de frutas y hortalizas al
              día, excepto papas, batatas, mandioca y otros tubérculos
              feculentos.
            </li>
            <li>
              Menos del 10% de la ingesta calórica total de azúcares libres, que
              equivale a 50 gramos (o unas 12 cucharaditas rasas) en el caso de
              una persona con un peso corporal saludable que consuma
              aproximadamente 2000 calorías al día, aunque para obtener
              beneficios de salud adicionales lo ideal sería un consumo inferior
              al 5% de la ingesta calórica total. Los azúcares libres son todos
              aquellos que los fabricantes, cocineros o consumidores añaden a
              los alimentos o las bebidas, así como los azúcares naturalmente
              presentes en la miel, los jarabes y los zumos y concentrados de
              frutas.
            </li>
            <li>
              Menos del 30% de la ingesta calórica diaria procedente de grasas.
              Las grasas no saturadas (presentes en pescados, aguacates, frutos
              secos y en los aceites de girasol, soja, canola y oliva) son
              preferibles a las grasas saturadas (presentes en la carne grasa,
              la mantequilla, el aceite de palma y de coco, la nata, el queso,
              la mantequilla clarificada y la manteca de cerdo), y las grasas
              trans de todos los tipos, en particular las producidas
              industrialmente (presentes en pizzas congeladas, tartas, galletas,
              pasteles, obleas, aceites de cocina y pastas untables), y grasas
              trans de rumiantes (presentes en la carne y los productos lácteos
              de rumiantes tales como vacas, ovejas, cabras y camellos). Se
              sugirió reducir la ingesta de grasas saturadas a menos del 10% de
              la ingesta total de calorías, y la de grasas trans a menos del 1%.
              En particular, las grasas trans producidas industrialmente no
              forman parte de una dieta saludable y se deberían evitar.
            </li>
            <li>
              Menos de 5 gramos de sal (aproximadamente una cucharadita) al día.
              La sal debería ser yodada.
            </li>
          </ul>
        </div>
      </section>
      <footer className="bg-emerald-200 px-3 flex justify-center items-center">
        <Button
          // onClick={goWiki}
          href={"https://www.who.int/es/news-room/fact-sheets/detail/healthy-diet"}
          text={"Página de la información"}
          onClick={null}
          className="btn bg-emerald-100 font-bold rounded text-center px-2 py-1 m-2 mr-5"
        />
        <Button
          text={"Página principal"}
          className={
            "btn bg-emerald-100 text-black font-bold rounded px-2 py-1 m-2"
          }
          href={"/"}
          onClick={null}
          // onClick={changeMainPage}
        />
      </footer>
    </main>
  );
}

export { Alimentacion };
