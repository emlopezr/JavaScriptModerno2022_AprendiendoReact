import React from 'react';

const Resultado = ({ total, plazo, cantidad }) => {
    return (
        <div className='u-full-width resultado'>
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: ${cantidad.toFixed(2)}</p>
            <p>A pagar en: {plazo} meses</p>
            <p>Su pago mensual es de: ${(cantidad / plazo).toFixed(2)}</p>
            <p>Pago total: ${total.toFixed(2)}</p>
        </div>
    );
}

export default Resultado;