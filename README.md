# Lecto Planet APP

Lecto Planet APP es una aplicación desarrollada con Express que permite la gestión y consumo de un catálogo de libros en formato JSON. La aplicación está diseñada para soportar distintos roles de usuario: un Super Administrador con acceso completo, Editores que pueden modificar la información de los libros, y usuarios que pueden explorar el catálogo, ver los detalles completos de los libros y añadirlos a un carrito de compras.

## Características

- **Super Administrador**:
  - Acceso total a la aplicación.
  - Gestión de usuarios, roles y permisos.
  - Administración completa del catálogo de libros (crear, editar, eliminar).

- **Editores**:
  - Acceso para editar y actualizar información de los libros.
  - Capacidad para añadir nuevos libros al catálogo.
  - Modificar descripciones, precios y detalles de los libros existentes.

- **Usuarios**:
  - Navegación por el catálogo de libros.
  - Visualización de detalles completos de cada libro.
  - Funcionalidad de carrito de compras para añadir y gestionar libros.
  - Proceso de compra desde el carrito de compras.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/0drdev/lecto-planet.git
   cd lecto-planet
