import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import im from 'f/hero.png';

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: 3,
            lvl: 1,
            hp: 100,
        };
    }
    render() {
        return (
            <div>
                <div><img src={"http://pngimg.com/uploads/armour/armour_PNG41.png"} width={140} alt="hero"/></div>
                <div>lvl: {this.state.lvl}</div>
                <div>hp: {this.state.hp}</div>
            </div>
        )
    }
}

class Evil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: 3,
            lvl: 1,
            hp: 100,
        };
    }
    render() {
        return (
            <div>
                <div><img src={"http://pngimg.com/uploads/armour/armour_PNG41.png"} width={140} alt="hero"/></div>
                <div>lvl: {this.state.lvl}</div>
                <div>hp: {this.state.hp}</div>
            </div>
        )
    }
}


class Game extends React.Component {
    render() {
        return (
            <div id="game">
                <div id="hero">
                    <Hero/>
                </div>
                <div id="evil">
                    <Evil/>
                </div>
                <div className="game-info">
                    <button onClick={}>But</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);