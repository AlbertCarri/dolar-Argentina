# Cotización del Dólar en Argentina

## Descripción

Esta aplicación muestra la cotización actual del dólar en Argentina, con información sobre la compra y venta de diferentes tipos de dólares. Los datos se obtienen de una API externa, `dolarapi.com`, y se muestran de manera visualmente atractiva usando React y Next.js.

La aplicación se encarga de obtener los datos en el servidor utilizando `getServerSideProps` y los renderiza en el lado del cliente, permitiendo al usuario ver la información actualizada de forma rápida.

### Características:
- **Visualización dinámica** de los tipos de dólares disponibles (por ejemplo, el dólar oficial, el dólar blue, etc.).
- **Interfaz responsiva**, que adapta el diseño a diferentes tamaños de pantalla.
- **Manejo de errores** en caso de que la API falle o no se pueda cargar la información correctamente.
- **Optimización** con cache para evitar llamadas innecesarias a la API.

## Tecnologías Utilizadas

- **Next.js**: Framework de React utilizado para el renderizado del lado del servidor y la generación de la interfaz.
- **React**: Biblioteca para construir la interfaz de usuario.
- **API externa**: Utiliza la API de `dolarapi.com` para obtener las tasas de cambio actuales.
- **Tailwind CSS**: Framework CSS utilizado para los estilos, proporcionando un diseño limpio y flexible.
  
## Cómo Funciona

### Lado del Servidor (`page.jsx`)

El componente `Home` se encarga de realizar una llamada HTTP a la API de `dolarapi.com` para obtener los datos de cotización del dólar. Este componente es ejecutado en el servidor, asegurando que los datos estén disponibles al momento de renderizar la página. Si la llamada a la API falla, se muestra un mensaje de error con el código de estado correspondiente.

### Lado del Cliente (``DrawDolar.jsx``)

Una vez que los datos son cargados, se pasan al componente DrawDolar, que es un componente del lado del cliente. Este componente toma la información de las cotizaciones y las muestra en una serie de tarjetas estilizadas. Cada tarjeta muestra el nombre del tipo de dólar, su precio de compra y venta, y se le asigna un color de fondo diferente para mejorar la visualización.

### Manejo de Errores  

Si la solicitud a la API no es exitosa, se muestra un mensaje de error con el código de estado HTTP y una descripción del problema. Esto asegura que los usuarios sean informados de cualquier fallo en el proceso de obtención de datos.

```js
if (!response.ok) return (
  <h1>Error al cargar los datos: {response.status} {response.statusText}</h1>
);
```