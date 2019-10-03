import React from 'react';
import Time from './Time';
import Time from './Partida';

export default class PlacarContainer extends React.Component {

    decrementar() {
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    incrementar() {
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    render() {
        return (
            <div>
                <div style={{float: "left", "marginRight": "20px"}}>
                    <h4>Casa</h4>
                    <Time nome={this.props.casa.nome} gols={0} />
                </div>
                <div style={{float: "left", "marginRight": "20px"}}>
                    <Partida estadio={this.props.partida.estadio}
                                data={this.props.partida.data}
                                horario={this.props.partida.horario}/>
                </div>
                <div style={{float: "left", "marginRight": "20px"}}>
                    <h4>Visitante</h4>
                    <Time nome={this.props.casa.nome} gols={0}/>
                </div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}
