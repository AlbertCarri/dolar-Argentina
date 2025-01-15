import "./globals.css";

export const metadata = {
  title: "Cotizacion Dolar Argentina",
  description: "Cotización del dolar hoy en Argentina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:title" content="Cotizacion del dolar Argentina" />
        <meta property="og:description" content="Cotización del dolar hoy" />
        <meta property="og:image" content="https://dolar-argentina.vercel.app/web.jpg" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
