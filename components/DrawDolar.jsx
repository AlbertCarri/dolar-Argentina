export default function DrawDolar({ dolar }) {
  const color=['bg-green-800','bg-blue-900','bg-gray-700','bg-amber-900','bg-teal-900','bg-yellow-600','bg-red-800']
  return (
    <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 w-1/2 m-auto rounded-2xl py-4 gap-1">
      {dolar.map((dolares, index) => (
        <div key={index} className={`${color[index]} text-stone-200 flex flex-col w-60 m-auto mt-4 mb-2 p-4 rounded-xl items-start shadow-black shadow-lg`}>
          <div className="text-xs mb-2 uppercase font-bold italic m-auto ">Dolar {dolares.nombre}</div>
          <div className="h-[1px] bg-slate-400 w-full mb-2"></div>
          <div className="text-xl">Compra : ${dolares.compra}</div>
          <div className="text-xl">Venta : ${dolares.compra}</div>
        </div>
      ))}
    </div>
  )
}