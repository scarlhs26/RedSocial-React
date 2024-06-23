# Red social Con React + Vite

Este proyecto es una pequeña red social creada con React + Vite con el objetivo de poner en práctica los conocimientos que he adquirido del desarrollo web. No se utilizó ninguna base de datos para este proyecto, sin embargo se utilizó el LocalStorage del navegador para almacenar los datos de los usuarios registrados, ya que esta aplicación solo trabaja con datos de usuarios y el almacenamiento de un token que permite el inicio de sesión dentro de la aplicación. Esta aplicación no se adapta a móviles pero sí a pantallas de escritorio de diferentes tamaños. Tiene una interfaz visualmente atractiva y proporciona una buena experiencia de usuario.

## ⚙ Funcionalidades

- **Registro:** El usuario se puede registrar y sus datos serán almacenados en el LocalStorage del navegador.
- **Login:** El usuario podrá iniciar sesión y al mismo tiempo se almacenará un token que permitirá mantener la sesión activa por un tiempo determinado.
- **Validaciones:** La aplicación informa al momento de registrarse y de iniciar sesión si se está ingresando un dato inválido.
- **Contraseña encriptada:** La contraseña sera encriptada dentro de nuestra base de datos.
- **Rutas privadas y publicas:** No se puede acceder a ciertas rutas si no eres administrador o si no tienes una sesion iniciada.
- **Modo oscuro:** El usuario tiene la posibilidad de activar el modo oscuro dentro de la aplicación si así lo desea.
- **Roles de usuario:** Dentro de la aplicación existen dos tipos de usuarios, el usuario común y el usuario administrador.
- **Administración:** Existe una sección dentro de la aplicación a la cual solo se puede acceder si el usuario es administrador. Dentro de esta sección, el administrador puede ver a todos los usuarios, editar su información y eliminarlos si así lo requiere.
- **Perfil de usuario:** Dentro del menú de navegación se encuentra el perfil del usuario que está logueado, donde se muestra la información personal de este.
- **Juego de piedra, papel o tijera:** Dentro de la aplicación hay un pequeño juego de piedra, papel o tijera, en el cual el usuario puede jugar con la computadora.
- **Cerrar sesión:** Se elimina el token del usuario que estaba previamente logueado.

## ⚙ Instalación e inicialización

Para la instalación, es necesario que desde la terminal navegues hasta la ubicación del archivo y luego instales las dependencias con el siguiente comando:

```bash
npm i
```
Luego, para inicializar la aplicación, también desde la terminal, ejecuta el siguiente comando:
```bash
npm run dev.
```
De esta forma, la aplicación estará disponible en el navegador a través de un servidor local.

## 🖼 interfaz y experiencia de usuario
- ![Feed del usuario:](./imagenes/Feed.png)
