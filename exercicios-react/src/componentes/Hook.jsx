import React, { useState, useEffect } from 'react'

export default props => {
    const [contador, setContador] = useState(3)
    const [parImpar, setParImpar] = useState('Impar')

    useEffect(() => {
        contador % 2 === 0 ? setParImpar('Par') : setParImpar('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h1>{parImpar}</h1>
            <button
                onClick={() => setContador(contador + 1)}>
                Inc
            </button>

            <button disabled={contador === 0}
                onClick={() => setContador(contador - 1)}>
                Dec
            </button>
        </div>
    )
}