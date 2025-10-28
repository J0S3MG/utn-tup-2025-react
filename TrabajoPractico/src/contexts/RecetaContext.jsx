import { createContext, useContext, useEffect, useState } from "react";

const RecetaContext = createContext(null);//Crea el objeto de Contexto. Es el "canal" por donde se compartirán los datos.

//Este componente es el que mantiene el estado y envuelve la parte de la aplicación que necesita acceso a los datos.
export const RecetaProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);//Hook de estado para guardar la lista de recetas.
  const [isLoading, setIsLoading] = useState(true);//Hook de estado para indicar si los datos están todavía cargando.

  useEffect(() => { //Hook de efecto: se usa para realizar operaciones que tienen efectos secundarios (ej: Cargar el json).
    fetch('/src/data/recetas.json') //Cargar recetas desde el archivo JSON.
      .then(response => response.json())//Se transforma la respuesta de formato raw a json.
      .then(data => { //Actualizamos el estado de la recetas con los datos.
        setRecetas(data);
        setIsLoading(false);//Y cambiamos 'isLoading' a 'false' porque la carga terminó.
      })
      .catch(error => {//Captura cualquier error que ocurra durante el fetch o la conversión JSON.
        console.error('Error al cargar recetas:', error);
        setIsLoading(false);
      });
  }, []);

  // Función para obtener una receta por ID
  const getRecetaById = (id) => {
    return recetas.find(receta => receta.id === parseInt(id));
  };

  return (//El componente Proveedor debe retornar el objeto de Contexto con el sufijo Provider.
    //La prop 'value' contiene todos los datos y funciones que se compartirán con los componentes que usen este Contexto.
    <RecetaContext.Provider value={{ recetas, isLoading, getRecetaById }}>
      {children} {/*Renderiza los componentes hijos que envuelve.*/}
    </RecetaContext.Provider>
  );
};

export const useRecetas = () => {//Exporta el Hook personalizado 'useRecetas'.
  return useContext(RecetaContext);//Esto permite a otros componentes consumir los valores expuestos en 'value'.
};