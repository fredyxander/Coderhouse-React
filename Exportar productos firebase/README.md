### `Antes de ejecutar este archivo y cargar nuevos documentos dentro de la coleccion items, deben borrar todos los documentos que ya hayan creado, para que luego no vayan a tener conflictos con la informacion de los diferentes productos.`

Para correr este proyecto es necesario:

1. Instalar los paquetes:
### `npm install`

2. Agregar su arreglo de productos en el archivo **'baseDeDatos.js'**
#### `Importante remover los campos de id`

3. En el archivo 'json-to-firestore.js', modificar la variable **firebaseConfig** linea #9 con sus credenciales

4. En el archvio 'json-to-firestore.js', en la linea #31, modificar el objeto **newProduct** con los mismo nombres de sus campos

5. Ubicarse en la terminal dentro de la carpeta *'exportar productos firebase'* y ejecutar el comando:

### `node json-to-firestore.js`

Luego de ejecutar el archivo, revisar que se hallan creado los documentos dentro de firestore.
