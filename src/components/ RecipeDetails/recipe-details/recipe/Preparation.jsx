import React, {useContext} from 'react';
import { RecipeContext } from '../../../contexts/recipe';
import Skeleton from 'react-loading-skeleton';
import style from "../recipe-details.module.css";

export const Preparation = () => {
  const contextValue = useContext(RecipeContext)
  
  return (
    <div className={style.preparation}>
      <h4>Preparación: </h4>
      {/* {contextValue.loading ?  */}
      <div>
        <h5>Paso 1:</h5>
        <p>
          Cocer la primavera en una olla con agua caliente durante 5
          minutos para descongelarla. Luego colar las verduras y reservar.
        </p>
        <h5>Paso 2:</h5>
        <p>Cortar el zapallo italiano con cáscara en rodajas y saltearlo.
          Reservar. Luego, rallar el trozo de queso.</p>
        <h5>Paso 3:</h5>
        <p>En una olla cocer la salsa de tomate por el tiempo que indica
          el envase. Aliñar a gusto con pimienta y orégano. Reservar.</p>
        <h5>Paso 4:</h5>
        <p>En una fuente cuadrada o rectangular, poner un poco de aceite
          y armar la lasaña. Primero poner en la base salsa de tomate, luego
          poner láminas de lasaña previamente humedecidas con agua tibia y una
          pizca de sal, agregar encima las rodajas de zapallo italiano, las
          verduras, el queso y el atún. Repetir el proceso hasta ocupar todos
          los ingredientes.</p>
        <h5>Paso 5:</h5>
        <p>Poner la fuente en el horno previamente precalentado a 180°C
          (temperatura media), hasta que la lasaña esté dorada aproximadamente
          20 minutos. Sacar la fuente del horno y servir cuatro porciones.</p>
        <h5>¡Ahora a disfrutar esta exquisita receta!</h5>

      </div>
      {/* : (contextValue.recipe || {} ).preparation
      } */}
    </div>
  );
}