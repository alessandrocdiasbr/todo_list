import { useState } from "react";

export default function Contador() {
    const [contador, setContador] = useState(0); //esse é o estado e pode ficar somente aqui

    return (
        <div>
            <BotaoMenos contador={contador} setContador={setContador} />
            <Valor contador={contador} />
            <BotaoMais contador={contador} setContador={setContador} />
        </div>
    )
}

function BotaoMais({ contador, setContador }) { //passei a props desestruturada 
    return (
        <button onClick={() => setContador(contador + 1)}>+</button>
    )
}

function BotaoMenos({ contador, setContador }) {
    return (
        <button onClick={() => setContador(contador - 1)}>-</button>
    )
}

function Valor({ contador }) { //no valor neste caso não preciso do setContador
    return (
        <span>{contador}</span>
    )
}