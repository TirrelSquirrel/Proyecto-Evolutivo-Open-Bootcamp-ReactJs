/**
 * Ejemplo de uso de metodo componentDidUpdate
 * en componente de Clase y uso de hook en componente
 * funcional
 */


import React, { Component, useEffect } from 'react'

export default class DidUpdate extends Component {
    componentDidUpdate() {
        console.log('el componente recibe nuevos props o en su estado privado')
    }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    );
  }
}


export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('el componente se ha actualizado')
    })
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    );
}


