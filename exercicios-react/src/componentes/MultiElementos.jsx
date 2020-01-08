import React from 'react'

//Primeira Solução. Mais usada
export default props =>
        <div>
            <h1>Parte 1</h1>
            <h2>Parte 2</h2>
        </div>


//Segunda Solução
/*export default props =>
    <React.Fragment>
        <h1>Parte 1</h1>
        <h2>Parte 2</h2>
    </React.Fragment>*/

//Terceira Opção
/*
export default props =>
    [
        <h1>Parte 1</h1>,
        <h2>Parte 2</h2>
    ]
*/


