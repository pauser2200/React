import React from 'react'
import { componentesFilhosComProps } from '../utils/Utils'

export default props =>
    <div>
        <h1>Família</h1>

        {componentesFilhosComProps(props)}

        {/*{React.cloneElement(props.children, {...props})}*/}
        {/*{React.cloneElement(props.children, props)}*/}
        {/*{React.cloneElement(props.children, {sobrenome:props.sobrenome})}*/}
        {/*{props.children}*/}

    </div>