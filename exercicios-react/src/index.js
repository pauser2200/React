import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeiroComponente from './componentes/Primeirocomponente'
//import {CompA, CompB} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from  './componentes/ComponenteClasse'
import Contador from './componentes/Contador'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Contador numero={0}/>
        {/*<ComponenteClasse valor="" />*/}
        {/*<Pai />*/}
        {/*<ComponenteComFuncao />*/}


        {/*<Familia sobrenome="Souza">*/}
        {/*    <Membro nome="Paulo"/>*/}
        {/*    <Membro nome="Cássia"/>*/}
        {/*    <Membro nome="Pablo"/>*/}
        {/*</Familia>*/}


        {/* <PrimeiroComponente valor="Bom dia!"/>
        <CompA valor="Componente A!"/>
        <CompB valor="Componente B!"/>
        <MultiElementos />*/}

        {/*<FamiliaSilva />*/}
    </div>
    , elemento)