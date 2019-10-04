import React from  'react';

import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "01/06/2019",
        horario: "19h",
    },
    casa: {
        nome: "Flamengo",
    },
    visitante: {
        nome: "Botafogo",
    }
};

export default class App extends React.Component {
    render() {
        // return <PlacarContainer
        //     partida={dados.Partida}
        //     casa={dados.casa}
        //     visitante={dados.visitante} />;
        // Refatorando - posso refazer isso da forma abaixo
        return <PlacarContainer {...dados} clima={'Ensolarado'} tempo={92} />;
    }
}
