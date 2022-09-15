import React from 'react'

export const Rendering1 = () => {
  const loading  = false;

  if(loading === true){
    return (
      <div>
        <p>caargando...</p>
      </div>
    )
  }

  return(
    <div>
      <p>datos cargados</p>
    </div>
  )
}
