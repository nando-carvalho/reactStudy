import React from 'react';
import Time from './Time';
import Time from './Partida';

export default class PlacarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante: 0,
        };
    }

    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        });
    }

    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        });
    }

    render() {
        //recurso de extração de dados
        const {partida, casa, visitante} = this.props;
        const estilo = {float: "left", "marginRight": "20px"};
        return (
            <div>
                <div style={estilo}>
                    <h4>Casa</h4>
                    <Time
                    // nome={this.props.casa.nome} gols={0}
                    // gols={this.state.gols_casa}
                    // marcarGol={this.marcarGolCasa.bind(this)}/>
                    // Refatorando - posso fazer isso da forma abaixo a partir da declaração da variavel casa acima
                    nome={casa.nome} gols={0}
                    gols={this.state.gols_casa}
                    marcarGol={this.marcarGolCasa.bind(this)}/>
                </div>
                <div style={estilo}>
                    <Partida
                        // estadio={this.props.partida.estadio}
                        // data={this.props.partida.data}
                        // horario={this.props.partida.horario}/>
                        // Refatorando - posso fazer isso da forma abaixo
                        {...partida} />
                </div>
                <div style={estilo}>
                    <h4>Visitante</h4>
                    <Time
                        nome={visitante.nome} gols={0}
                        gols={this.state.gols_visitante}
                        marcarGol={this.marcarGolVisitante.bind(this)}/>
                </div>
                <div>{this.props.clima}</div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}

PlacarContainer.propTypes = {
    clima: React.PropTypes.string,
    tempo: React.PropTypes.number.isRequired,
};

PlacarContainer.defaultProps = {
    clima: 'Ensolarado',
};
