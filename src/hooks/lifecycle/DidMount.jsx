/**
 * Ejemplo de uso del ciclo de vida del metodo
 * en componente clase y dfel hook en ciclo de vida
 * del componente funcional
 */

import React, { Component, useEffect } from 'react'

export default class DidMount extends Component {
    componentDidMount() {
        console.log('comportamiento antes de que sea añadido al DOM')
    }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('comportamiento antes de que sea añadido al DOM')
    }, [])

    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
}


