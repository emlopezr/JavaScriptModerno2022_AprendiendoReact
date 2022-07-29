import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {
  // Definir el State para los inputs
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');

  // States para el resultado
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  // Carga condicional del total
  let componente;

  if (cargando) {
    componente = <Spinner />
  } else if (total === 0) {
    componente = <Mensaje />
  } else {
    componente =
      <Resultado
        total={total}
        plazo={plazo}
        cantidad={cantidad}
      />
  }

  return (
    <Fragment>
      <Header
        titulo="Cotizador de Prestamos"
        descripcion="Utiliza el formulario y obtén una cotización"
      />

      <div className='container'>
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />

        <div className='mensajes'>
          {componente}
        </div>

      </div>
    </Fragment >
  );
}

export default App;