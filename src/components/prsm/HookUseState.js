/**
 * Tentar alterar o estado de algo ao clicar no botão
 */
import React from 'react';
import { useState } from 'react';

export const HookUseState = () => {
    /**
     * Cria uma variavel contendo dois objetos que irão receber 
     * uma função
     * 
     * A Primeira vaiavel é a respeito do estado em si
     * enquanto a segunda variavel é responsável pela alteração do estado (state)
     */
    const [numero, setNumero] = useState(0);
    const incrementarNumero = () => {
        setNumero(numero + 1);
    }
    return (
        <>
            <h1>{numero}</h1>
            <button onClick={incrementarNumero}>Mudar</button>
        </>
  )
}
