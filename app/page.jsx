'use client'

import { useEffect, useState } from "react"
import DrawDolar from "@/components/DrawDolar"

export default function Home() {
  const [dolar, setDolar] = useState()

  useEffect(() => {
    fetch('https://dolarapi.com/v1/dolares#')
      .then((response) => {
        return response.json()
      })
      .then((datos) => {
        setDolar(datos)
        console.log(datos)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1 className="text-center text-4xl p-8">Cotización del dolar en Argentina hoy</h1>
      {dolar && (
        <DrawDolar dolar={dolar}/>
      )}
    </>
  )
}
