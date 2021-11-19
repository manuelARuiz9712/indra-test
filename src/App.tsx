import React, { useState } from 'react';

import './App.css';
import { customPow, getFibonachiSerie } from './utils/methods';

const App = () => {

  const [quantity, setQuantity] = useState<number>(0);
  const [fibonachiSerie, setFibonachiSerie] = useState<Array<number>>([]);

  const [numberOne, setNumberOne] = useState<number>(0);
  const [numberTwo, setNumberTwo] = useState<number>(0);
  const [powResult, setPowResult] = useState<number>(0);


  const generateFibonachiSec = () => {
    setFibonachiSerie(getFibonachiSerie(quantity));
  }


  const CalculatePow = () => {
    setPowResult(customPow(numberOne, numberTwo));
  }



  return (
    <div className="App">

      <section className='section' >
        <div className='title' >
          <h4>Serie fibonachi</h4>

          <div className='form-wrapper' >
            <input
              type="number"
              onChange={e => setQuantity(Number(e.target.value))}
              placeholder='Cantidad de numeros' />
            <button
              onClick={generateFibonachiSec}
            >Generar secuencia</button>
          </div>

          {fibonachiSerie.length > 0 && <h6>Resultado</h6>}
          {
            fibonachiSerie.length > 0 && <div className='list-number' >

              {
                fibonachiSerie.map(ele =>
                  <div
                    key={ele}
                    className='item' >
                    {ele}
                  </div>
                )
              }
            </div>
          }
        </div>
      </section>


      <section className='section' >
        <div className='title' >
          <h4>Calculo de potencia</h4>

          <div className='form-wrapper' >
            <input
              type="number"
              onChange={e => setNumberOne(Number(e.target.value))}
              placeholder='Numero 1 (base)' />
            <input
              type="number"
              onChange={e => setNumberTwo(Number(e.target.value))}
              placeholder='Numero 2 potencia ' />
            <button
              onClick={CalculatePow}
            >Calcular potencia</button>
          </div>

          {[powResult].length > 0 && <h6>Resultado</h6>}
          {
            [powResult].length > 0 && <div className='list-number' >

              {
                [powResult].map(ele =>
                  <div
                    key={ele}
                    className='item' >
                    {ele}
                  </div>
                )
              }
            </div>
          }
        </div>
      </section>
    </div>
  );
}

export default App;
