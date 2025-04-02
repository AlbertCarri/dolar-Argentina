"use server";

import DrawDolar from "@/components/DrawDolar";

export default async function Home() {
  const response = await fetch("https://dolarapi.com/v1/dolares", {
    cache: "force-cache",
  });
  if (!response.ok)
    return (
      <>
        <h1 className="text-center text-4xl text-red-800 p-8">
          ERROR AL CARGAR LOS DATOS
        </h1>
        <h3 className="text-center text-4xl p-8">
          {response.status} {response.statusText}
        </h3>
      </>
    );
  const dolar = await response.json();

  return (
    <>
      <h1 className="text-center text-4xl p-8">
        Cotización del dolar en Argentina hoy
      </h1>
      <DrawDolar dolar={dolar} />
    </>
  );
}
