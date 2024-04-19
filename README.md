# Componente HouseUrbanization

## Descripción

- El código es un componente de React llamado HouseUrbanization que utiliza la sintaxis de clase. El componente simula el progreso de la construcción de una casa, cambiando el estado constructionStarted de forma secuencial cada 2 segundos.

##Estados

-**constructionStarted**: String que representa el estado actual de la construcción de la casa. Inicializado con el valor 'Property'.

# Funciones de Manejo

- **componentDidMount**: Se ejecuta después de que el componente se monta en el DOM. Utiliza setTimeout para cambiar el estado de constructionStarted a 'Construction Started' después de 2 segundos.

- **componentDidUpdate**: Se ejecuta cuando el estado o las propiedades del componente cambian. Utiliza setTimeout para cambiar constructionStarted secuencialmente a 'Living Room', 'Dining Room', 'Kitchen', 'Bathroom', 'Bedroom', 'Swimming Pool', 'Garage' y finalmente 'Completed', cada 2 segundos.
jsx
