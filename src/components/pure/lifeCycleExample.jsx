/**
 * Ejemp`lo de componente de tipo clase que dispone de los
 * metodos de ciclo de vida
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount() {
        console.log("DIDMOUNT: ACuando el componente ya está listo");
    }

    componentWillReceiveProps(nextProps) {
        console.log("WILLRECEIVEPROPS: Si va a recibir props");

    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe o no actualizarse
         * return true
         * return false
         */
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("WILLUPDATE: Justo antes de actualizarse");

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DIDUPDATE: Justo despues de actualizarse");

    }

    componentWillUnmount() {
        console.log("WILUNMOUNT: Justo antes de desaparecer");

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

LifeCycleExample.propTypes = {

};

export default LifeCycleExample;