import React from 'react';

const Test = (condicion) => {
    {/*if (condicion) 
        return <h1>Hola</h1>
    return <h1>Adios</h1>*/}

    {/*return (
        <>
            {condicion && <h1>Hola</h1>}
            {!condicion && <h1>Adios</h1>}
        
        </>
    )*/}

    return (
        <>
            {condicion ? <h1>Hola</h1> : <h1>Adios</h1>}
        </>
    )
}

export default Test;
