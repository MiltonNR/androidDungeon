
# AndroidDungeon

Es un mock tomado de la tienda de Jeff, de los Simpson. Vende comics, figuras y tarjetas de beisball. 

Esta hecha en react y tiene sus componentes de muestra y su contexto. 


Es un chiste, y no es un chiste. Que te diviertas. 

Descripción
Esta aplicación es una aplicación de React que utiliza React Router para la navegación y el enrutamiento. También utiliza el contexto de React para gestionar el estado del carrito de compras.

La aplicación consta de varios componentes principales:

App.js: Es el componente principal de la aplicación. Configura la navegación y el enrutamiento utilizando react-router-dom y proporciona el contexto del carrito de compras a través de CartProvider.
NavBar.js: Es el componente de la barra de navegación que se muestra en la parte superior de la aplicación. Contiene enlaces a diferentes rutas y muestra información sobre el carrito de compras.
ItemListContainer.js: Es el componente que muestra una lista de elementos o productos. Puede mostrar todos los productos o filtrarlos por categoría según el ID de la categoría proporcionado en la URL.
ItemDetailContainer.js: Es el componente que muestra los detalles de un elemento o producto específico según el ID del elemento proporcionado en la URL.
Cart.js: Es el componente que muestra el contenido del carrito de compras. Permite al usuario ver y modificar los elementos en el carrito.
Checkout.js: Es el componente que muestra la página de pago y finalización de la compra.

## Configuración
Siga estos pasos para configurar y ejecutar la aplicación en su entorno local:

Clonar el repositorio o descargar los archivos de la aplicación.
Asegúrese de tener Node.js instalado en su máquina.
Abra una terminal en el directorio raíz de la aplicación.
Ejecute el comando npm install para instalar las dependencias necesarias.
Ejecute el comando npm start para iniciar la aplicación.
La aplicación estará disponible en http://localhost:3000 en su navegador.
## Appendix

Base de datos Firestore y Funcionamiento del Contexto


### Base de datos Firestore
La base de datos utilizada en esta aplicación es Firestore, un servicio de base de datos en la nube proporcionado por Firebase. Firestore es una base de datos NoSQL que permite almacenar y sincronizar datos en tiempo real entre diferentes clientes. Proporciona una API fácil de usar para interactuar con la base de datos desde una aplicación web.

En el contexto de esta aplicación, Firestore se utiliza para almacenar la información de los productos, como su nombre, descripción, precio y categoría. Cada producto se guarda como un documento en una colección de Firestore. La integración con Firestore se realiza utilizando la biblioteca oficial de Firebase para JavaScript.

Para utilizar Firestore en su propia aplicación, deberá crear un proyecto en Firebase y configurar Firestore como su base de datos. Luego, deberá proporcionar las credenciales de Firebase en su aplicación para establecer la conexión con la base de datos y realizar operaciones de lectura y escritura.

### Funcionamiento del Carrito de Compras
El carrito de compras se gestiona mediante el uso de un contexto especial llamado "Contexto del Carrito". El contexto del carrito proporciona una forma de compartir el estado del carrito entre diferentes componentes sin tener que pasar manualmente los datos a través de las propiedades (props).

El contexto del carrito se crea utilizando la función createContext de React. Este contexto tiene una propiedad llamada cart, que representa los elementos actuales en el carrito. Además, proporciona varias funciones para interactuar con el carrito, como addItem, removeItem, clearCart y updateQuantity.

El proveedor del contexto (CartProvider) envuelve los componentes que necesitan acceder al estado del carrito. Este proveedor contiene el estado actual del carrito y las funciones relacionadas. Cuando se utiliza el contexto del carrito en un componente, se puede acceder al estado y a las funciones del carrito utilizando el hook useContext(CartContext).

Las funciones proporcionadas por el contexto del carrito permiten realizar diversas operaciones en el carrito:

addItem: Agrega un nuevo elemento al carrito o actualiza la cantidad si el elemento ya está presente.
removeItem: Elimina un elemento específico del carrito.
clearCart: Vacía completamente el carrito.
updateQuantity: Actualiza la cantidad de un elemento en el carrito.
Estas funciones facilitan la gestión del carrito de compras en diferentes componentes de la aplicación, ya que se puede acceder y modificar el estado del carrito de manera sencilla.

En resumen, el contexto del carrito permite compartir el estado del carrito y las funciones relacionadas entre diferentes componentes de la aplicación, simplificando la gestión y actualización del carrito de compras.
## Authors

- [@MiltonNR](https://github.com/MiltonNR)

## Color Reference

![Black](https://via.placeholder.com/10/000000?text=+) #000000
![Green](https://via.placeholder.com/10/00ff00?text=+) #00ff00
![Color de ejemplo 1](https://via.placeholder.com/10/D9CBBF?text=+) #D9CBBF
![Color de ejemplo 2](https://via.placeholder.com/10/733641?text=+) #733641





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
