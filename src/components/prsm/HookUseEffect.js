/**
 * # Hook useEffect, executa uma ação sempre que uma outra ação (pré-determinada) 
 * acontecer, muito parecido com os hooks do WordPress
 */

import React from 'react'
import { useState, useEffect } from 'react'

export const HookUseEffect = () => {
    const [itensConteudo, setItensConteudo] = useState([])
    const [tipoConteudo, setTipoConteudo] = useState("");

    // quando o tipo de conteudo mudar deve ser executado uma ação
    // Passamos uma função como primeiro parametro, e o que queremos assistir como segundo
    useEffect(() => {
        if (tipoConteudo != ""){

            const fetchTipoConteudo = async () => {
                // fetch('https://jsonplaceholder.typicode.com/'+tipoConteudo)
                fetch('https://api.mercadolibre.com/sites/MLB/search?search_type=scancategory=MLB1405&q=vinho%20EPU&offset=50')
                .then(response => response.json())
                .then(json => setItensConteudo(json.results))
            }
            fetchTipoConteudo();
        }
    }, [tipoConteudo]);
    
    // const [efeito, setEfeito] = useEffect([]);
    return (        
        <div>
            {/** Altera o posts sempre que for clicado no botão usando o hook useState */}
            <h1>{tipoConteudo}</h1>
            <button onClick={() => setTipoConteudo("posts")}>De 1 a 50 resultados</button>
            <button onClick={() => setTipoConteudo("comments")}>Comentários</button>
            <button onClick={() => setTipoConteudo("todos")}>Tarefas</button>
            {itensConteudo.map((item) => (
             <p key={item.id}>{item.title}</p>   
            ))}

        </div>
  )
}
